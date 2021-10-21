import Landing from "../components/Landing";
import Questions from "../components/Questions";
import MathOperations from "../components/Questions/MathOperations";
import ChangeText from "../components/Questions/ChangeText";
import PasswordChecker from "../components/Questions/PasswordChecker";

const routes = [
  {
    path: "/",
    title: "Landing",
    Component: Landing
  },
  {
    path: "/questions",
    title: "Questions",
    Component: Questions
  },
  {
    path: "/math-operations",
    title: "Questions",
    Component: MathOperations
  },
  {
    path: "/change-size-color",
    title: "Change Text",
    Component: ChangeText
  },
  {
    path: "*",
    title: "Not Found",
    Component: <h1>Not Found</h1>
  }
];

export default routes;
