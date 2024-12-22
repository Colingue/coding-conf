import Logo from "./Logo";
import backgroundItems from "../../assets/images/pattern-squiggly-line-bottom.svg";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Logo />
      </header>
      <main>{children}</main>
      <img src={backgroundItems} alt="" className="background-items" />
    </div>
  );
}
