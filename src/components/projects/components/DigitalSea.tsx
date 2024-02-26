import { useState } from "react"
import githubLogo from "../../../assets/octocatLogo.png"
import digitalSeaMockup from "../../../assets/digital-sea.png"
import digitalSeaLogo from "../../../assets/digitalSeaLogo.png"
import { IoIosArrowForward } from "react-icons/io"

export const DigitalSea = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div
      className="w-full flex-col  md:flex-row flex items-center justify-between mt-36
    "
    >
      <section>
        <div>
          <a
            href="https://github.com/devIgor1/digital-sea"
            target="_blank"
            className="w-full flex justify-center items-center"
          >
            <img
              className="w-[80px] hover:scale-105 duration-300 animate-pulse"
              src={githubLogo}
              alt="git-hub-logo"
            />
          </a>
          <a
            href="https://digital-sea-production.up.railway.app/"
            target="_blank"
          >
            <img
              className="w-[500px] rounded-lg shadow-[0_0px_20px_rgba(100,_42,_190,_0.9)] hover:scale-105 duration-300"
              src={digitalSeaMockup}
              alt="ecommerce-cart-project"
            />
          </a>
        </div>
      </section>
      <div
        className="flex items-center justify-center flex-col"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="flex items-center justify-center mt-10 md:mt-0">
          <img
            className={`w-[105px] duration-300 ${isHovered ? "rotate-12" : ""}`}
            src={digitalSeaLogo}
            alt="digitalSea-logo"
          />
          <h1 className="text-4xl bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent font-poppins">
            Digital Sea
          </h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center font-instrumentoSans p-5">
            <section className="flex flex-col md:flex-row md:items-center md:justify-center font-poppins">
              <h3 className="text-2xl bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent max-[355px]:text-4xl">
                Technologies
              </h3>
              <span className="text-slate-100/20 mx-auto md:mx-0 rotate-90 md:rotate-0">
                <IoIosArrowForward size={50} />
              </span>
              <ul className="bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent text-lg">
                <li>- Typescript</li>
                <li>- Next.js 14</li>
                <li>- TailwindCSS</li>
                <li>- React</li>
                <li>- tRPC</li>
                <li>- Payload CMS</li>
                <li>- Node</li>
                <li>- Express</li>
                <li>- Resend</li>
                <li>- Sooner</li>
                <li>- Lucide Icons</li>
                <li>- Shadcn-ui</li>
                <li>- Zustand</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
