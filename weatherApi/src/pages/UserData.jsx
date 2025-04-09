import { useState ,useEffect} from "react"
import "./Userdata.css"
import { Link } from "react-router-dom"

function UserData(){
   let [users,setUser]=useState([])
   useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users",{
         method:"GET"
      })
      .then((response)=>{
         return response.json()
      }).then((data)=>{
         setUser(data)
      })
      .catch((err)=>{
         setUser("NA")
      })
   },[])
   return (
      <>
         <Link to="/" className={"fa-solid fa-arrow-left backBtn"}>  go back</Link>

      <section className="container">
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>number</th>
               </tr>
            </thead>
            <tbody>
               { users.map((user)=>{
               return (
               <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
               </tr>)
               }) }
               
            </tbody>
         
         </table>
         
      </section>
      
      </>
   )
}
export default UserData