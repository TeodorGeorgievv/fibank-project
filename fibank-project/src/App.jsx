import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout/Layout";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <RegistrationForm />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
