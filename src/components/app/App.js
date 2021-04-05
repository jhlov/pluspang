import Game from "components/game/Game";
import HowTo from "components/howto/HowTo";
import Menu from "components/menu/Menu";
import Rank from "components/rank/Rank";
import { HashRouter, Route } from "react-router-dom";
import "styles/style.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HashRouter>
          <Route path="/" component={Menu} exact={true} />
          <Route path="/game/:gameType" component={Game} />
          <Route path="/rank" component={Rank} />
          <Route path="/howto" component={HowTo} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
