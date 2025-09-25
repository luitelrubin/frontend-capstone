import "./App.css";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
