import { WebCars } from "./components/WebCars"
import { ControlDev } from "./components/ControlDev"
import { SynthMovies } from "./components/SynthMovies"
import { DigitalSea } from "./components/DigitalSea"

export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="mt-48 text-5xl text-center font-instrumentoSans bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent">
        Some of My Projects
      </h1>
      <DigitalSea />
      <SynthMovies />
      <WebCars />
      <ControlDev />
    </div>
  )
}
