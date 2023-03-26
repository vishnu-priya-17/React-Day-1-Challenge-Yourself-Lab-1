const name1="Kabil"; 
const name2="Kabil"; 

const object1={name:"Kabil"};
const object2={name:"Kabil"};

function Comp()
{
    let compare1 = () =>{console.log(name1===name2)}
    let compare2 = () =>{console.log(object1===object2)}
    return (<div>
    <button onClick={compare1}>Primitive data type in JavaScipt</button>
    <br></br>
    <button onClick={compare2}>Reference data type in JavaScipt</button>
    </div>);
}

ReactDOM.render(<Comp/>,document.getElementById("mydiv"));