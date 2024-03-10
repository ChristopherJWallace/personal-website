import { Footer } from "./components/FOOTER/Footer"
import { NavBar } from "./components/NAVBAR/Navbar"
import { Outlet } from "react-router-dom"


export function Layout() {
  return (
    <>
      <NavBar/>
      {/* Outlet is the parent to all of the routes listed */}
      <Outlet/>
      <Footer/>
    </>
  )
}