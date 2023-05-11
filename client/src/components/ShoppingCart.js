import React, { useContext } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { Store } from '../Store';
import CartItem from './CartItem';
import { products } from '../data';

//sidebar shopping cart setup with placement added on right side
//closes on click outside and on X on top of sidebar
//passes props to CartItem component

export default function ShoppingCart({ isOpen }) {
  const { closeCart } = useContext(Store);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {products.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
