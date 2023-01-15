import logoesprit from "../../../../public/Esprit.png";

const LogoEsprit = () => {
  return (
    <section className="logos">
    <a href="https://www.esprit.com.co/">
      <img
        className="logo-esprit"
        src={logoesprit}
        alt="esprit"
        type="button"
        value="ir"
      />
      </a>
    </section>
  );
};

export default LogoEsprit;
