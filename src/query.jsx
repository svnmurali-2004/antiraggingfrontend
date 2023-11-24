import axios from 'axios'
import {useState} from 'react'
function Query(){
    console.log("from queries"+sessionStorage.getItem('islogin'));
    const [data,setData]=useState("")
   if (sessionStorage.getItem('islogin')==='true'){
    
    axios.get("http://localhost:5000/fulldata").then(response=>{setData(response.data)});
    return (<>
    
    <main  class="main" dangerouslySetInnerHTML={{__html:data}}>
        
    </main>
    </>);}
    else{
        return (<div className="bg-gray-200 h-screen flex items-center justify-center" >
            <div className="w-95 h-50 bg-white p-8 rounded shadow-md">
          <p className="text-green-500 text-lg font-semibold">Please login to proceed</p>
        </div>
        </div>);
    }
   
    

}
export default Query