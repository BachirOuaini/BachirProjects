import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
 const Home = ()=>{
     const [data1,setData] = useState(null)
     useEffect(()=>{
      fetch('http://localhost:8000/Post')
      .then(res =>{
       return res.json();
      })
      .then(data2 =>{
         setData(data2);
      });
},[]);
const handleClick=(data3)=>{
  fetch('http://localhost:8000/Post/'+data3.id,{
    method:'DELETE'
  }).then(()=>{
    console.log('delete complete')
   
  }) .then(window.location.reload(false))
  }
  
return(
  <div className='Home'>
    <div className="Title"><h1>Posts</h1> 
    </div>
    <div className="ADD" button><Link className="submitform" to={`/submitform`}> Add</Link></div>
    {data1 && data1.map((data)=>(
      <div className='Post'>
        <div className="FName"><p>FName:{data.Fname}</p></div>
        <div className="LName"><p>LName:{data.Lname} </p></div>
        <div className="Email"><p>Email:{data.Email}</p></div>
        <div className="Message">
        <p> Message:{data.Message}</p>
        <button onClick={()=>{handleClick(data)}}>delete</button>
        <Link className="editer" to={`/edit/${data.id}`}> Edit
        </Link>

      </div>
      </div>
    ))}
</div>
);}
export default Home;