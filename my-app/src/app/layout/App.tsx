import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import LibriDashboard from "../../features/librat/dashboard/LibriDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import LibriForm from "../../features/librat/form/LibriForm";
import LibriModelDetails from "../../features/librat/details/LibriModelDetails";

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/librat" component={LibriDashboard} />
              <Route path="/librat/:id" component={LibriModelDetails} />
              <Route key={location.key} path={["/createLibri", "/manage/:id"]} component={LibriForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
