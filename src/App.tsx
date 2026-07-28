import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import Programs from './pages/Programs';
import Scholars from './pages/Scholars';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="programs" element={<Programs />} />
        <Route path="scholars" element={<Scholars />} />
      </Route>
    </Routes>
  );
}

export default App;
