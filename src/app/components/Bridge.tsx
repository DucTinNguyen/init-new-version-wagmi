'use client'
import React, { useState } from 'react'
import BtnConnect from './BtnConnect'
import TotalBalance from './TotalBalance'
import useGetTokenBalance from '../hooks/useGetTokenBalance'
import { useNetwork } from 'wagmi'
import useBridge from '../hooks/useBridge'

type Props = {}




const Bridge = (props: Props) => {

  // const [value, setValue] = useState<string>('');

  // const handleChange = (e: any) => { 
  //   setValue(e.target.value)
  // }

  // const { bridge } = useBridge({
  //   amount: value,
  //   desAddress: String(process.env.NEXT_PUBLIC_LADYS_TOKEN_B),
  //   tokenAddress: String(process.env.NEXT_PUBLIC_LADYS_TOKEN_A),
  // })


  // const handleBridge = () => {
  //   bridge()
  // }


  return (
    <div className='w-full lg:max-w-[1440px] mx-auto p-[100px]'>
      <div className='w-[500px] mx-auto flex flex-col space-y-5'>
        <div className='flex flex-col space-y-4 border border-[#292929] p-5'>
          <p className="w-full flex items-center justify-between">
            <span>Goerli</span>
            <TotalBalance addressToken={process.env.NEXT_PUBLIC_LADYS_TOKEN_A as string} chainId={Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_A)} />
          </p>
          <div className='w-full border border-[#292929] py-2 px-3 rounded-l'>
            {/* <input onChange={handleChange} className=' w-full border-none outline-none' type='number' placeholder='...type amount' /> */}
          </div>
        </div>

        <div className='flex'>
          <button className='bg-slate-500 w-fit mx-auto py-2 px-3 rounded'>
            Switch
          </button>
          <button onClick={() => {
            // handleBridge()
          }} className='bg-slate-500 w-fit mx-auto py-2 px-3 rounded'>
            Bridge
          </button>
          <BtnConnect /> 
        </div>
       



        <div className='flex flex-col space-y-4 border border-[#292929] p-5'>
          <p className="w-full flex items-center justify-between">
            <span>ARB Goerli</span>
            <TotalBalance addressToken={process.env.NEXT_PUBLIC_LADYS_TOKEN_B as string} chainId={Number(process.env.NEXT_PUBLIC_LADYS_CHAINID_B)} />
          </p>
        </div>

      </div>
      
    </div>
  )
}

export default Bridge