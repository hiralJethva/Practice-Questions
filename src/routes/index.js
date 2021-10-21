import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import routes from "./routes";
import "./styles.css";

const Template = () => {
  return (
    <div className="template">
      <Router>
        <Navigation />
        <Switch>
          {routes.map((r) => {
            if (r.path === "/") {
              return (
                <Route exact path="/">
                  {r.Component}
                </Route>
              );
            } else {
              return <Route path={r.path}>{r.Component}</Route>;
            }
          })}
        </Switch>
      </Router>
    </div>
  );
};

export default Template;
