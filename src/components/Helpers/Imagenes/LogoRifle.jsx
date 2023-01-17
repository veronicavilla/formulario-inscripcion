import logorifle from "../../../../public/rifle.jpeg";

const LogoRifle = () => {
  return (
    <section className="logos">
      <a href="https://www.rifle.com.co/">
        <img
        className="logos-header"
        src={logorifle}
        alt="rifle"
        type="button"
        value="ir"
        />
      </a>
    </section>
  );
};

export default LogoRifle;
