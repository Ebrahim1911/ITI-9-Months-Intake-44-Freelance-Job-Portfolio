import "./Header.css";

import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="dynamic-txts">
          <h5>Hi, I &apos; m</h5>
          <h1>Youmna Ali Mohamed </h1>
          <h5 className="text-light">UI\UX Desinger</h5>

          <HeaderSocials />
          <div className="me">
            <img
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGpjdXV6d3RqcHIxdm9kZWNhYjFzMWh6YWR2aDRmamI2aDM5dmV3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23aGWjUpYuCU5Gfmmo/giphy.gif"
              alt="me"
            />
          </div>
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
