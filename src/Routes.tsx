import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Catalog } from "./pages/Search";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/catalog" element={<Catalog/>} />
            </Routes>
        </Router>
    );
}