import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Store } from '../Store';

//main card setup
//context is used to manage the state in the cart
//cart increase or decrease displayed when quantity is > 0
//remove button to set quantity to 0

export default function StoreItem(props) {
  const { addToCart, addToCart1, removeFromCart, deleteFromCart, cartItems } =
    useContext(Store);
  const { id, name, price, imgUrl } = props;
  const quantity = cartItems[id];

  return (
    <Card className="h-100 grad">
      <Card.Img
        variant="top"
        src={imgUrl}
        className="card-img img-fluid"
        height="350px"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={() => addToCart1(id)} className="w-100">
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => removeFromCart(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => addToCart(id)}>+</Button>
              </div>
              <Button
                onClick={() => deleteFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
