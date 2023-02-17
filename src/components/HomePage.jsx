import React from 'react'
function HomePage({ pets,cart,setCart,login }) {
    const addToCart = (index,item) => {
        if (cart.find(x => x.index === index) === undefined) {
            setCart([...cart, item])
        }
      }
  return (
    <div className='grid-img'>
        {
            pets.map((item,index) => (
                <div>
                    <div className = "block">
                        <p>{item.name}</p>
                        {login ? <button className='btn' onClick={() => addToCart(index,item)}>Добавить в корзину</button> : ""}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default HomePage

//Альме́тьевск (тат. Әлмәт) — город в Республике Татарстан Российской Федерации. Административный центр Альметьевского района. Образует городское поселение город Альметьевск[3].
// Самый крупный город в полицентрической Альметьевско-Бугульминско-Лениногорской агломерации и четвёртый по численности населения город Татарстана, центр Юго-Восточной экономической зоны Татарстана. «Велостолица» России.[4]