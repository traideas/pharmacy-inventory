import React from 'react'
import PublicNavbar from '../../shared/navbar/PublicNavbar'
import logo from '../../assests/logo/logo.png'

const PublicHome = () => {
  return (
    <div>
        <PublicNavbar />
        <div className='flex justify-center'>
          <img src={logo} className='bg-cover bg-center' alt='logo'/>
        </div>
        <h1 className='text-3xl font-semibold text-center -mt-28'>Pharmacy Inventory Management</h1>
    </div>
  )
}

export default PublicHome