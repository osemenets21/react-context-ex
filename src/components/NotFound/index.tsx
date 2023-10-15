import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <h3>404: Not Found
            <button><Link to="/">Powrót do strony głównej</Link></button>
        </h3>
        
    )
}
export default NotFound;