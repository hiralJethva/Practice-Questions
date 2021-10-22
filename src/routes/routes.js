import Landing from "../components/Landing";
import Questions from "../components/Questions";
import MathOperations from "../components/Questions/MathOperations";
import ChangeText from "../components/Questions/ChangeText";
import PasswordChecker from "../components/Questions/PasswordChecker";
import ButtonLoader from "../components/Questions/ButtonLoader";
import CSSColorVariables from "../components/Questions/CSSColorVariables";
import CheckAgePower from "../components/Questions/CheckAgePower";

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
    title: "Questions",
    Component: ChangeText
  },
  {
    path: "/button-loader",
    title: "Button Loader",
    Component: ButtonLoader
  },
  {
    path: "/css-color-variables",
    title: "CSS Color Variables",
    Component: CSSColorVariables
  },
  {
    path: "/password-checker",
    title: "Password Checker",
    Component: PasswordChecker
  },
  {
    path: "/check-age-power",
    title: "Find out Age/Power",
    Component: CheckAgePower
  },
  {
    path: "*",
    title: "Not Found",
    Component: <h1>Not Found</h1>
  }
];

export default routes;
