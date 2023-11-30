import Container from "../components/container"
import { FaFaceFlushed } from "react-icons/fa6"
import { GrProjects } from "react-icons/gr"
import { FaPhoneAlt } from "react-icons/fa"
import { SiStarship } from "react-icons/si"
import { IoPeopleCircle } from "react-icons/io5"

export default function Home() {
  return (
    <main className="bg-bgPurple min-h-screen w-full">
      <div className="w-full h-screen bg-purple-gradient bg-center">
        <div className="pt-10">
          <Container>
            <div className="relative">
              <div className="absolute blur inset-0 bg-white rounded-full"></div>
              <nav className="relative font-poppins flex flex-row items-center border-t border-[#303034] justify-between h-[53px] px-5 bg-bgPurple rounded-full">
                <div className="flex gap-2 text-white">
                  <img
                    className="w-[25px] bg-white rounded"
                    src="../../public/logo.png"
                    alt=""
                  />
                </div>
                <div>
                  <ul className="flex gap-5 font-poppins">
                    <li>
                      <a className="text-white  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2">
                        <GrProjects color="#fff" />
                        Projetos
                      </a>
                    </li>
                    <li>
                      <a className="text-white  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2">
                        <IoPeopleCircle color="#fff" size={25} />
                        Redes Sociais
                      </a>
                    </li>
                    <li>
                      <a className="text-white  hover:scale-105 cursor-pointer duration-300 flex items-center gap-2">
                        <FaPhoneAlt color="#fff" />
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="mt-72 flex items-center justify-center mb-5">
              <h1 className="text-gray text-5xl font-nunitoSans font-bold italic flex gap-2">
                <SiStarship />
                Olá eu sou o Igor,
              </h1>
            </div>
            <div className="flex items-center justify-center flex-col gap-5">
              <h1 className="text-6xl font-bold bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent">
                Desenvolvedor
              </h1>
              <h1 className="text-6xl font-bold bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent">
                Full-Stack
              </h1>
              <a className="font-poppins bg-[#c35dd810] min-w-xl flex items-center hover:text-purewhite  hover:bg-[#c35dd830] text-sm md:text-md 2xl:text-md text-white px-5 py-[8px]  md:px-6 md:py-2 transition-all  ease-in-out duration-300 rounded-full shadow-inner shadow-[#bf97ff70] border border-[#816bac] cursor-pointer">
                Sobre mim
              </a>
            </div>
          </Container>
        </div>
      </div>
    </main>
  )
}
