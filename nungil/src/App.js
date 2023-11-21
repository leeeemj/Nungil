import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CreateMap from "./pages/CreateMap";
import Gift from "./pages/Gift";
import Main from "./pages/Main";
import CreateMap1 from './pages/CreateMap1';
import CreateMap2 from "./pages/CreateMap2";

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
        </Routes>
      </BrowserRouter>
    </Setting>
  );
}

export default App;
