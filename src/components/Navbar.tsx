import logo from "../assets/images/valtflow_icon.png";
import NavItem from "./NavItem.tsx";

function NavBar() {
  return (
    <header className="md:container min-md:container pt-8 px-3 flex justify-center fixed z-10 max-md:w-full max-md:pt-0 max-md:px-0">
      <div className="w-full rounded-3xl bg-[#0B081C80] flex justify-between px-10 color  h-[4.5rem] items-center max-md:rounded-none max-sm:px-4 backdrop-blur-lg">
        <a href="/" className="flex items-center gap-[0.625rem]">
          <img
            src={logo}
            alt="VaultFlow logo"
            className="w-[1.375rem] h-[1.375rem]"
          />
          <span className="text-[1.375rem] font-bold">VaultFlow</span>
        </a>
        <nav className="max-md:hidden">
          <ul className="flex gap-8 ">
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>About us</NavItem>
          </ul>
        </nav>
        <button className="px-5 py-2 bg-white text-black rounded-[3.25rem] max-sm:text-xs transition-all hover:bg-[#c9c9c9]">
          Download the app
        </button>
      </div>
    </header>
  );
}

export default NavBar;
