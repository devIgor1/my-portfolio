import { FaPhoneAlt } from "react-icons/fa"
import { GrProjects } from "react-icons/gr"
import logo from "../../assets/I LOGO.png"

export const NavBar = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute blur inset-0 bg-white rounded-full animate-pulse"></div>
        <nav className="relative flex flex-row items-center border-t border-[#303034] justify-between h-[45px] px-5 bg-bgPurple rounded-full">
          <img className="w-[25px] md:w-[60px]" src={logo} alt="" />
          <div className="flex gap-2 text-white"></div>
          <div>
            <ul className="flex gap-5 font-neon">
              <li className="flex items-center gap-2">
                <a className="text-sm lg:text-lg  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2 bg-gradient-to-t from-violet-900 to-violet-50 bg-clip-text text-transparent">
                  <span className="max-[420px]:hidden">
                    <GrProjects color="#fffafa" />
                  </span>
                  Projects
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="max-[420px]:hidden">
                  <FaPhoneAlt color="#fffafa" />
                </span>
                <a className="text-sm  lg:text-lg hover:scale-105 cursor-pointer duration-300 flex items-center gap-2 bg-gradient-to-t from-violet-900 to-violet-50 bg-clip-text text-transparent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
