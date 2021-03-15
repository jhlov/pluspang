import "styles/style.scss";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Game from "components/game/Game";
import Menu from "components/menu/Menu";
import Rank from "components/rank/Rank";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route path="/" component={Menu} exact={true} />
          <Route path="/game" component={Game} />
          <Route path="/rank" component={Rank} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
