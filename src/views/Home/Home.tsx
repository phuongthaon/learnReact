import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPageView from "../LandingPageView/LandingPage";
import ProjectMaster from "../ProjectView/ProjectMaster";
import DesignView from "../DesignView/DesignView";
import DesignDetail from "../DesignView/DesignDetail";

function Home() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <LandingPageView />
            </Route>
            <Route path="/project-master">
              <ProjectMaster />
            </Route>
            <Route path="/choose-design">
              <DesignView />
            </Route>
            <Route path="/design-detail">
              <DesignDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Home;
