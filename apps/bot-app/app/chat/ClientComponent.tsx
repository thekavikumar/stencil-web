'use client'

import { useContext } from 'react'
import { AppContext } from '@samagra-x/stencil-provider'
import { useLocalization } from '@samagra-x/stencil-hooks'
import { useBotConfig } from '@samagra-x/stencil-hooks'
import dynamic from 'next/dynamic'
import styles from '../src/components/dialer-popup/index.module.css'
import DialerPopUp from '../src/components/dialer-popup'
import { ChatUI } from '@samagra-x/stencil-molecules'

const ClientComponent = () => {
  const context = useContext(AppContext)
  const config = useBotConfig('component', 'botDetails')
  console.log('hola', { config })

  return (
    <>
      {context?.showDialerPopup && (
        <div
          className={styles.overlay}
          // onClick={() => context?.setShowDialerPopup(false)}
        >
          {context?.showDialerPopup && (
            <DialerPopUp setShowDialerPopup={context?.setShowDialerPopup} />
          )}
        </div>
      )}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          bottom: '1vh',
          top: '100px',
        }}
      >
        <ChatUI />
      </div>
    </>
  )
}

export default ClientComponent
