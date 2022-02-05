import { Web3Auth } from "@web3auth/web3auth";
import {
  CHAIN_NAMESPACES,
  CONNECTED_EVENT_DATA,
  ADAPTER_EVENTS,
} from "@web3auth/base";

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

export const subscribeAuthEvents = (web3auth: Web3Auth) => {
  web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
    console.log("connected to wallet", data);
    // web3auth.provider will be available here after user is connected
  });
  web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
    console.log("connecting");
  });
  web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
    console.log("disconnected");
  });
  web3auth.on(ADAPTER_EVENTS.ERRORED, (error: any) => {
    console.log("error", error);
  });
};
