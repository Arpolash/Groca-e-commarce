import React, { createContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import  './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Main from './Components/Main/Main';
import MenuItemDetails from './Components/Main/MenuItemDetails/MenuItemDetails';
import { Provider } from 'react-redux';
import store from './Components/Redux/StoreIndex';
import Cart from './Components/Main/Cart/Cart';

export const MenuContext = createContext();
function App() {
  const [menu,setMenu] = useState('mix')
  return (
<Router>
  <Switch>
    <Provider store={store}>
  <MenuContext.Provider value={[menu,setMenu]} className="app">
  <Navbar></Navbar>
    <Route exact path="/">
    <Main></Main>
    </Route>
 <Route exact path="/cart">
   <Cart></Cart>
 </Route>
 <Route path="/item/:itemKey">
      <MenuItemDetails></MenuItemDetails>
    </Route>
   
    </MenuContext.Provider>
    </Provider>
  </Switch>
</Router>
   
  

  );
}

export default App;
