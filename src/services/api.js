import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3333", //Para usar no emulador
  //baseURL: "http://192.168.0.11:3333", // Para usar no aparelho físico
});
export default api;