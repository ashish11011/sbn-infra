import NavBar from '@/components/navBar'
import React from 'react'

const layout = ({children}: any) => {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default layout