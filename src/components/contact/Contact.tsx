import contact from "../../assets/contact.jpg"
import button from "../../assets/sendButton.png"

export const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col md:flex-row items-center justify-between mt-96">
        <section className="w-[620px] max-w-full">
          <form className="flex flex-col w-full font-poppins">
            <label className="text-3xl bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent text-center">
              Email
            </label>
            <input
              className="mb-10 h-9 p-4 bg-gradient-to-bl from-violet-600 to-bgPurple rounded outline-none font-bold text-white"
              type="email"
            />
            <label className="text-3xl bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent text-center">
              Message
            </label>
            <textarea className="h-36 p-4 bg-gradient-to-bl from-violet-600 to-bgPurple rounded resize-none outline-none font-bold text-white"></textarea>
            <div className="flex items-center justify-center w-[120px] mx-auto md:mt-5">
              <button className="hover:scale-90 duration-300">
                <img className="w-full" src={button} alt="send-email-button" />
              </button>
            </div>
          </form>
        </section>
        <section>
          <img
            className="w-full md:w-[420px] h-full rounded-lg mt-9 md:mt-0 md:mb-9"
            src={contact}
            alt=""
          />
        </section>
      </div>
    </div>
  )
}
