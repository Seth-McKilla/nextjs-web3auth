import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";

declare const process: {
  env: {
    NEXT_PUBLIC_WEB3AUTH_CLIENT_ID: string;
  };
};

let web3Auth: Web3Auth | undefined;

if (typeof window !== "undefined") {
  web3Auth = new Web3Auth({
    chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155, chainId: "0x3" },
    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID, // get your client id from developer dashboard
  });
}

export default web3Auth;
