import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout