import Header from 'components/Header/Header'
import Loader from 'components/Loader/Loader'
import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
        <div className='container'>
            {/* <Toaster
                position="top-right"
                toastOptions={{duration:1500}}
            /> */}
            
            <Header />
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <Loader/>
        </Suspense> */}
        </div>
  )
}

export default Layout