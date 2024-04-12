import './NavBar.css'
import {Link} from "react-router-dom"


function NavBar () {
    return(
        <>
            <nav>
                <div className='imageWrap'>
                    <img src="./src/assets/react.svg" alt="" />
                </div>

                <ul>
                    <Link to={"/"} className="link">
                        <li>Home</li>
                    </Link>

                    <Link to={"/about"} className="link">
                        <li>About</li>
                    </Link>

                    <Link to={"/contact"} className="link">
                        <li>Contact</li>
                    </Link>

                    <Link to={"/setting"} className="link">
                        <li>Settings</li>
                    </Link>
                </ul>

                <div className='buttonWrap'>
                    <Link to={"*"}>
                        <button id='loginBtn'>Login</button>
                    </Link>
                    <button id='logoutBtn'>Logout</button>

                    <img id='imageAvatar' src="./src/assets/imageAvatar.jpg" alt="" />
                </div>

                
            </nav>
        
        
        </>
    )
    
}


export default NavBar