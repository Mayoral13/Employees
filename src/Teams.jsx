import { DataContext } from "./DataContext"
import { useContext } from "react"
const Teams = ()=>{
  const {Team,ChangeTeam} = useContext(DataContext)
return(
  <div style={{marginRight:20}}>
    <select className="form-select form-select-lg" value = {Team} onChange={ChangeTeam}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
  </div>
    
)
}
export default Teams