import Header from "./components/Header/Header";
import CustomCursor from "./components/CustomCursor/CustomCursor";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./components/routes/MainPage";
import AboutPage from "./components/routes/aboutPage/AboutPage";

function App() {
    return (
        <>
            <CustomCursor />
            <Header />
            {/* <SmoothScroll> */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
}

export default App;
