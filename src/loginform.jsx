import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function LoginForm(){
  let islogin=sessionStorage.getItem('islogin');
  const navigate = useNavigate();
 
  const logout = () => {
    sessionStorage.setItem('islogin', 'false');
    sessionStorage.setItem('logindata',{})
    alert('You have been logged out');
    window.location.reload();
  };
  console.log(sessionStorage.getItem('islogin'))
  const [formdata,setFormdata]=useState({name:"",rollnumber:""});
  const {rollnumber,password}=formdata
  const submitHandler=e=>{
      e.preventDefault()
      axios.post("http://localhost:5000/testlogin",formdata).then(
      console.log(sessionStorage.getItem('islogin')));
      axios.get("http://localhost:5000/testlogin").then(response=>{
        if (response.data===true) {
          sessionStorage.setItem('islogin',true)
          axios.get("http://localhost:5000/getlogin").then(response=>{sessionStorage.setItem('logindetails',response.data)})
          //alert("details were found")
        }else{
          alert("login details not found")
        }   
        window.location.reload();
      });
      
     
  }
  const changeHandler=e=>{
      const {name,value}=e.target
      setFormdata({...formdata,[name]:value})
  }
  
  if (islogin==="false"){
  return (<>
  <main id="main" class="flex items-center bg-red-200  justify-center h-screen">
  <div class="bg-white rounded-lg border-solid border-black w-96 p-8 shadow-md">

      <form onSubmit={submitHandler}>
          <h1 class="text-4xl text-red-500 text-center text-bold font-bold">Login Form</h1>
          <br/>
          <div>
                <label class="block mb-1 text-gray-600" for="rollnumber">Roll Number</label>
                <input class="w-full bg-red-100 px-4 py-2 text-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300" type="text" id="rollnumber" name="rollnumber" placeholder="Enter your roll number" value={rollnumber} required onChange={changeHandler} />
            </div>
            <div>
                <label class="block mb-1 text-gray-600" for="password">Password</label>
                <input class="w-full bg-red-100 px-4 py-2 text-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300" type="password" id="password" name="password" placeholder="Enter your password" value={password} required onChange={changeHandler} />
            </div>
            <br/>
            <div class="text-center ">
                <button class=" bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer" type="submit" id="submit" name="submit">Login</button>
            </div>
            <br/>
            <p class="text-xs">not an existing user <a class="underline text-blue-600" onClick={()=>navigate("/signup")}>Sign up</a></p>
 
      </form>
    </div>
      
  </main>
  </>);}
  else{
    return (
      <div className="bg-gray-200 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <p className="text-green-500 text-lg font-semibold">You were logged in</p>
          <button onClick={logout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800">
              Logout
          </button>
        </div>
      </div>
    );
  };
}

export default LoginForm;