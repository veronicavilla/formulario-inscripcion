import logochevignon from "../../../../public/Chevignon.jpeg";

const LogoChevignon = () => {
  return (
    <section className="logos">
    <a href="https://www.chevignon.com.co/">
      <img
        className="logos-header"
        src={logochevignon}
        alt="chevignon"
        type="button"
        value="ir"
      />
      </a>
    </section>
  );
};

export default LogoChevignon;
