import Container from "../components/container"

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
                  <ul className="flex text-white gap-5 font-poppins">
                    <li className="hover:underline cursor-pointer duration-300">
                      About me
                    </li>
                    <li className="hover:underline cursor-pointer duration-300">
                      Projects
                    </li>
                    <li className="hover:underline cursor-pointer duration-300">
                      Contact
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </Container>
        </div>
      </div>
    </main>
  )
}
