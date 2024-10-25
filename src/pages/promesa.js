import { Container } from "react-bootstrap";
import Footer from "./component/footer";
import Menu from "./component/navbar";
import { useState } from "react";


export default function Promesa(){
    const[prometido, setPrometido] = useState("")
    setTimeout(() => {
        setPrometido("é divida")
        document.title= "promessa é divida"

    },2000);
    return <> 
    <Menu />
    <Container>
        Promesa {prometido==="" ? "<carregando>" : prometido}
    </Container>
    <Footer/>
    </>
}