// import { useState } from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import '../styles/App.css'

import Principal from './Principal'
import Quiz from './Quiz'
import Result from './Result'
import {CheckUserExist} from '../helper/helper'


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
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
