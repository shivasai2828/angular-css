import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
