import FooterNav from "./components/FooterNav"
import HeaderNav from "./components/HeaderNav"

function App() {

  return (
    <>
      <HeaderNav />
      <div className="relative">
        <section>
          <div className="w-[50%] text-center mx-auto py-44">
            <button className="bg-btn p-2 px-6 text-xs mb-4 rounded-full">FIL _ AFRICA</button>
            <h1 className="text-5xl font-medium">We are the Filecoin community in Africa</h1>
            <p className="text-sm my-2">Build with us. we are growing the Filecoin community in Africa</p>
            <button className="text-xs my-3 rounded-full p-5 px-10 bg-[#0F62FE]">Join Our Community</button>
          </div>
        </section>
        <img className="h-[100vh] top-96 absolute w-full" src="/images/bg.png" alt="" />
        <div className="mx-20 flex relative glass my-20 border border-[#AAADB3] rounded-xl justify-between p-6">
          <div className="w-[40%]">
            <h1 className="text-3xl w-[70%] my-3">Community and Engagement</h1>
            <p className="text-xs my-4">Join our vibrant community of developers, enthusiasts, and experts passionate about decentralized storage and blockchain technology. Participate in workshops, events, and hackathons designed to promote collaboration and knowledge sharing.</p>
            <button className="text-xs my-3 rounded-full p-5 px-10 border border-[#0F62FE] text-[#0F62FE]">Join Our Community</button>

          </div>
          <img src="/images/round.png" className="absolute bottom-0 left-80" alt="" />
          <div className="w-[40%]">
            <img className="h-80 ml-auto" src="/images/about.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mx-32 text-center">
        <h1 className="text-4xl">Inclusion and Diversity</h1>
        <p className="text-xs">Regardless of circumstances, no one is left behind!</p>
        <img className="my-4" src="/Images.png" alt="" />
        <p className="w-1/2 text-[10px] mx-auto">Join our vibrant community of developers, enthusiasts, and experts passionate about decentralized storage and blockchain technology. Participate in workshops, events, and hackathons designed to promote collaboration and knowledge sharing.</p>
      </div>
      <div className="relative">
        <img className="h-[100vh] w-full" src="/images/bg.png" alt="" />
        <div className="m-20 glass absolute top-20 flex border border-[#AAADB3] rounded-xl justify-between p-6">
          <div className="w-[35%]">
            <h1 className="text-3xl w-[70%] my-3">Contribute to  Open-Source</h1>
            <p className="text-xs my-4">Join our vibrant community of developers, enthusiasts, and experts passionate about decentralized storage and blockchain technology. Participate in workshops, events, and hackathons designed to promote collaboration and knowledge sharing.</p>
            <button className="text-xs my-3 rounded-full p-5 px-10 border border-[#0F62FE] text-[#0F62FE]">Join Our Community</button>

          </div>
          <div className="w-[40%]"></div>
        </div>
      </div>
      <section className="text-center my-10 mx-40">
        <h1 className="text-4xl">Meet Us</h1>
        <p className="text-xs">Here is a gallery of our amazing community of people</p>
        <div className="flex mt-6 justify-between flex-wrap">
          <img className="mb-4" src="/images/ing1.png" alt="" />
          <img className="mb-4" src="/images/ing2.png" alt="" />
          <img className="mb-4" src="/images/ing3.png" alt="" />
          <img src="/images/ing4.png" alt="" />

        </div>
      </section>
      <FooterNav />
    </>
  )
}

export default App
