import axios from 'axios';

const API_URL="http://localhost:8080";
export const getEmployee=()=>axios.get(`${API_URL}/api/employee/data`);

export const addedEmployee=(data)=>axios.post(`${API_URL}/api/employee`,data);