import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const loaction = useLocation();
    const pathMatchRoute = (route) => {
        if(route === location.pathname){
            return true;
        }
    }
    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate("/")}>
                        <p className={pathMatchRoute("/") ? "navbarListItemNameActive" : "navbarListItemName"}>둘러보기</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate("/profile")}>
                        
                        <p className={pathMatchRoute("/profile") ? "navbarListItemNameActive" : "navbarListItemName"}>프로필</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Navbar;