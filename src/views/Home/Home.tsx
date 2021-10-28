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
            <Route path="/learnReact/project-master">
              <ProjectMaster />
            </Route>
            <Route path="/learnReact/choose-design">
              <DesignView />
            </Route>
            <Route path="/learnReact/design-detail">
              <DesignDetail />
            </Route>
            <Route exact path="/learnReact/">
              <LandingPageView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Home;
