import type { FC } from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import CreateAgent from "./pages/create";
import Dashboard from "./pages/dashboard";
import AgentDetail from "./pages/detail";
import { history } from "./utils/history";

const App: FC = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Route exact path={"/"} component={Dashboard} />
        <Route exact path={"/detail"} component={AgentDetail} />
        <Route exact path={"/create"} component={CreateAgent} />
      </Router>
    </div>
  );
};

export default App;
