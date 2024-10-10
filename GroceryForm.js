import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function GroceryForm(){
    const [data, setData] = useState({})
    const navigate = useNavigate()

    return(
        <>
            <div className='m-4'>
                <label>enter date</label>
                <br></br>
                <input type='date' onChange={(e) => {
                setData({ ...data, date: e.target.value })
                }} />
            </div>
            
          
            <div className='m-4'>
                <label>enter sale:</label>
                <br></br>
                <input type="number"
                onChange={(e) => {
                setData({ ...data, sale: e.target.value })
                }} />
            </div>
            <div className='m-4'>
                <label>enter expense</label>
                <br></br>
                <input type='number' onChange={(e) => {
                setData({ ...data, expense: e.target.value })
                }} />

            <button className='btn btn-success m-2' type="submit"
                onClick={()=>{
                    fetch("http://localhost:5001/Grocery/add",
                    {
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                        "Content-Type":"application/json"
                        }
                    })
                    .then((res)=>{
                        navigate("/Grocery")
                    }
                    )
                }} >Submit</button>
            </div>                                    
        </>
    )
}   
export default GroceryForm;