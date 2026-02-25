import "./Home.css";

export default function Home() {
    return (
        <div className="home">

            {/* HERO */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>SAAT BILIM EDUCATION CENTER</h1>
                    <p>Мы помогаем студентам поступать в Японию с 2010 года</p>
                    <button
                        className="hero-btn"
                        onClick={() => {
                            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Узнать больше
                    </button>
                </div>
            </section>

            {/* О НАС — КАРТОЧКИ */}
            <section id="about" className="cards-section">
                <h2 className="section-title">О нас</h2>

                <div className="cards">
                    <div className="card fade-in">
                        <h3>Кто мы</h3>
                        <p>
                            Команда союзников с огромным желанием помочь студентам в достижении их целей.
                        </p>
                    </div>

                    <div className="card fade-in">
                        <h3>Наша цель</h3>
                        <p>
                            Стимулировать студентов к получению достойного образования и поиску своего призвания.
                        </p>
                    </div>

                    <div className="card fade-in">
                        <h3>Наша философия</h3>
                        <p>
                            Стремление к знаниям, красоте и ежедневному счастью.
                        </p>
                    </div>
                </div>
            </section>

            {/* О ЦЕНТРЕ */}
            <section className="about-section fade-in">
                <div className="about-text">
                    <h2 className="section-title">О центре Saat Bilim</h2>
                    <p>
                        Частный центр культуры и языка, основанный в феврале 2010 года. Мы помогаем студентам
                        поступать в престижные вузы, колледжи и языковые школы Японии. Также осуществляем программу
                        Kelechek и готовим студентов к стипендиальной программе MEXT.
                    </p>
                </div>

                <div className="about-timeline">
                    <div className="line"></div>
                    <div className="dot"></div>
                    <p>Основан в 2010 году</p>
                </div>
            </section>

            {/* ОСНОВАТЕЛЬНИЦА */}
            <section className="founder-section fade-in">
                <div className="founder-photo"></div>

                <div className="founder-info">
                    <h2 className="section-title">Нуркамал Жумабай кызы</h2>
                    <p>
                        Основательница Saat Bilim. Стипендиат программы MEXT. Окончила магистратуру и докторантуру (PhD) в Японии.
                    </p>

                    <ul className="founder-list">
                        <li>Педагогический университет Хоккайдо (2002–2003)</li>
                        <li>Japan Foundation — преподаватель японского языка (2007–2008)</li>
                        <li>Токийский университет иностранных языков — магистратура</li>
                        <li>Университет Хитоцубаши — магистр социолингвистики</li>
                        <li>Университет Хитоцубаши — PhD (2015–2021)</li>
                    </ul>
                </div>
            </section>

            {/* ДОСТИЖЕНИЯ */}
            <section className="history-section">
                <h2 className="section-title">История центра</h2>

                <div className="history-cards">

                    <div className="history-card fade-in">
                        <h3>2018</h3>
                        <p>
                            Организована первая в Кыргызстане «Ярмарка образования в Японии» с участием 14 школ.
                        </p>
                    </div>

                    <div className="history-card fade-in">
                        <h3>2014</h3>
                        <p>
                            Проведены «Дни культуры КР» в Киото и Токио при поддержке посольства КР и ассоциации «Замандаш».
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}