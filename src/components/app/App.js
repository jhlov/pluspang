import "styles/style.scss";
import "./App.scss";

import { HashRouter, Route } from "react-router-dom";

import Game from "components/game/Game";
import Menu from "components/menu/Menu";
import Rank from "components/rank/Rank";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HashRouter>
          <Route path="/" component={Menu} exact={true} />
          <Route path="/game/:gameType" component={Game} />
          <Route path="/rank" component={Rank} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
