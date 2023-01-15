import logoamericanino from "../../../../public/americanino.png";

const LogoAmericanino = () => {
  return (
    <section className="logos">
    <a href="https://www.americanino.com/">
        <img
        className="logo-americanino"
        src={logoamericanino}
        alt="americanino"
        type="button"
        value="ir"
      />
      </a>
    </section>
  );
};

export default LogoAmericanino;
