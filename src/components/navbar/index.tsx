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
          <img className="w-[55px] md:w-[60px]" src={logo} alt="" />
          <div className="flex gap-2 text-white"></div>
          <div>
            <ul className="flex gap-5 ">
              <li className="flex items-center gap-2">
                <a
                  onClick={() => handleNavClick("projects")}
                  href="#projects"
                  className="text-base lg:text-lg  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2 bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent"
                >
                  <span className="max-[420px]:hidden text-zinc-400">
                    <GrProjects />
                  </span>
                  Projects
                </a>
              </li>
              <li className="flex items-center gap-2 hover:scale-105 duration-300">
                <span className="max-[420px]:hidden text-zinc-400">
                  <FaPhoneAlt />
                </span>
                <a
                  onClick={() => handleNavClick("contact")}
                  href="#contact"
                  className="text-base  lg:text-lg hover:scale-105 cursor-pointer duration-300 flex items-center gap-2 bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent"
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
