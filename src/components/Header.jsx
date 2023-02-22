import NavBar from "./NavBar";
import HeaderBtn from "./HeaderBtn";

const Header =()=>{
    const title = 'Say hello to ReactJS';
    
    return (
        <header className="header">
           
            <NavBar />
            <div className="header-container">
            <h1>{title}</h1>
            <p>You will learn how to use <br /> the most popular frontend library,<br /> and become a super Ninja developer.</p>
            <HeaderBtn />
            </div>
        </header>

    )
}

export default Header;