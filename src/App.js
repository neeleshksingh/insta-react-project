import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enter from "./PostView/enter";
import Postview from "./PostView/postview";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enter/>}/>
          <Route path="/postview" element={<Postview/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
