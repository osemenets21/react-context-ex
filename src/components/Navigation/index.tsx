import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
       <nav>
        <button><Link to="/">Strona główna</Link></button>
        <button><Link to="/postslist">Posty</Link></button>
        <button><Link to="/post/new">Nowy post</Link></button>
        <button><Link to="/:id?">Post</Link></button>
       </nav>
        
    )
}
export default Navigation;