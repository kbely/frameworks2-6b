import { Container } from "react-bootstrap";
import Footer from "./component/footer";
import Menu from "./component/navbar";
import { useState } from "react";


export default function Promesa(){
    const[prometido, setPrometido] = useState("")
    setTimeout(() => {
        setPrometido("é divida")
        document.title= "promessa é divida"

    },3500);
    return <> 
    <Menu />
    <Container>
        Promesa {prometido==="" ? <img src="./loading.gif" widht={100} height={100}/> : prometido}
    </Container>
    <Footer/>
    </>
}