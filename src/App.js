import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import WithNavbar from "./layouts/WithNavbar";
import Dashboard from "./Dashboard";
import Repair from "./pages/repair";
import RepairCreate from "./pages/repair/RepairCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithNavbar/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/repair" element={<Repair/>}/>
          <Route path="/repair/create" element={<RepairCreate/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
