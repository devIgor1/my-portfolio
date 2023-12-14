import nodeIcon from "../../assets/node-js.svg"
import cssIcon from "../../assets/css.svg"
import firebaseIcon from "../../assets/firebase.png"
import gitIcon from "../../assets/git.svg"
import htmlIcon from "../../assets/html.svg"
import javascriptIcon from "../../assets/javascript.svg"
import typescriptIcon from "../../assets/typescript.png"
import reactIcon from "../../assets/react.svg"
import postgreIcon from "../../assets/postgresql.svg"
import prismaIcon from "../../assets/prisma.svg"
import tailwindIcon from "../../assets/tailwindcss.svg"
import mongodbIcon from "../../assets/mongodb.svg"
import githubIcon from "../../assets/github.png"
import nextIcon from "../../assets/nextjs.png"
import zodIcon from "../../assets/zod.svg"
import reactHookFormIcon from "../../assets/react-hook-form.png"

export const KnowledgeSession = () => {
  return (
    <>
      <h1 className="mt-10 text-5xl text-center font-instrumentoSans bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent">
        My Knowledge
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 w-full mt-12 gap-20 font-poppins">
        <div className="relative">
          <section className="relative flex items-center flex-col hover:scale-110 duration-300">
            <img className="w-20" src={reactIcon} alt="nodeIcon" />
            <h1 className="text-lg text-white mt-2">React</h1>
          </section>
        </div>
        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={nextIcon} alt="nextIcon" />
          <h1 className="text-lg text-white mt-2">Next</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={typescriptIcon} alt="typescriptIcon" />
          <h1 className="text-lg text-white mt-2">Typescript</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={javascriptIcon} alt="javascriptIcon" />
          <h1 className="text-lg text-white mt-2">Javascript</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={mongodbIcon} alt="mongodbIcon" />
          <h1 className="text-lg text-white mt-2">MongoDB</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={firebaseIcon} alt="firebaseIcon" />
          <h1 className="text-lg text-white mt-2">Firebase</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={postgreIcon} alt="postgresqlIcon" />
          <h1 className="text-lg text-white mt-2">PostgreSQL</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={prismaIcon} alt="prismaIcon" />
          <h1 className="text-lg text-white mt-2">Prisma</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={htmlIcon} alt="htmlIcon" />
          <h1 className="text-lg text-white mt-2">HTML</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={tailwindIcon} alt="tailwindIcon" />
          <h1 className="text-lg text-white mt-2">Tailwind</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={cssIcon} alt="cssIcon" />
          <h1 className="text-lg text-white mt-2">CSS</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={gitIcon} alt="gitIcon" />
          <h1 className="text-lg text-white mt-2">Git</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={githubIcon} alt="githubIcon" />
          <h1 className="text-lg text-white mt-2">GitHub</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={nodeIcon} alt="nodeIcon" />
          <h1 className="text-lg text-white mt-2">Node</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img className="w-20" src={zodIcon} alt="zodIcon" />
          <h1 className="text-lg text-white mt-2">Zod</h1>
        </section>

        <section className="relative flex items-center flex-col hover:scale-110 duration-300">
          <img
            className="w-20"
            src={reactHookFormIcon}
            alt="reactHookFormIcon"
          />
          <h1 className="text-lg text-center w-32 text-white mt-2">
            React Hook Form
          </h1>
        </section>
      </div>
    </>
  )
}
