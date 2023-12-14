import { FaPhoneAlt } from "react-icons/fa"
import { GrProjects } from "react-icons/gr"
import { IoPeopleCircle } from "react-icons/io5"

export const NavBar = () => {
  return (
    <div className="relative">
      <div className="absolute blur inset-0 bg-white rounded-full"></div>
      <nav className="relative font-poppins flex flex-row items-center border-t border-[#303034] justify-between h-[53px] px-5 bg-bgPurple rounded-full">
        <div className="flex gap-2 text-white">
          <img
            className="w-[18px] md:w-[25px] bg-white rounded"
            src="/logo.png"
            alt=""
          />
        </div>
        <div>
          <ul className="flex gap-5 font-poppins">
            <li className="flex items-center gap-2">
              <a className="text-sm lg:text-lg text-white hover:scale-105 cursor-pointer duration-300 flex items-center gap-2">
                <span className="max-[420px]:hidden">
                  <GrProjects color="#fff" />
                </span>
                Projects
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a className="text-sm lg:text-lg text-white  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2">
                <span className="max-[420px]:hidden">
                  <IoPeopleCircle color="#fff" size={25} />
                </span>
                Social Media
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="max-[420px]:hidden">
                <FaPhoneAlt color="#fff" />
              </span>
              <a className="text-sm  lg:text-lg text-white  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
