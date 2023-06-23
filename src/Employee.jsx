import { DataContext } from "./DataContext"
import { useContext } from "react"
import malepic from "/images/male.jfif";
import femalepic from "/images/female.jfif";
import Teams from "./Teams";
import Search from "./Search";
const Employee = () => {
const {Employees, SearchData, SearchResult, Team, CardClick} = useContext(DataContext)

if(SearchData){
  return(
    <main className="container col-8">
    <div className="row justify-content-center mt-3 mb-3">
      <div className="col-6" style={{display:"flex",margin:20,alignItems:"center"}}>
     <Teams/>
     <Search/>
      </div>

        <div className="card-collection">
        { 
        SearchResult.map((employee)=>(
          
            <div key={employee.id} id={employee.id} className= {(employee.teamName === Team ? 'card m-2 standout' : 'card m-2')}
              style={{ cursor: "pointer" }} onClick={CardClick}>
                { employee.gender === "female" ?(
                <img src={femalepic} className="card-img-top" />):
                (
                  <img src={malepic} className="card-img-top" />)
                
              }
    
              

              <div className="card-body">
                <h5 className="card-title">Full Name:{employee.fullName}</h5>
                <p className="card-text">
                  <b>Designation:{employee.designation}</b>
                </p>
                <p className="card-text">
                  <b>TEAM:{employee.teamName}</b>
                </p>
              </div>
            </div>
            ))} 

        </div>
        
    </div>
        
  </main>

  )

}
  return (
    
    <main className="container col-8">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6" style={{display:"flex",margin:20,alignItems:"center"}}>
       <Teams/>
       <Search/>
        </div>

          <div className="card-collection">
          { 
          Employees.map((employee)=>(
            
              <div key={employee.id} id={employee.id} className= {(employee.teamName === Team ? 'card m-2 standout' : 'card m-2')}
                style={{ cursor: "pointer" }}  onClick={CardClick} >
                  { employee.gender === "female" ?(
                  <img src={femalepic} className="card-img-top" />):
                  (
                    <img src={malepic} className="card-img-top" />)
                  
                }
      
                

                <div className="card-body">
                  <h5 className="card-title">Full Name:{employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:{employee.designation}</b>
                  </p>
                  <p className="card-text">
                    <b>TEAM:{employee.teamName}</b>
                  </p>
                </div>
              </div>
              ))} 

          </div>
          
      </div>
          
    </main>
)};


export default Employee;
