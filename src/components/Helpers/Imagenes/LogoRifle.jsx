import logorifle from "../../../../public/rifle.png";

const LogoRifle = () => {
  return (
    <section className="logos">
      <a href="https://www.rifle.com.co/">
        <img
        className="logo-rifle"
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
