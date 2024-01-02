
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'



const useWagmi = () => {

    const projectId: any = process.env.NEXT_PUBLIC_PROJECT_ID

    const metadata = {
        name: 'Web3Modal',
        description: 'Web3Modal Example',
        url: 'https://web3modal.com',
        icons: ['https://avatars.githubusercontent.com/u/37784886']
    }

    const chains = [mainnet, arbitrum]
    const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })


    // 1. Get projectID at https://cloud.walletconnect.com
    if (!projectId) {
        return null;
    }

    createWeb3Modal({ wagmiConfig, projectId, chains })
    

   

    return {
        projectId,
        wagmiConfig
    }

}

export default useWagmi;
