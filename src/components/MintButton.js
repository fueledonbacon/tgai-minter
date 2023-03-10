import React from "react";

import nftABI from "../abi/TGAI.json";
import config from "../../config";
import { ethers, BigNumber } from "ethers";
import { useSigner } from "wagmi";
import { toast } from "react-toastify";
import useSWR from "swr";
import ReactLoading from "react-loading";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function MintButton({ quantity = 1 }) {
    const { openConnectModal } = useConnectModal();
    const contractLink = config.chainId == 1? "https://etherscan.io/address/" + config.contract : "https://mumbai.polygonscan.com/address/" + config.contract;
    const { data: signer } = useSigner();
    const [loadingContract, setLoadingContract] = React.useState(true);

    const { data: contractData } = useSWR("/contract", async () => {
        setLoadingContract(true);
        const rpc = config.chainId == 1 ?
            "https://rpc.ankr.com/eth" :
            "https://rpc.ankr.com/polygon_mumbai";
        const provider = new ethers.providers.JsonRpcProvider(rpc);
        const contract = new ethers.Contract(config.contract, nftABI, provider);
        const price = await contract.price();
        const supply = (await contract.totalSupply()).toNumber();
        const saleActive = await contract.saleActive();
        const maxSupply = (await contract.COLLECTION_SIZE()).toNumber();
        setLoadingContract(false);
        return {
            price: price,
            priceDisplay: ethers.utils.formatEther(price),
            saleActive: saleActive,
            supply,
            maxSupply
        }
    });

    const handleMint = async () => {
        if (!signer){
            openConnectModal();
            throw new Error("Not connected, opening connect modal")
        }
        if(quantity < 1) {
            throw new Error("Quantity must be greater than 0")
        }
        const contract = new ethers.Contract(config.contract, nftABI, signer);
        const price = await contract.price();

        const tx = await contract.mint(BigNumber.from(quantity), { value: price.mul(quantity) })
        
        const receipt = await tx.wait()
        if(receipt.status == 0) {
            throw new Error("Transaction failed")
        }
        return receipt
    }

    const [mintButtonContent, setMintButtonContent] = React.useState("Adopt Alien")
    const setButtonContentRef = React.useRef(setMintButtonContent);
    React.useEffect(() => {
        if (loadingContract)
            setButtonContentRef.current(<ReactLoading type="spin" height={32} width={32} />)
        else if (!contractData?.saleActive) {
            setButtonContentRef.current("Sale not active")
        } else if (contractData?.supply >= contractData?.maxSupply) {
            setButtonContentRef.current("Sold Out")
        } else if (contractData.saleActive && !signer) {
            setButtonContentRef.current("Connect Wallet")
        } else if (contractData.saleActive && signer) {
            setButtonContentRef.current("Adopt Alien")
        }
    }, [contractData, loadingContract])

    return (
        <div>
            <button
                className="metaportal_fn_button wallet_opener"
                style={{
                    minWidth: "300px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: '0 auto'
                }}
                onClick={(e) => {
                    console.log("Minting")
                    e.preventDefault();
                    toast.promise(handleMint, {
                        pending: "Adopting your alien",
                        success: "Alien adopted Successfully",
                        error: {
                            render({ data }) {
                                let message = data.message;
                                console.error(e)
                                if (message.includes("PUBLIC_SALE_INACTIVE")) {
                                    message = "Sale is not active"
                                } else if (message.includes("EXCEEDS_COLLECTION_SIZE")) {
                                    message = "Sold Out"
                                } else if (message.includes("VALUE_TOO_LOW")) {
                                    message = "That's not quite enough ETH to adopt."
                                } else if (message.includes("ACTION_REJECTED")){
                                    message = "It's fine. Another time maybe."
                                }
                                return message;
                            }
                        }
                    })
                }}>
                {mintButtonContent}
            </button>
            <a href={contractLink}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}>View Contract</a>
            <p>({contractData?.priceDisplay || '??'} ETH / adoption)</p>

        </div>
    );
}

