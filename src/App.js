import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';

function App() {

  let [isLoggedin, setIsLoggedin] = useState(false);

  let products = [
    {
      id: 1,
      name: "watch",
      pname:"noise",
      price: 1600,
      amount: 1,
      itemImg: "https://images-na.ssl-images-amazon.com/images/I/51NOjinGjrL._SX679_.jpg",
    },
    {
      id: 2,
      name: "mobile",
      pname:"Redmi-note-8pro",
      price: 22000,
      amount: 1,
      itemImg: "https://images-na.ssl-images-amazon.com/images/I/51NOjinGjrL._SX679_.jpg",
    },
    {
      id: 3,
      name: "belt",
      pname:"hrx",
      price: 100,
      amount: 1,
      itemImg: "https://images-na.ssl-images-amazon.com/images/I/51NOjinGjrL._SX679_.jpg",
    }
  ]


  let [cart, setCart] = useState([]);

  const handelClick = (item) => {
    if(isLoggedin===true){
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(item)
    alert("The item is added to Your Cart")
  }else{
    alert("please login...")
  }
}

  const handleChange1 = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    alert("The item is removed from Your Cart")
    // handlePrice();
  };

  let [svalue, setSvalue] = useState("")

  let handelChange = (e) => {
    setSvalue(e.target.value)
  }

  let search = products.filter((x) => {
    if (svalue === "") {
      return x
    } else {
      // let res=(x.pname || x.name)
      return x.name.toLowerCase().includes(svalue)
    }
  })

  return (
    <Router>
      <Navbar state={cart.length} isLoggedin={isLoggedin} products={products} handelChange={handelChange} />
      <Routes>
        <Route path='/' element={<Home updateState={handelClick} products={search} />} />
        <Route path='/cart' element={<Cart updateState={handleRemove} handelc={handleChange1} item={cart} />} />
        <Route path='/Login' element={<Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />} />
      </Routes>
    </Router>
  );
}

export default App;
