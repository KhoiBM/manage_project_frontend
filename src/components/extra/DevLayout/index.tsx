import React from 'react'
import { Outlet } from 'react-router-dom'

const DevLayout = () => {
  return (
    <>
      <div>DevLayout</div>
      <Outlet />
    </>
  )
}
export default DevLayout
