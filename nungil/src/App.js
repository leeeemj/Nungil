import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CreateMap from "./pages/CreateMap";
import Gift from "./pages/Gift";
import Gift1 from "./pages/Gift1";
import Gift2 from "./pages/Gift2";

import Main from "./pages/Main";
import CreateMap1 from './pages/CreateMap1';
import CreateMap2 from "./pages/CreateMap2";
import Gift0 from "./pages/Gift0";


const Setting = styled.div`
  max-width: 393px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <Setting>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gift />} />
          <Route path="/createmap" element={<CreateMap />} />
          <Route path="/main" element={<Main />} />

          <Route path="/createmap1" element={<CreateMap1 />} />
          <Route path="/createmap2" element={<CreateMap2 />} />
          <Route path="/gift0" element={<Gift0 />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/gift1" element={<Gift1 />} />
          <Route path="/gift2" element={<Gift2 />} />
        </Routes>
      </BrowserRouter>
    </Setting>
  );
}

export default App;
