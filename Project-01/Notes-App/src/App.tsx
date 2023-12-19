import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App