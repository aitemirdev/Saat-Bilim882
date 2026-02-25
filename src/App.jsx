import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import IntroAnimation from "./components/IntroAnimation";



// Основные страницы
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import Students from "./pages/Students.jsx";
import FAQ from "./pages/FAQ.jsx";

// Страницы программ
import Mext from "./pages/programs/Mext.jsx";
import Kelechek from "./pages/programs/Kelechek.jsx";
import SelfFunded from "./pages/programs/SelfFunded.jsx";
import LanguageCourses from "./pages/programs/LanguageCourses.jsx";
import PrepMext from "./pages/programs/PrepMext.jsx";
import JapanCamps from "./pages/programs/JapanCamps.jsx";

function App() {
    return (
        <div className="app-root">
            <IntroAnimation />
            <Header />

            <main className="app-main">
                <Routes>
                    {/* Основные страницы */}
                    <Route path="/" element={<Home />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/faq" element={<FAQ />} />

                    {/* Программы */}
                    <Route path="/programs/mext" element={<Mext />} />
                    <Route path="/programs/kelechek" element={<Kelechek />} />
                    <Route path="/programs/self-funded" element={<SelfFunded />} />
                    <Route path="/programs/language-courses" element={<LanguageCourses />} />
                    <Route path="/programs/prep-mext" element={<PrepMext />} />
                    <Route path="/programs/japan-camps" element={<JapanCamps />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;