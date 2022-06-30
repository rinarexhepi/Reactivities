import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import LibriDashboard from "../../features/librat/dashboard/LibriDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import LibriForm from "../../features/librat/form/LibriForm";
import LibriModelDetails from "../../features/librat/details/LibriModelDetails";
import TekstiForm from "../../features/tekstet/form/TekstiForm";
import TekstiDashboard from "../../features/tekstet/dashboard/TekstiDashboard";
import TekstiModelDetails from "../../features/tekstet/details/TekstiModelDetails";
import RevistaDashboard from "../../features/revistat/dashboard/RevistaDashboard";
import RevistaModelDetails from "../../features/revistat/details/RevistaModelDetails";
import RevistaForm from "../../features/revistat/form/RevistaForm";

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
              <Route
                key={location.key}
                path={["/createLibri", "/manage1/:id"]}
                component={LibriForm}
              />
            </Container>

            {/* routing per tekstet */}
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/tekstet" component={TekstiDashboard} />
              <Route path="/tekstet/:id" component={TekstiModelDetails} />
              <Route
                key={location.key}
                path={["/createTeksti", "/manage2/:id"]}
                component={TekstiForm}
              />
            </Container>

            {/* routing per revistat */}
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/revistat" component={RevistaDashboard} />
              <Route path="/revistat/:id" component={RevistaModelDetails} />
              <Route
                key={location.key}
                path={["/createRevista", "/manage3/:id"]}
                component={RevistaForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
