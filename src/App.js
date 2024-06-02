import { Helmet } from 'react-helmet';
import './App.css';
import AppMain from './compo/AppMain';

function App() {
  return (
    <div className="App">
      <AppMain/>
      <Helmet>
        <title>BuyBuddy - Your Ultimate Shopping Destination</title>
        <meta name="description" content="BuyBuddy offers a wide range of products at unbeatable prices. Shop now for the best deals on electronics, fashion, home goods, and more!" />
      </Helmet>
    </div>
  );
}

export default App;
