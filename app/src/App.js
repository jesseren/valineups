import AgentSelect from './components/AgentSelect'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import './App.css';

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
    <Switch>
      <Route exact path="/" component={AgentSelect} />
      <Route exact path="/Maps" component={Maps} />
      <Route exact path="/Sova" component={Agent}/>
    </Switch>
  );
}

export default App;
