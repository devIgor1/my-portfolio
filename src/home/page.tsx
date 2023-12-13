import Container from "../components/container"
import { GrProjects } from "react-icons/gr"
import { FaPhoneAlt } from "react-icons/fa"
import { SiStarship } from "react-icons/si"
import { IoPeopleCircle } from "react-icons/io5"
import nodeIcon from "../assets/node-js.svg"
import cssIcon from "../assets/css.svg"
import firebaseIcon from "../assets/firebase.png"
import gitIcon from "../assets/git.svg"
import htmlIcon from "../assets/html.svg"
import javascriptIcon from "../assets/javascript.svg"
import typescriptIcon from "../assets/typescript.png"
import reactIcon from "../assets/react.svg"
import postgreIcon from "../assets/postgresql.svg"
import prismaIcon from "../assets/prisma.svg"
import tailwindIcon from "../assets/tailwindcss.svg"
import mongodbIcon from "../assets/mongodb.svg"
import githubIcon from "../assets/github.png"

export default function Home() {
  return (
    <main className="bg-bgPurple min-h-screen min-w-full w-full bg-purple-gradient bg-center">
      <Container>
        <div className="w-full min-h-screen bg-center">
          <div className="pt-10">
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
                      <span className="max-[420px]:hidden">
                        <IoPeopleCircle color="#fff" size={25} />
                      </span>
                      <a className="text-sm lg:text-lg text-white  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2">
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
            <div className="mt-72 flex items-center justify-center mb-5">
              <h1 className="text-gray text-4xl lg:text-5xl font-nunitoSans font-bold italic flex gap-2 max-[355px]:text-3xl">
                <SiStarship />
                Hi, I am Igor,
              </h1>
            </div>
            <div className="flex items-center justify-center flex-col gap-5">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent max-[355px]:text-4xl">
                Full-Stack
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent max-[355px]:text-4xl">
                Developer
              </h1>
              <a className="font-poppins bg-[#c35dd810] min-w-xl flex items-center hover:text-purewhite  hover:bg-[#c35dd830] text-sm md:text-md 2xl:text-md text-white px-5 py-[8px]  md:px-6 md:py-2 transition-all  ease-in-out duration-300 rounded-full shadow-inner shadow-[#bf97ff70] border border-[#816bac] cursor-pointer">
                About me
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
