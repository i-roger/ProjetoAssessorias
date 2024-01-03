/* Utilizando axios, para programar requisições 
 a sistemas externos a minha aplicação*/

 import axios from "axios";

 import id from "../pages/App"

 const API_URL = process.env.REACT_APP_API_URL;

 export async function getFunction() {
    const response = await axios.get(`${API_URL}/clientes`);
    return response.data;
 }

 export async function postFunction() {
    const response = await axios.post(`${API_URL}/clientes`, {user:"teste", password:"010203"});
    return response.data;
 }

 export async function deleteFunction() { //Consertar Função de deletar usuário!
   let idValue = document.querySelector("#id");
   let id = idValue.value;

   const response = await axios.delete(`${API_URL}/clientes/${id}`)
   console.log('Usuário deletado!')
   return response.data;
 }