import icon1 from '../images/icon1.png'

const Card =()=>{
    return(
        <div className="card">
            <img src={icon1} alt="icon1" />
            <h3> Declarative</h3>
            <p> React makes it <br /> painless to create<br /> interative UIs.</p>
        </div>
    )
}

export default Card