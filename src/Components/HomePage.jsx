import {useEffect,useState} from "react";
import CardView from "./Common/CardView";
const url = "http://localhost:3000/categories"
const HomePage=()=>{
    const [dummy,setDummy] = useState("");
    useEffect(()=>{
        fetch(url,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>setDummy(data))
    },[])
    return(
        <div>
             {dummy && dummy.map((value, idx) => {
                return <CardView data={value} key={idx}/>
            })}
        </div>
    )
}
export default HomePage;
 