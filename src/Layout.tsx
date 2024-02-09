import { NavBar } from "./components/NavBar"
import { Outlet } from "react-router-dom"


export function Layout() {
  return (
    <>
      <NavBar/>
      <main>
        {/* Outlet is the parent to all of the routes listed */}
        <Outlet/>
      </main>
    </>
  )
}