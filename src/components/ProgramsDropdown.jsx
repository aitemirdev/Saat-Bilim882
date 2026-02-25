import { useNavigate } from "react-router-dom";

const programs = [
    {
        id: "mext",
        title: "MEXT",
        description: "Грантовая программа обучения в Японии.",
        icon: "🎓",
        path: "/programs/mext",
    },
    {
        id: "kelechek",
        title: "Келечек",
        description: "Поддержка талантливых студентов.",
        icon: "🌱",
        path: "/programs/kelechek",
    },
    {
        id: "self-funded",
        title: "За свой счёт",
        description: "Обучение на платной основе.",
        icon: "💼",
        path: "/programs/self-funded",
    },
    {
        id: "language-courses",
        title: "Языковые курсы",
        description: "Интенсивные языковые программы.",
        icon: "🗣️",
        path: "/programs/language-courses",
    },
    {
        id: "prep-mext",
        title: "Подготовительный курс MEXT",
        description: "Подготовка к подаче на MEXT.",
        icon: "📚",
        path: "/programs/prep-mext",
    },
    {
        id: "japan-camps",
        title: "Лагерь в Японию",
        description: "Краткосрочные образовательные поездки.",
        icon: "🗾",
        path: "/programs/japan-camps",
    },
];

export default function ProgramsDropdown({ isOpen }) {
    const navigate = useNavigate();

    return (
        <div className={`programs-dropdown ${isOpen ? "programs-dropdown--open" : ""}`}>
            {programs.map((program) => (
                <button
                    key={program.id}
                    className="program-card"
                    onClick={() => navigate(program.path)}
                >
                    <div className="program-card__icon">{program.icon}</div>
                    <div className="program-card__content">
                        <div className="program-card__title">{program.title}</div>
                        <div className="program-card__description">
                            {program.description}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}