
const FooterNav = () => {
  return (
    <div className="p-3">
      <footer className="bg-[#15151C] rounded-xl p-8">
        <div className="text-center">
          <p className="text-xl font-medium">Join Our Community</p>
          <p className="text-[10px] w-[25%] my-2 mx-auto">Let us unleash our creativity and
            expertise to create designs that deliver
            extraordinary results.</p>
          <button className="text-xs my-3 rounded-full p-4 px-10 bg-[#0F62FE]">Join Our Community</button>

        </div>
        <div className="border-t pt-5 border-[#1D2739] flex justify-between mt-5">
          <p className="text-xs">#fil africa</p>
          <p className="text-[9px]">© 2024 FIL Africa. All rights reserved.</p>
          <div className="flex  justify-between w-36">
            <img src="/images/socials/Ig.png" alt="" />
            <img src="/images/socials/Tw.png" alt="" />
            <img src="/images/socials/Ln.png" alt="" />
            <img src="/images/socials/Fb.png" alt="" />

          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterNav;