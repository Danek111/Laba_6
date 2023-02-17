import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import './style.css';
import { Header, HomePage, Reg, Login, Cart, Order } from './components';
import uuid from 'react-uuid';

function App() {
  const [pets, setPets] = useState([]);
  const [cart, setCart] = useState([]);
  const [order,setOrder] = useState([])
  const [sort, setSort] = React.useState('name');
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
  const uniquePets = pets.filter(
      (pet, index, self) => index === self.findIndex((p) => p.id === pet.id)
  );
  const comparePets = (a, b) => {
    switch (sort) {
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  };
  const sortedPets = [...uniquePets].sort(comparePets);


  const fetchPets = async () => {
    await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
      .then((res) => res.json())
      .then((pet) => setPets(pet))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const [login, setLogin] = useState(false); //Установить на false для корректной работы
  const [account, setAccount] = useState([
    { id: uuid(), name: 'admin', password: 'admin' },
    { id: uuid(), name: 'Sadryev', password: '12345' },
    { id: uuid(), name: 'CICD', password: '12345' },
  ]);

  const Sad = cart.length;

  const sad = order.length

  return (
    <Router>
      <label htmlFor="sort">Сортировка по: </label>
      <select id="sort" value={sort} onChange={handleSortChange}>
        <option value="name">Названию</option>
      </select>
      <Header login={login} sad={sad} setLogin={setLogin} Sad={Sad}></Header>
      <Routes>
        <Route
          path='/'
          element={<HomePage cart={cart} setCart={setCart} pets={pets} login={login} />}
        ></Route>
        <Route
          path='/cart'
          element={<Cart login={login} cart={cart} setCart={setCart} setOrder={setOrder} />}
        ></Route>
        <Route
          path='*'
          element={
            <p className='grid-img'>404 Error</p>
          }
        ></Route>
        <Route
          path='/reg'
          element={
            <Reg
              propName={''}
              propPassword={''}
              propEmail={''}
              account={account}
              setAccount={setAccount}
            />
          }
        ></Route>
        <Route path='/login' element={<Login setLogin={setLogin} account={account} />}></Route>
        <Route path="/order" element={<Order login = {login} order={order} setOrder={setOrder} setCart={setCart}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
// Альме́тьевск (тат. Әлмәт) — город в Республике Татарстан Российской Федерации. Административный центр Альметьевского района. Образует городское поселение город Альметьевск[3].
//     Самый крупный город в полицентрической Альметьевско-Бугульминско-Лениногорской агломерации и четвёртый по численности населения город Татарстана, центр Юго-Восточной экономической зоны Татарстана. «Велостолица» России.[4]
