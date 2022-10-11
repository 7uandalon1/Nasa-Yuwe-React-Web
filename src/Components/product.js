//import react bootstrap styles
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function IndividualProduct(props) {
    return (
        
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" href={props.url}>Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    
    );
}

export {IndividualProduct};