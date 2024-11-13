import Card from 'react-bootstrap/Card';

function CardItem(props) {
  return (
    <Card>
      <Card.Body>
        <img src={props.src} />
      </Card.Body>
    </Card>
  );
}

export default CardItem;