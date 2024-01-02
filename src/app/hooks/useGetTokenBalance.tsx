

'use client'

import { ethers, formatEther } from 'ethers'
import React, { useMemo, useState } from 'react'
import ABI_ERC20 from '../_contract/ILady.json'
import { useAccount, useContractRead } from 'wagmi'
import { Contract } from 'ethers'


const useGetTokenBalance = async ({addressToken, chainId}: {addressToken: string, chainId: number}) => {

    const { address } = useAccount();
    const [balance, setBalance] = useState('');
    

    const provider = new ethers.BrowserProvider(window.ethereum as any);

    const contract = new Contract("0x1674f0Ab1a0Ae8178f904433744177D5704c2047", ABI_ERC20, provider);

    const balanceA = await contract.balanceOf(address);
    console.log("--balance", formatEther(balanceA));

    // useContractRead({
    //     address: "0x1674f0Ab1a0Ae8178f904433744177D5704c2047",
    //     abi: ABI_ERC20,
    //     functionName: "balanceOf",
    //     chainId: Number(chainId),
    //     args: [address],
    //     cacheOnBlock: true,
    //     watch: true,
    //     onSuccess(data) {
    //         console.log(data)
    //     },
    // });


   
}

export default useGetTokenBalance
