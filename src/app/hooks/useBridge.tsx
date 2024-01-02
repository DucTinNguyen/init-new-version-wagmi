import React from 'react'

import BridgeABI from '../_contract/Bridge.json'
import ERC20 from '../_contract/ILady.json'
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';

const useBridge =  ({ amount, desAddress, tokenAddress }: {
    amount: string;
    desAddress: string;
    tokenAddress: string;
}) => {

    const { address } = useAccount();


    const approveBridge = async () => {

        
        
    }
    

    const bridge = async () => {
        
    }

    return {
        approveBridge,
        bridge
    }


}

export default useBridge
