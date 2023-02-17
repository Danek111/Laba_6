import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Cart({ cart, login,order,setOrder,setCart}) {
  const navigate = useNavigate();

  const addToOrder = () => {
    setOrder([...cart])
    setCart([])
  }
  return (
    <div className='container cart'>
      <button className='btnD' onClick={() => navigate(-1)}>
        <svg xmlns='https://icon-library.com/images/back-button-icon/back-button-icon-9.jpg' />
      </button>
      {login ? (
        <div>
          <h2>Корзина</h2>
          <p className='cart'>
            {cart.map((item) => (
              <div className='Korzina'>
                <p>{item.name}</p>
              </div>
            ))}
          </p>
          <Link to="/order">
          <button onClick={() => addToOrder()} className='btn'>Оформить заказ</button></Link>
        </div>
      ) : (
        <p>Просмотр корзины не возможен, авторизуйтесь.</p>
      )}
      
    </div>
  );
}

export default Cart;
