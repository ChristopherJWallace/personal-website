import { NavBar } from "./components/NAVBAR/NavBar"
import { Outlet } from "react-router-dom"


export function Layout() {
  return (
    <>
      {/* <NavBar/> */}
      {/* Outlet is the parent to all of the routes listed */}
      <Outlet/>
    </>
  )
}