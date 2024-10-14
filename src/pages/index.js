import Footer from "./component/footer";
import Navbar from "./component/navbar";
import {Container, Row, Col} from 'react-bootstrap';

export default function Index() {
    return <>
        <Navbar />
        <Container>
            <Row>
                <Col className="bg-danger-subtle">1 of 2</Col>
                <Col className="bg-warning-subtle">2 of 2</Col>
            </Row>
            <Row>
                <Col className='bg-warning'>2 of 3</Col>
                <Col className='bg-info-subtle'>1 of 3</Col>
                <Col className='bg-primary-subtle'>3 of 3</Col>
            </Row>
        </Container>
        <Footer />
    </>;
}
