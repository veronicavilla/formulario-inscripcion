import FormularioInscripcion from "./Formulario/FormularioInscripcion";
import Header from "./Header";

const Principal = () =>{
    return(
        <section className="principal">
            <Header/>
            <FormularioInscripcion/>
        </section>
    )
}

export default Principal;