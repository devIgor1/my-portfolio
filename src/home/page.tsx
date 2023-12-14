import Container from "../components/container"
import { SiStarship } from "react-icons/si"
import { KnowledgeSession } from "../components/knowledge"
import { NavBar } from "../components/navbar"
import { Projects } from "../components/projects"

export default function Home() {
  return (
    <main className="bg-bgPurple min-h-screen min-w-full bg-purple-gradient">
      <Container>
        <div className="w-full min-h-screen bg-center">
          <div className="pt-10">
            <NavBar />
            <div className="mt-72 flex items-center justify-center mb-5">
              <h1 className="text-gray text-4xl lg:text-5xl font-nunitoSans font-bold italic flex gap-2 max-[355px]:text-3xl">
                <SiStarship />
                Hello I'm Igor,
              </h1>
            </div>
            <div className="flex items-center justify-center flex-col gap-5">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent max-[355px]:text-4xl">
                Full-Stack
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent max-[355px]:text-4xl">
                Developer
              </h1>
              <a
                href="/me"
                className="font-poppins bg-[#c35dd810] min-w-xl flex items-center hover:text-purewhite  hover:bg-[#c35dd830] text-sm md:text-md 2xl:text-md text-white px-5 py-[8px]  md:px-6 md:py-2 transition-all  ease-in-out duration-300 rounded-full shadow-inner shadow-[#bf97ff70] border border-[#816bac] cursor-pointer"
              >
                About me
              </a>
            </div>
          </div>
        </div>
        <KnowledgeSession />
        <Projects />
      </Container>
    </main>
  )
}
