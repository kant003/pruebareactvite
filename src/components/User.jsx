import { useParams } from "react-router-dom"

function User(){
    const {id} = useParams()
    return <div>Soy el usuario {id}</div>
}
export default User