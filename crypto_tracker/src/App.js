import "./App.css";
import { AppContainer } from "./Styles/styled";
import { Header } from "../src/Components/Header/Header";
import { Footer } from "../src/Components/Footer/Footer";
import { Newsfeeds } from "./Components/Newsfeeds/Newsfeeds";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Header />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/newsfeeds" exact component={Newsfeeds} />
        {/* <Route path="/crypto-prices" component={CryptoPrices} /> */}
        <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
