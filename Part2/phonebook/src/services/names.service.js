import axios from "axios"
const BASE_URL = "http://localhost:3001/persons"

const getAllNames =()=>{
 return axios.get(BASE_URL)
}


const addName =(person)=>{
    return axios.post(BASE_URL,person )
}


export default {getAllNames, addName}