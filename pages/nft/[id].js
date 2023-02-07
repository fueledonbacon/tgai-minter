import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../src/layout/Layout";
import config from "../../config";
import { ethers } from "ethers";
import nftABI from "../../src/abi/TGAI.json";
import MintButton from "../../src/components/MintButton";
import useSWR from "swr";
const Nft = ({ nfts }) => {

  const router = useRouter();
  const { id } = router.query;
  const { data: nft } = useSWR(`nft/${id}`, async () => {
    const rpc = config.chainId == 1 ?
      "https://rpc.ankr.com/eth" :
      "https://rpc.ankr.com/polygon_mumbai";
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const contract = new ethers.Contract(config.contract, nftABI, provider);
    const tokenURI = await contract.tokenURI(Number(id));
    const data = await fetch(tokenURI).then((res) => res.json())
    return data
  })


  const { data: contractData } = useSWR("/contract/" + id, async () => {
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
  const [similarItem, setSimilarItem] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = (type) => {
    if (type == "+") {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => Math.max(1, prev - 1));
    }
  };




  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div
                  className="img_in"
                  style={{ backgroundImage: `url(${nft && nft?.image})` }}
                >
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Share:</h5>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/facebook-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/instagram-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/pinterest-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/behance-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="separator">/</span>
                  <Link href="/collection">
                    <a>Collection</a>
                  </Link>
                  <span className="separator">/</span>
                  <span className="current">{nft?.name}</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text={nft && nft.name}
                data-align="left"
              >
                {nft && nft.name}
              </h3>
              <div className="desc">
                {nft?.description}
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/opensea.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/portal.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
          {/* Mint Box */}
          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>{ contractData?.saleActive ? "Public Mint is Live" : "Public mint not yet live" }</span>
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
                <MintButton/>
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
                  {/* 
      There is two types of countdown: due_date (Due Date), ever (Evergreen timer)
       1. 	data-type="due_date"
        In this case you have to change value of data-date. For example:
        data-date="October 13, 2022 12:30:00"
        It will mean that mint will finished at this time

       2. 	data-type="ever"
        In this case you have to change values of data-days, data-hours, data-minutes and data-seconds. For example:
        data-days="34"
        data-hours="10"
        data-minutes="20"
        data-seconds="0"
        It will mean that the time expires after this time, but when the page is refreshed, the value will return again. It means, it won't end.
     */}
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
          {/* !Mint Box */}
          {/* NFT Categories */}
          <div className="metaportal_fn_nft_cats">
            <ul>
              {nft?.attributes.map((item, index) => <li key={"attribute-"+index}>
                <div className="item">
                  <h4 className="parent_category">{item.trait_type}</h4>
                  <h3 className="child_category" title="Black Yukata">
                    {item.value}
                  </h3>
                </div>
              </li>)}
             
            </ul>
          </div>
          {/* !NFT Categories */}
          {/* Similar Items */}
          <div className="metaportal_fn_similar">
            <h3 className="fn__maintitle" data-text="Similar Items">
              Similar Items
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                {nfts &&
                  similarItem.map(
                    (nft, i) =>
                      nft.id < 8 && (
                        <li key={nft.id}>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src={nft.image} alt="" />
                              <Link href={`/nft/${nft.id}`}>
                                <a className="full_link"></a>
                              </Link>
                            </div>
                            <div className="title_holder">
                              <h3 className="fn_title">
                                <a href="#">{nft.title}</a>
                              </h3>
                            </div>
                          </div>
                        </li>
                      )
                  )}
              </ul>
            </div>
          </div>
          {/* !Similar Items */}
        </div>
      </div>
    </Layout>
  );
};

export default Nft;
// const mapStateToProps = (state) => ({
//   nft: state.nfts.nft,
//   nfts: state.nfts.data,
// });

// export default connect(mapStateToProps, { getSingleNft, getNfts })(Nft);
