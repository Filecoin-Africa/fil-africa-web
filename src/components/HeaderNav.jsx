
const HeaderNav = () => {
  return (
    <div className="flex p-4 z-10 lg:px-20 justify-between fixed top-0 w-full">
        <h1 className="text-xl font-bold">#fil africa</h1>
        <div className="lg:flex hidden text-xs justify-between w-[30%]">
          <p>About Us</p>
          <p>Filecoin</p>
          <p>Contact Us</p>
        </div>
    </div>
  );
};

export default HeaderNav;