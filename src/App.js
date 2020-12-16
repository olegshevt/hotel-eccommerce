import React from 'react';
import './App.css';
import './slick.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import Catalog from './pages/Catalog';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { Registration } from './pages/Registration';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Login } from './pages/Login';
import { Search } from './pages/Search';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Delivery } from './pages/Delivery';
import { Logout } from './pages/Logout';
import { Account } from './pages/Profile/Account';
import { Profile } from './pages/Profile/Profile';
import { Error404 } from './pages/404';
import { Orders } from './pages/Orders';
import { EditProfile } from './pages/Profile/EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from './store/actions/auth';
import Favourite from './pages/Favourite';


function App() {

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(authActions.checkIfSignIn());
  }, [dispatch]);

  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog/:id" component={Catalog} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/favourite" component={Favourite} />
      <Route path="/search" component={Search} />
      <Route path="/news" component={News} />
      <Route path="/post/:id" component={NewsDetail} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      {token ?
        <Switch>
          <Route path="/confirmation" component={OrderConfirmation} />
          <Route path="/account" component={Account} />
          <Route path="/profile" component={Profile} />
          <Route path="/orders" component={Orders} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/logout" component={Logout} />
          <Route component={Error404} />
        </Switch>
        : ''}
      <Route component={Error404} />
    </Switch>
  )


  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
