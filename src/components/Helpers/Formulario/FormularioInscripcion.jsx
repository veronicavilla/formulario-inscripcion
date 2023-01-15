import BtnRegistrar from "../Botones/BtnRegistrar";
import Header from "../Header";

const FormularioInscripcion = () => {
  return (
    <section className="registro">
      <form action="">
        <Header/>
        <h1 className="titulo">INSCRIPCIÓN</h1>
        <select name="option" id="lang">
            <option selected>Tipo de Identificación</option>
            <option value="cedulaDeCiudadania">Cédula de ciudadania</option>
            <option value="cedulaDeExtranjeria">Cédula de Extranjeria</option>
            <option value="carneDiplomatico">Carné diplomatico</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="permisoEspecial">Permiso especial</option>
        </select>
        <input
          value="Número de Identificación"
          className="form-item"
          placeholder="Número de Identificación"
          type="text"
        />
        <input
          value="Nombres"
          className="form-item"
          placeholder="Nombres"
          type="text"
        />
        <input
          value="Apellidos"
          className="form-item"
          placeholder="Apellidos"
          type="text"
        />
        <input 
          value="Fecha de nacimiento"
          className="form-item"
          placeholder="Fecha de nacimiento"
          type="Date"
        />
        <input
          value="Direccion"
          className="form-item"
          placeholder="Dirección"
          type="text"
        />
        <form action="#">
         <select name="option" id="lang">
         <option selected>Ciudad</option>
            <option value="bogota">Bogotá D.C</option>
            <option value="medellin">Medellín</option>
            <option value="cartagena">Cartagena</option>
            <option value="manizales">Manizales</option>
            <option value="santander">Santander</option>
            <option value="cali">Cali</option>
            <option value="nariño">Nariño</option>
            <option value="santaMarta">Santa Marta</option>
            <option value="villavicencio">Villavicencio</option>
            <option value="cucuta">Cúcuta</option>
        </select>
        </form>
      </form> 
       <BtnRegistrar/>
    </section>
    
  );
};

export default FormularioInscripcion;