import { FormEvent, useState } from "react"
import contact from "../../assets/contact.jpg"
import button from "../../assets/sendButton.png"
import emailJs from "@emailjs/browser"
import toast from "react-hot-toast"

export const Contact = () => {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    if (!email || !message) {
      toast.error("Please Fill in All Fields", {
        style: {
          borderRadius: "8px",
          background: "#0B021A",
          color: "#FFFFFF",
          border: "1px solid #ffffff",
        },
      })

      return
    }

    const templateParams = {
      message: message,
      email: email,
    }

    emailJs
      .send(
        "service_7jqjgjp",
        "template_cypt4ep",
        templateParams,
        "BI2LsbjFEQplx7iwi"
      )
      .then(() => {
        toast.success("Email successfully sent")
        setEmail("")
        setMessage("")
      })
  }

  return (
    <div id="contact">
      <div className="flex flex-col md:flex-row items-center justify-between mt-96">
        <section className="w-[620px] max-w-full">
          <form
            className="flex flex-col w-full font-poppins"
            onSubmit={sendEmail}
          >
            <label className="mb-4 text-3xl bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent text-center">
              Email
            </label>

            <div className="relative h-9">
              <div className="absolute blur inset-0 bg-purple-900 rounded-lg animate-pulse"></div>
              <input
                className="relative w-full mb-10 h-9 p-4 bg-bgPurple rounded-lg outline-none font-bold text-white"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label className="mb-4 text-3xl bg-gradient-to-b from-slate-50 to-zinc-400 bg-clip-text text-transparent text-center mt-14">
              Message
            </label>
            <div className="relative h-36">
              <div className="absolute blur inset-0 bg-purple-900 rounded-lg animate-pulse"></div>
              <textarea
                className="relative w-full h-36 p-4 bg-bgPurple rounded-lg resize-none outline-none font-bold text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-center w-[120px] mx-auto md:mt-5">
              <button type="submit" className="hover:scale-90 duration-300">
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
