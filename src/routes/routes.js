import Landing from "../components/Landing";
import TextManipulator from "../components/TextManipulator";

const routes = [
  {
    path: "/",
    title: "Landing",
    Component: Landing
  },
  {
    path: "/change-text",
    title: "Change Text",
    Component: TextManipulator
  },
  {
    path: "*",
    title: "Not Found",
    Component: <h1>Not Found</h1>
  }
];

export default routes;
