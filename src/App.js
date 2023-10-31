import "./App.css";
import InvalidRoute from "./component/InvalidRoute";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./feature/home/MainLayout";
import Home from "./feature/home/Home";
import Accueil from "./feature/accueil/Accueil";
import Apropos from "./feature/apropos/Apropos";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="accueil" element={<Accueil />} />
            <Route path="apropos" element={<Apropos />} />
          </Route>
            <Route path="*" element={<InvalidRoute />} />
        </Routes>
    </>
  );
};

export default App;
