import { FaPhoneAlt } from "react-icons/fa"
import { GrProjects } from "react-icons/gr"
import logo from "../../assets/I LOGO.png"

export const NavBar = () => {
  const handleNavClick = (id: string) => {
    document.getElementById(id)
  }

  return (
    <>
      <div className="relative">
        <div className="absolute blur inset-0 bg-white rounded-full animate-pulse"></div>
        <nav className="relative flex flex-row items-center border-t border-[#303034] justify-between h-[45px] px-5 bg-bgPurple rounded-full ">
          <img className="w-[25px] md:w-[60px]" src={logo} alt="" />
          <div className="flex gap-2 text-white"></div>
          <div>
            <ul className="flex gap-5 ">
              <li className="flex items-center gap-2">
                <a
                  onClick={() => handleNavClick("projects")}
                  href="#projects"
                  className="text-sm lg:text-lg  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2 text-white"
                >
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
                <a
                  onClick={() => handleNavClick("contact")}
                  href="#contact"
                  className="text-sm  lg:text-lg hover:scale-105 cursor-pointer duration-300 flex items-center gap-2 text-white"
                >
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
