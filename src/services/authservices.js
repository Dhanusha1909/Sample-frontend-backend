import axios from 'axios';

const API_URL="http://localhost:8000";
export const getEmployee=()=>axios.get(`${API_URL}/getemployee`);

export const addedEmployee=(data)=>axios.post(`${API_URL}/addemployee`,data);