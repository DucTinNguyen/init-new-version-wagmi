'use client'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import React, { useEffect } from 'react'
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi';

type Props = {}

const BtnConnect = (props: Props) => {

    const { open, close } = useWeb3Modal();
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect()
    const { chains, switchNetwork } = useSwitchNetwork();
    const { chain } = useNetwork();
    
    const handleOnclick = () => {
       open();
    }

    useEffect(() => {
        if (address && chain?.id !==5){
            switchNetwork?.(5)
        }
    },[address])

    return (
      <>
            {address ? <span onClick={()=>{disconnect()}} >{address.slice(0,4) + "..." + address.slice(address.length - 4, address.length)}</span> : <button onClick={() => {
                handleOnclick()
            }} className='bg-slate-500 w-fit mx-auto py-2 px-3 rounded'>BtnConnect</button>}
      </>
    //   
  )
}
export default BtnConnect;