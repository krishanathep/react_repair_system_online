import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import WithNavbar from "./layouts/WithNavbar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithNavbar/>}>
          <Route path="/" element={<Dashboard/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
