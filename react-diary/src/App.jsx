import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Header from "./components/header/Header";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { isAuthReady } = useAuthContext();
  return (
    <div className="App">
      {isAuthReady ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default App;
