import Nav from "./Nav";
export default Header;

function Header() {
  return (
    <>
      <header>
        <h1 className="title">Cyber Reliance</h1>
        <h2 className="subtitle">Protect Data Information</h2>
        <h4>
          Cyber Reliance will provide and implement best technology solutions,
          defend the intruders, and ensure compliances and increase
          productivity!
        </h4>
        <Nav />
      </header>
    </>
  );
}
