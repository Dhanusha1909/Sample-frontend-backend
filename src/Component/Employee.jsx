import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {addedEmployee} from '../services/authservices';

export const Employee=()=>{
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [email,setEmail]=useState("")
    const [error,setError]=useState("")
    const navigate=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if(!firstname.trim() || !lastname.trim() || !email.trim()){
            setError("Please fill all details");
            return;
        }
        try{
         addedEmployee({firstname,lastname,email});
            alert("Added Employee");
             navigate("/");
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className="container mycontainer">
            <div className="form text-center rounded-6 shadow-lg p-3 mb-5 bg-body rounded">
                <form className="form-control">
                    <h1 className="text-center heading">Add your Details</h1>
                    {error && <p>{error}</p>}
                    <div className="mb-3 contain">
                        <label className="form-label mylabel">FirstName</label>
                    <input onChange={(e)=>{setFirstName(e.target.value)}} type="text" name="firstname" value={firstname} placeholder="Type your first name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label mylabel">LastName</label>
                    <input onChange={(e)=>{setLastName(e.target.value)}} type="text" name="lastname" value={lastname} placeholder="Type your Last name" required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label mylabel">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email} placeholder="Type your email" required />
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}