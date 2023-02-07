import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";


import config from '../config';
const { chains, provider } = configureChains(
  [config.chainId == 1 ? mainnet : polygonMumbai],
  [
    config.chainId == 1 ? jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/eth",
        };
      },
    }) : jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/polygon_mumbai",
        };
      },
    }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'TGAI Portal',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})
import { ToastContainer } from 'react-toastify';

function TGAI({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Provider store={store}>
  
          <Component {...pageProps} />
          <ToastContainer theme="dark" position="bottom-center"/>
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>

  );
}

export default TGAI;
