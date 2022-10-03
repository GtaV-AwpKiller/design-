import Header from "./components/Header/Header";

import "./App.css";
import FirstSection from "./components/Blocks/First/FirstSection";
import SecondSection from "./components/Blocks/Second/SecondSection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
    return (
        <div className="App">
            <SmoothScroll>
                <CustomCursor />
                <Header />
                <FirstSection />
                <SecondSection />
            </SmoothScroll>
        </div>
    );
}

export default App;
