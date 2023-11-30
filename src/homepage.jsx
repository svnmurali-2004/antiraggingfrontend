import React from 'react';
import { Link} from 'react-router-dom';
const HomePage = () => {
  
  
    return (
      <div style={{ backgroundImage: `url(${'https://i.pinimg.com/564x/68/7f/d7/687fd77d636c20de6a833a684b34b8b1.jpg'})`, backgroundSize: 'strech' }} className="h-screen relative">
        
        <div className="absolute top-0 left-0 right-0 bottom-0 " />
        <div className="container mx-auto flex flex-col justify-center items-center p-4">
          <h1 className="text-white text-5xl font-bold">Submit Your Anti-Ragging Query</h1>
          <p className="text-white text-xl">We're here to help you fight ragging. Share your experiences or concerns anonymously.</p>
         
          <button className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700" onClick={()=>{}}>Submit Query in the submit queries section</button>
          <a href="http://localhost:3000/submitqueries">hello</a>

        </div>
      </div>
    );
  };
  
  export default HomePage;