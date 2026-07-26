import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import Programs from './pages/Programs';
import Events from './pages/Events';
import { paths } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.about} element={<About />} />
          <Route path={paths.getInvolved} element={<GetInvolved />} />
          <Route path={paths.programs} element={<Programs />} />
          <Route path={paths.events} element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
