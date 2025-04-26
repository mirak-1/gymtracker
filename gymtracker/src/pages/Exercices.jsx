import Exercice from "../components/Exercice";
import Sidebar from "../components/Sidebar";

function Exercices() {
    return (
        <div className="flex">
            <div className="w-3xs">
                <Sidebar/>
            </div>
            <div className="flex">
                <div className="mb-2 mr-2">
                    <Exercice />
                </div>
                <div className="mb-2 mr-2">
                    <Exercice />
                </div>
                <div className="mb-2 mr-2">
                    <Exercice />
                </div>

            </div>
        </div>
    );
}

export default Exercices