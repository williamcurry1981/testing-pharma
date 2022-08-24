import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Home = React.lazy(() => import('./page/Home'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App