import Navbar from "@/Components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "@/Components/Footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen m-2 md:m-0" >
    {/* {NAVBAR} */}
    <header>
        <Navbar/>
    </header>
    {/* main-content */}
    <div className="flex-1">
        <Outlet/>
    </div>

    <footer>
      <Footer/>
    </footer>
        </div>
  )
}

export default MainLayout