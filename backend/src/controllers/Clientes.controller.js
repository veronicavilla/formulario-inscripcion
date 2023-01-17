import { getConnection } from "./../database/database";

const getClientes = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query(
    "SELECT Número Identificación, Nombres, Apellidos, Dirección FROM Clientes");
  console.log(result);
  res.json(result)
};

export const methods = {
  getClientes
};
