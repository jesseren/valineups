import AgentSelect from './components/AgentSelect'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Provider } from 'react-redux'

import './App.css';

import store from './store/store';
import Maps from "./components/Maps"
import Agent from"./components/Agent"


// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <AgentSelect agents={agents} />
//         </Route>
//         <Route exact path="/Maps">
//           <Maps maps={maps}/>
//         </Route>
//         <Route exact path="/Sova">
//           <Agent />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={AgentSelect} />
        <Route exact path="/Maps" component={Maps} />
        <Route exact path="/Sova" component={Agent}/>
      </Switch>
    </Provider>
  );
}

export default App;
