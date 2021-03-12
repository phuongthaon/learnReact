import React from 'react'
import Frame from '../../components/Frame/Frame'
import AnotherPage from "../../components/AnotherPage/AnotherPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/create-product">
              <AnotherPage />
            </Route>

            <Route exact path="/">
              <Frame />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default Home
