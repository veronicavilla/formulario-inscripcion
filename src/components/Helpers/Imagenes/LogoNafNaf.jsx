import logonafnaf from "../../../../public/nafnaf.jpeg";

const LogoNafNaf = () => {
  return (
    <section className="logos">
    <a href="https://www.nafnaf.com.co/">
      <img
        className="logo-naf-naf"
        src={logonafnaf}
        alt="nafnaf"
        type="button"
        value="ir"
      />
      </a>
    </section>
  );
};

export default LogoNafNaf;
