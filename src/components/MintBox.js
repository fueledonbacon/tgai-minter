import { useRouter } from "next/router";
import { useState } from "react";
import config from "../../config";
import { ethers } from "ethers";
import nftABI from "../../src/abi/TGAI.json";
import MintButton from "../../src/components/MintButton";
import useSWR from "swr";
const MintBox = () => {

    const { data: contractData } = useSWR("/contract/", async () => {
        const rpc = config.chainId == 1 ?
            "https://rpc.ankr.com/eth" :
            "https://rpc.ankr.com/polygon_mumbai";
        const provider = new ethers.providers.JsonRpcProvider(rpc);
        const contract = new ethers.Contract(config.contract, nftABI, provider);
        const price = await contract.price();
        const supply = (await contract.totalSupply()).toNumber();
        const saleActive = await contract.saleActive();
        const maxSupply = (await contract.COLLECTION_SIZE()).toNumber();
        return {
            price: price,
            priceDisplay: ethers.utils.formatEther(price),
            saleActive: saleActive,
            totalSupply: supply,
            maxSupply
        }
    });
    const [quantity, setQuantity] = useState(0);

    const updateQuantity = (type) => {
        if (type == "+") {
            setQuantity(prev => prev + 1);
        } else {
            setQuantity(prev => Math.max(1, prev - 1));
        }
    };
    return (
        <div className="metaportal_fn_mintbox">
            <div className="mint_left">
                <div className="mint_title">
                    <style>{`
                    .metaportal_fn_mintbox .mint_title span:before {
                        ${ !contractData?.saleActive && 'border-color: transparent transparent transparent red; '}
                    }`}</style>
                    <span  style={{ backgroundColor: !contractData?.saleActive && 'red' }}>{contractData?.saleActive ? "Public Mint is Live" : "Public mint not yet live"}</span>
                </div>
                <div className="mint_list">
                    <ul>
                        <li>
                            <div className="item">
                                <h4>Price</h4>
                                <h3>{contractData?.priceDisplay || '??'} ETH</h3>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <h4>Remaining</h4>
                                <h3>{contractData?.totalSupply || '??'}/{contractData?.maxSupply || '??'}</h3>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <h4>Quantity</h4>
                                <div className="qnt" style={{
                                    display: 'flex',
                                    gap: '20px',
                                    alignItems: 'center'
                                }}>
                                    <span
                                        className="decrease"
                                        onClick={() => updateQuantity("-")}
                                    >
                                        -
                                    </span>
                                    <span className="summ" data-price={quantity}>
                                        {quantity}
                                    </span>
                                    <span
                                        className="increase"
                                        onClick={() => updateQuantity("+")}
                                    >
                                        +
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <h4>Total Price</h4>
                                <h3>
                                    {(
                                        <span className="total_price">
                                            {Number(contractData?.priceDisplay) * quantity || '??'}
                                        </span>
                                    )}
                                    ETH + GAS
                                </h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mint_desc">
                    <MintButton quantity={quantity} />
                    <p>
                        By clicking “MINT NOW” button, you agree to our{" "}
                        <a href="#">Terms of Service</a> and our{" "}
                        <a href="#">Privacy Policy</a>.
                    </p>
                </div>
            </div>
            <div className="mint_right">
                <div className="mright">
                    <div className="mint_time">
                        <h4>Public Mint Ends In</h4>
                        <h3
                            className="metaportal_fn_countdown"
                            data-type="ever"
                            data-date="October 13, 2022 12:30:00"
                            data-days={34}
                            data-hours={10}
                            data-minutes={20}
                            data-seconds={0}
                        >
                            0d: 0h: 0m: 0s
                        </h3>
                    </div>
                    <div className="mint_checked">
                        <p>
                            <span className="text">Whitelist:</span>
                            <span className="status">
                                Soldout{" "}
                                <span className="icon">
                                    <img
                                        src="/svg/checked.svg"
                                        alt=""
                                        className="fn__svg"
                                    />
                                </span>
                            </span>
                        </p>
                        <p>
                            <span className="text">Presale:</span>
                            <span className="status">
                                Soldout{" "}
                                <span className="icon">
                                    <img
                                        src="/svg/checked.svg"
                                        alt=""
                                        className="fn__svg"
                                    />
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="mint_info">
                        <p>
                            You need to pay a GAS fee during minting. We allow max 5
                            mints per wallet.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MintBox;