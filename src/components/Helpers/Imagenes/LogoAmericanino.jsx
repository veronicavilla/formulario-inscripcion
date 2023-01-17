import logoamericanino from "../../../../public/americanino.jpeg";

const LogoAmericanino = () => {
  return (
    <section className="logos">
    <a href="https://www.americanino.com/">
        <img
        className="logos-header"
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
