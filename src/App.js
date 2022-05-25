import Header from "./components/Header";
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom'
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
    <Header/>

    <Router>
          <Switch>
         <Route exact path="/"  component={ProductListing}/>
         <Route exact path="/product/:productId"  component={ProductDetails}/>
         </Switch>
    </Router>
    </>
  );
}

export default App;
