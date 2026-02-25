import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgramsDropdown from "./ProgramsDropdown.jsx";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);

    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    // Изменение стиля хедера при скролле
    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Закрытие шторки при клике вне
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Скролл к футеру
    const handleContactsClick = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
            <div className="header__inner">

                {/* ЛОГОТИП */}
                <div className="header__logo" onClick={() => navigate("/")}>
                    <img src="/logo.png" alt="Saat Bilim Logo" className="header__logo-img" />
                    <span className="header__logo-text">Saat.bilim</span>

                </div>

                {/* БУРГЕР ДЛЯ МОБИЛОК */}
                <button className="burger" onClick={() => setMobile((prev) => !prev)}>
                    ☰
                </button>

                {/* МЕНЮ */}
                <nav className={`header__nav ${mobile ? "header__nav--open" : ""}`}>
                    <Link to="/" className="header__link" onClick={() => setMobile(false)}>
                        Дом
                    </Link>

                    <Link to="/history" className="header__link" onClick={() => setMobile(false)}>
                        История основания
                    </Link>

                    <Link to="/students" className="header__link" onClick={() => setMobile(false)}>
                        Наши студенты
                    </Link>

                    <Link to="/faq" className="header__link" onClick={() => setMobile(false)}>
                        FAQ
                    </Link>

                    <button
                        className="header__link header__link--button"
                        onClick={() => {
                            handleContactsClick();
                            setMobile(false);
                        }}
                    >
                        Контакты
                    </button>

                    {/* ПРОГРАММЫ — ПОСЛЕДНЯЯ КНОПКА */}
                    <div className="header__dropdown-wrapper" ref={dropdownRef}>
                        <button
                            className="header__link header__link--button header__programs-btn"
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            Программы
                            <span className={`arrow ${open ? "arrow--open" : ""}`}>▾</span>
                        </button>

                        <ProgramsDropdown isOpen={open} />
                    </div>
                </nav>
            </div>
        </header>
    );
}