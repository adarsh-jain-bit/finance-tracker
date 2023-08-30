import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import GlobalState from "./context/ContextState";
function App() {
  return (
   
      <GlobalState>
        <Dashboard />
      </GlobalState>
   
  );
}

export default App;
