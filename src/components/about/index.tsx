import retrowave from "../../assets/retrowave.jpg"
import linkedIn from "../../assets/linkedIn.png"
import instagram from "../../assets/instagram.png"
import { IoArrowBackOutline } from "react-icons/io5"
import github from "../../assets/githublogo.png"

export const AboutMe = () => {
  return (
    <>
      <main className="bg-bgPurple min-h-screen min-w-full bg-purple-gradient">
        <div className="text-xl md:text-2xl flex items-center justify-center pt-10 pb-52 md:pb-0 bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent flex-col font-poppins font-bold">
          <a href="/">Back to Home</a>
          <a href="/" className="animate-moveHorizontal">
            <IoArrowBackOutline size={40} color="#fff" />
          </a>
        </div>
        <div className="w-full min-h-screen bg-center">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full gap-20">
            <section className="flex flex-col max-w-4xl">
              <h1 className="mb-10 text-center text-4xl md:text-5xl font-instrumentoSans bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent">
                About me
              </h1>
              <h3 className="px-3 text-2xl md:text-3xl bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent font-instrumentoSans italic ">
                I'm a guy who's passionate about{" "}
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  studying
                </span>
                ; I spend my days studying for hours purely out of fun and
                interest. I love everything related to the{" "}
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  80's
                </span>
                , from music to movies. I'm really into the retrowave/synthwave
                style because these genres exactly evoke the vibe of that era.
              </h3>
              <h3 className="mt-10 px-3 text-2xl md:text-3xl bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent font-instrumentoSans italic">
                I can't live without my{" "}
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  workouts
                </span>
                ; one of my biggest goals is to prepare myself to compete in
                bodybuilding.
              </h3>
              <h3 className="mt-10 px-3 text-2xl md:text-3xl bg-gradient-to-b from-slate-50 to-zinc-300 bg-clip-text text-transparent font-instrumentoSans italic ">
                Resuming : I'm an extremely{" "}
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  disciplined
                </span>
                ,{" "}
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  resilient,
                </span>{" "}
                and{" "}
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  dedicated
                </span>{" "}
                person who loves studying and making the most out of my life,
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  helping
                </span>{" "}
                others, and{" "}
                <span className="font-bold bg-gradient-to-b from-zinc-100 to-fuchsia-600 bg-clip-text text-transparent">
                  chasing
                </span>{" "}
                my dreams!
              </h3>
            </section>
            <section>
              <img
                src={retrowave}
                alt="retrowave-image"
                className="rounded-lg w-[500px]"
              />
            </section>
          </div>
          <div>
            <h1 className="mt-10 text-center text-4xl md:text-5xl font-instrumentoSans bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent">
              Socials
            </h1>
            <div className="flex items-center justify-center">
              <a href="https://www.instagram.com/igormr6/" target="_blank">
                <img
                  src={linkedIn}
                  alt="linkedin-logo"
                  className="w-[200px] hover:scale-110 duration-300"
                />
              </a>
              <div className="mb-12">
                <a
                  href="https://www.linkedin.com/in/igor-moraes-rocha/"
                  target="_blank"
                >
                  <img
                    src={instagram}
                    alt="instagram-logo"
                    className="w-[200px] hover:scale-110 duration-300"
                  />
                </a>
              </div>
              <a href="https://github.com/devIgor1" target="_blank">
                <img
                  src={github}
                  alt="linkedin-logo"
                  className="w-[150px] hover:scale-110 duration-300 mb-12"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
