import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js'
//import Playlist from './Components/PlaylistContainer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

export default class App extends React.Component {

   render() {
          return (
            <>
              <Router>
                <>
                  <Route exact path="/" component={Home} />
                </>
              </Router>
            </>
                );
   }
}

{/* <Route exact path="/tracks" component={Playlist} /> */}
