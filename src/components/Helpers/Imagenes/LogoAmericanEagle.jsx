import logoamericaneagle from "../../../../public/americaneagle.png";

const LogoAmericanEagle = () => {
  return (
    <section className="logos">
     <a href="https://www.ae.com.co/">
      <img
        className="logo-american-eagle"
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
