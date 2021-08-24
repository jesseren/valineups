import AgentSelect from './components/AgentSelect'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import './App.css';

import Maps from "./components/Maps"
import Agent from"./components/Agent"

const agents = [
  {name: "Brimstone", panel: "images/Valorant_Brimstone_Card.jpeg"},
  {name: "Killjoy", panel: "images/Valorant_Killjoy_Card.jpeg"},
  {name: "Raze", panel: "images/Valorant_Raze_Card.jpeg"},
  {name: "Sova", panel: "images/Valorant_Sova_Card.jpeg"},
  {name: "Viper", panel: "images/Valorant_Viper_Card.jpeg"}
]

const maps = [
  {name: "Ascent", image: "images/Loading_Screen_Ascent.png"},
  {name: "Bind", image: "images/Loading_Screen_Bind.png"},
  {name: "Breeze", image: "images/Loading_Screen_Breeze.png"},
  {name: "Haven", image: "images/Loading_Screen_Haven.png"},
  {name: "Icebox", image: "images/Loading_Screen_Icebox.png"},
  {name: "Haven", image: "images/Loading_Screen_Split.png"}
]

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
