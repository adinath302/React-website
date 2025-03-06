import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import AppLayout from './components/Layout/AppLayout'

import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import { CountryDetails } from './components/Layout/CountryDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // constant component "parent"
    errorElement: <ErrorPage />,
    children: [
      // nested routes "children" 
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }])

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App