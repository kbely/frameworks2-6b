import { Container } from "react-bootstrap";
import style from "@/styles/Footer.module.css"

export default function Footer(){
    return <> 
    <Container> 
        <footer className={`${style.footerGradiente}  my-3 px-5 border-1 rounded-4 rounded-start-pill`}> 
            <ul className="nav border-end- 7"> 
                <li> disciplina de frameworks 2 </li> 
            </ul> 
            <p>&copy; 2024 - IFMS </p>
            </footer>
         </Container>
    </>
}