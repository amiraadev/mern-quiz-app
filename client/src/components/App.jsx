// import { useState } from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import '../styles/App.css'

import Principal from './Principal'
import Quiz from './Quiz'
import Result from './Result'
import {CheckUserExist} from '../helper/helper'
import Verify from './Verify'
import FinalPage from './FinalPage'


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Principal/>
    },
    {
      path:"/quiz",
      element:<CheckUserExist><Quiz /></CheckUserExist>
    },
    {
      path:"/result",
      element:<CheckUserExist><Result /></CheckUserExist>
    },
    {
      path:"/verify",
      // element:<Verify />
       element:<CheckUserExist><Verify /></CheckUserExist>
    },
    {
      path:"/finalPage",
      // element:<Verify />
       element:<CheckUserExist><FinalPage /></CheckUserExist>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
