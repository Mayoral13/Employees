import { DataContext } from "./DataContext"
import { useContext } from "react"
const Search = () =>{
    const {SearchData, FetchEmployees} = useContext(DataContext)
    return(
        <div>
        <input type="text" className="form-control" placeholder="Search" value = {SearchData} onChange={FetchEmployees}/>
        </div>
    )
}
export default Search