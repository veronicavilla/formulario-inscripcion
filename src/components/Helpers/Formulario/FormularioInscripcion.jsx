import BtnRegistrar from "../Botones/BtnRegistrar";
import Footer from "../Footer";

const FormularioInscripcion = () => {
  return (
    <section className="registro"> 
    <h1 className="titulo">INSCRIPCIÓN</h1>
      <form id="formulario" action="#">
        <select className="option" id="lang">
            <option value>Tipo de Identificación</option>
            <option value="cedulaDeCiudadania">Cédula de ciudadania</option>
            <option value="cedulaDeExtranjeria">Cédula de Extranjeria</option>
            <option value="carneDiplomatico">Carné diplomatico</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="permisoEspecial">Permiso especial</option>
        </select>
        <input
          className="form_item"
          name="numeroIdentificacion"
          id="numeroIdentificacion"
          type="text"
          placeholder="Número de Identificación"
        />
        <input
         className="form_item"
         name="nombres"
         id="nombres"
         type="text"
         placeholder="Nombres"
        />
        <input
          className="form_item"
          name="apellidos"
          id="apellidos"
          type="text"
          placeholder="Apellidos"
         
        />
        <input 
         className="form_item"
         name="fechaNacimiento"
         id="fechaNacimiento"
         type="Date"
         placeholder="Fecha de Nacimiento"
        />
        <input
          className="form_item"
          name="direccion"
          id="direccion"
          type="text"
          placeholder="Dirección"
        />
        <select className="option" id="lang">
         <option value>País</option>
            <option value="colombia">Colombia</option>
            <option value="estadosunidos">Estados Unidos</option>
            <option value="peru">Perú</option>
            <option value="chile">Chile</option>
            <option value="canada">Canadá</option>
            <option value="mexico">México</option>
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="francia">Francia</option>
            <option value="china">China</option>
        </select>
        <select className="option" id="lang">
         <option value>Departamento</option>
            <option value="cundinamarca">Cundinamarca</option>
            <option value="antioquia">Antioquia</option>
            <option value="bolivar">Bolivar</option>
            <option value="caldas">Caldas</option>
            <option value="huila">Huila</option>
            <option value="valledelcauca">Valle del Cauca</option>
            <option value="nariño">Nariño</option>
            <option value="magdalena">Magdalena</option>
            <option value="meta">Meta</option>
            <option value="nortedesantander">Norte de Santander</option>
        </select>
         <select className="option" id="lang">
         <option value>Ciudad</option>
            <option value="bogota">Bogotá D.C</option>
            <option value="medellin">Medellín</option>
            <option value="cartagena">Cartagena</option>
            <option value="manizales">Manizales</option>
            <option value="neiva">Neiva</option>
            <option value="cali">Cali</option>
            <option value="pasto">Pasto</option>
            <option value="santaMarta">Santa Marta</option>
            <option value="villavicencio">Villavicencio</option>
            <option value="cucuta">Cúcuta</option>
        </select>
        <select className="option" id="lang">
         <option value>Marca</option>
            <option value="americanino">Americanino</option>
            <option value="americaneagle">American Eagle</option>
            <option value="chevignon">Chevignon</option>
            <option value="esprit">Esprit</option>
            <option value="nafnaf">Naf Naf</option>
            <option value="rifle">Rifle</option>
        </select>
        <section className="terminos" id="terminos">
          <input className="checkbox" type="checkbox" name="terminos" id="terminos" />
          Acepto los Terminos y Condiciones.
        </section>
        <BtnRegistrar/>
        <Footer/>
      </form>
    </section>  
  );
};

export default FormularioInscripcion;