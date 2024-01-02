'use client'

import React from 'react'
import useWagmi from './hooks/useWagmi';
import { WagmiConfig } from 'wagmi';
import { Web3Modal } from '@web3modal/react';

const Provider = ({children}: {children: React.ReactNode}) => {

    const [mounted, setMounted] = React.useState<boolean>(false);
    React.useEffect(() => setMounted(true), []);

  const { wagmiConfig, projectId }: any = useWagmi();

  return (
    <>
      {mounted && wagmiConfig && (
        <WagmiConfig config={wagmiConfig}>
                  {children}
              </WagmiConfig>
          )}
    </>
  )
}

export default Provider
