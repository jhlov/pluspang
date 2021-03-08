import "styles/style.scss";
import "./App.scss";

import Game from "components/game/Game";
import Menu from "components/menu/Menu";
import Rank from "components/rank/Rank";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Route path="/" component={Menu} exact={true} />
        <Route path="/game" component={Game} />
        <Route path="/rank" component={Rank} />
      </div>
    </div>
  );
}

export default App;
