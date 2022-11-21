//import react bootstrap styles
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function IndividualProduct(props) {
    return (
        <article> 
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text class='product-text'>
                        {props.description}
                    </Card.Text>
                        {props.children}
                    <Button variant="primary" class='product-button' href={props.url}>Comprar</Button>
                </Card.Body>
            </Card>
        </div>
        </article>
    
    );
}

export {IndividualProduct};