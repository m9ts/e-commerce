import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComoFiz from './pages/ComoFiz';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/como-fiz" element={<ComoFiz />} />
    </Routes>
  );
}

export default App;