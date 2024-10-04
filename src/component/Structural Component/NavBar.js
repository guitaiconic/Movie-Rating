import Logo from "../Presentation /Logo";
const NavBar = ({ children }) => {
  return (
    <div>
      <nav className="nav-bar">
        {" "}
        <Logo />
        {children}
      </nav>
    </div>
  );
};

export default NavBar;
