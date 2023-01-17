import logoamericaneagle from "../../../../public/americaneagle.png";

const LogoAmericanEagle = () => {
  return (
    <section className="logos">
     <a href="https://www.ae.com.co/">
      <img
        className="logos-header"
        src={logoamericaneagle}
        alt="american eagle"
        type="button"
        value="ir"
      />
      </a>
    </section>
  );
};

export default LogoAmericanEagle;
