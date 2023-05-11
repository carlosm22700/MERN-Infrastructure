import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut(); // this removes the token from the localStorage
        setUser(null); //nullify user state
    }

    return (
        <nav>
            <Link to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
            <Link to='/orders/new'>New Order</Link>
            {user && <span>&nbsp;Welcome, {user.name}</span>}
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}