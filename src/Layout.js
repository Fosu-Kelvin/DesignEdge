import Footer from "./footer/Footer"
import Nav from "./nav/Nav"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
     <>
      <Nav/>
      <main className="App">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default Layout