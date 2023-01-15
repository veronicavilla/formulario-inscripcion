import LogoAmericanEagle from "./Imagenes/LogoAmericanEagle";
import LogoAmericanino from "./Imagenes/LogoAmericanino";
import LogoChevignon from "./Imagenes/LogoChevignon";
import LogoEsprit from "./Imagenes/LogoEsprit";
import LogoNafNaf from "./Imagenes/LogoNafNaf";
import LogoRifle from "./Imagenes/LogoRifle";
import BtnSalir from "./Botones/BtnSalir";

const Header = () => {
  return (
      <header className="menu-header"> 
        <LogoAmericanino/>
        <LogoAmericanEagle/>
        <LogoChevignon/>
        <LogoEsprit/>
        <LogoNafNaf/>
        <LogoRifle/>
        <BtnSalir /> 
        </header> 
  );
};

export default Header;
