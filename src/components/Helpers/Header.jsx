import BtnSalir from "./Botones/BtnSalir";
import LogoAmericanEagle from "./Imagenes/LogoAmericanEagle";
import LogoAmericanino from "./Imagenes/LogoAmericanino";
import LogoChevignon from "./Imagenes/LogoChevignon";
import LogoEsprit from "./Imagenes/LogoEsprit";
import LogoNafNaf from "./Imagenes/LogoNafNaf";
import LogoRifle from "./Imagenes/LogoRifle";

const Header = () => {
    return (
        <header className="menu-header">
                <LogoAmericanino/>
                <LogoAmericanEagle/>
                <LogoChevignon/>
                <LogoEsprit/>
                <LogoNafNaf/>
                <LogoRifle/>
                <section>
                <BtnSalir/>
                </section>
               
        </header>
    )
}

export default Header;