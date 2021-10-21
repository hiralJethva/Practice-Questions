import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import routes from "./routes";

const Template = () => {
  return (
    <>
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
    </>
  );
};

export default Template;
