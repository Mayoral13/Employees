import { useContext } from "react";
import { DataContext } from "./DataContext";
const Header = () =>{
    const {Employees,Team, TeamCount} = useContext(DataContext)

    return(
        <header className = "container">
            <div className = "row justify-content-center mt-4 mb-4">
            <div className="col-8">
            <h1>Team Member Allocation</h1>
            <h3>{Team} has {TeamCount}  {TeamCount === 1 ? 'Member':'Members'}</h3>
            </div>
            </div>
            
        </header>
    )
}

export default Header;