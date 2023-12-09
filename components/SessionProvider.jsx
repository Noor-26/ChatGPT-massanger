'use client'
import { SessionProvider as Provider } from "next-auth/react"
import { Session } from 'next-auth' 
const SessionProvider = ({children,session}) => {
  return (
    <div>
      <Provider >
      {children}
    </Provider>
    </div>
  )
}

export default SessionProvider
