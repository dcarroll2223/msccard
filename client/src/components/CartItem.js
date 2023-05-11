import React, { useContext } from 'react';
import { Store } from '../Store';
import { Button, Stack } from 'react-bootstrap';

//setup for display in sidebar
//Stack component shortcut to apply flexbox properties
//deleteFromCart from store to remove item from cart

export default function CartItem(props) {
  const { deleteFromCart, cartItems } = useContext(Store);
  const { id, name, price, imgUrl } = props;
  const quantity = cartItems[id];

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <>
        <img
          key={id}
          src={imgUrl}
          style={{ width: '125px', height: '200px' }}
          alt={name}
        />
        <div className="me-auto">
          <div>
            {name}{' '}
            {quantity > 0 && (
              <span className="text-muted" style={{ fontSize: '.65rem' }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: '.75rem' }}>
            ${price}
          </div>
        </div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => deleteFromCart(id)}
        >
          &times;
        </Button>
      </>
    </Stack>
  );
}
