import axios from "axios"
import {useState} from "react";
import { Navigate } from "react-router-dom";
function Form(){
    let logindetails=sessionStorage.getItem('logindetails');
    const [formdata,setFormdata]=useState({name:"",rollnumber:"",query:"",email:"",phonenumber:"",branch:"",date:"",...logindetails});
    const {name,rollnumber,query,email,phonenumber,branch,date}=formdata
    const submitHandler=e=>{
        e.preventDefault()
        if (sessionStorage.getItem('islogin')==="true"){
        axios.post("http://localhost:5000/dataentry",formdata).then(console.log("form submitted successfully"));
        alert("you have succesfully submitted the form")}
        else{
            alert("please login first");
            <Navigate to='/login' replace={true} />;
        }
       
    }
    const changeHandler=e=>{
        const {name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }
    return (<>
    <main id="main" style={{backgroundImage:`url(${"https://th.bing.com/th/id/OIP.2NF4ToDbxT5AEPX3cDewHAHaCj?w=349&h=120&c=7&r=0&o=5&dpr=1.3&pid=1.7"})`,backgroundSize:''}} class="flex items-center bg-gray-100  justify-center h-screen">
        <form onSubmit={submitHandler}>
            <div style={{width:'420px'}} class="bg-white rounded-3xl border-solid w-96 p-6 shadow-sm border-black bg-white bg-opacity-1">
                <h1 class=" text-xl text-center  font-bold ">QUERY REGISTRATION FORM</h1>
            
                <label for="name" >Name </label>
                <input type="text" class=" bg-gray-100 text-gray-500 px-1 w-full h-7 mb-3" id="name" name="name" placeholder="enter the name" value={name} required onChange={changeHandler}/>
                <br/>
                <label for="email" >Email</label>
                <input type="email" class=" bg-gray-100 text-gray-500 px-1 w-full h-7 mb-3" id="email" name="email" placeholder="enter your email" value={email} required onChange={changeHandler}/>    
                <br/>
                <label for="date">Date</label>
                <input id="date"class="bg-gray-100 text-gray-500 px-1 w-full h-7 mb-3"type="date" name="date" value={date} onChange={changeHandler} required/>
                <br/>
                <div class="dropdown">
                <label for ="branch">Branch</label>
                 <select id="branch" class=" bg-gray-100 text-gray-500 px-1 w-full h-7 mb-3" name="branch" value={branch}onChange={changeHandler} required>
                  <option value="">Select Branch</option>
                 <option value="IT">IT</option>
                 <option value="CSE">CSE</option>
                 <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                </select>
                </div>
                
                <label for="rollnumber " >rollnumber</label>
                <input type="rollnumber" class=" bg-gray-100 text-gray-500 px-1 w-full h-7 mb-3" id="rollnumber" name="rollnumber" placeholder=" enter your rollnumber" value={rollnumber} required onChange={changeHandler}/>
                <br/>
                <label for="phonenumber" >phonenumber</label>
                <input type="phonenumber" class=" bg-gray-100 text-gray-500 px-1 w-full h-7 mb-3" id="phonenumber" name="phonenumber" placeholder="enter 10-digit phonenumber" value={phonenumber} required onChange={changeHandler}></input>
                <br/>
                <label for="query" >Query</label><br/>
                <input type="textbox" class=" bg-gray-100 text-gray-500 px-1 w-full h-11 mb-3" id="query" name="query" placeholder="query" value={query} required onChange={changeHandler}/>
                <br/>
                <input type="checkbox" id="checkbox" />
                <label for="checkbox">agree terms and condions</label>
                <br/>
                <br/>
                <input class=" place-self-center w-full rounded text-center bg-blue-500 font-semibold text-white hover:bg-blue-600 action:bg-green-600" type="submit" id="submit" name="submit"/>
                
            </div>  
        </form>
        
    </main>
    </>);
}
export default Form;