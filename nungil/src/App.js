import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CreateMap from "./pages/CreateMap";
import Gift from "./pages/Gift";
import Main from "./pages/Main";

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
        </Routes>
      </BrowserRouter>
    </Setting>
  );
}

export default App;
