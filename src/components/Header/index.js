
import "./index.css";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://i.imghippo.com/files/ClZz6734to.png" alt="Apple" className="logo"/>
                <h3>Watch</h3>
                
            </div>
            <h1>Collections</h1>
            <button className="save-button">Save</button>
        </div>
    )
}


export default Header