import { createContext, useEffect, useState } from "react";
const DataContext = createContext();
const DataContextProvider = ({children}) =>{
    const [Employees,SetEmployees] = useState(JSON.parse(localStorage.getItem("Employees"))||[]);
    const [Team,SetTeam] = useState((JSON.parse(localStorage.getItem("TeamName"))) || "TeamD")
    const [SearchData,SetSearch] = useState('')
    const [SearchResult,SetSearchResult] = useState([])

    const ChangeTeam = (e) =>{
        const value = e.currentTarget.value;
        SetTeam(value);
    }
    function CardClick (event){
        const transformedEmployees = Employees.map((employee) => {
          if (employee.id === parseInt(event.currentTarget.id)) {
            if (employee.teamName === Team) {
              return { ...employee, teamName: 'UNASSIGNED' };
            } else {
              return { ...employee, teamName: Team };
            }
          } else {
            return employee;
          }
        });
        SetEmployees(transformedEmployees);
        
       }
    const fetchData = async() =>{
        if(Employees.length === 0){
        try {
            const response = await fetch('./data.json');
            const data = await response.json();
            SetEmployees(data);
        } catch (error) {
            console.log(error.response)
            
        }
    }
    }
  
    useEffect(()=>{
        fetchData();
    },[])
    
    useEffect(()=>{
        localStorage.setItem("TeamName",JSON.stringify(Team))
    },[Team])

    useEffect(()=>{
        localStorage.setItem("Employees",JSON.stringify(Employees))
    },[Employees])


    const FetchEmployees = async(e) =>{
        const name = e.target.value;
        SetSearch(name)
        //const response = await fetch('./src/data.json');
        const data = await Employees;
       
        const employees = data.filter((employees)=> employees.fullName.toLowerCase().includes(name)
        );
        SetSearchResult(employees);
    }
    const TeamCount = Employees.filter((employee)=>employee.teamName === Team).length


    return(
        <DataContext.Provider value={{Employees, ChangeTeam, Team, FetchEmployees, SearchResult, SearchData, CardClick, TeamCount}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext,DataContextProvider}