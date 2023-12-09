import React from "react";
import { PolkitProvider } from "../../providers/Provider";
import type { Meta, StoryObj } from '@storybook/react';
import { astar,rococo,alephzero } from "../../chains";
import ConnectButton from "./ConnectButton";

export default {
  title: "Components/Button",
  component: ConnectButton,
  decorators : [
   (Story) => (
    <PolkitProvider theme={{
      size : "compact",
      appearence : {
        mode : "light",
      
      }
    }} defaultChain={astar} appName="testing">
       <Story  />
    </PolkitProvider>
   )
  ]
} as Meta<typeof ConnectButton>;

type StoryType = StoryObj<typeof ConnectButton>;

export const BlueBtn: StoryType = {
  args: {
    label: "Sign In",
    backGround : "blue",
    showChain:true
  },
};

export const IndingBtn: StoryType = {
  args: {
   backGround: "indingo",
    label: "Log In",
  },
};

export const PinkBtn: StoryType = {
  args: {
   backGround: "pink",
    label: "Connect Wallet",
  },
};