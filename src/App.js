import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Spinner from './component/spinner/Spinner';

const Home = React.lazy(() => import('./page/Home'));

const App = () => {
  return (
    <React.Suspense fallback={Spinner}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App