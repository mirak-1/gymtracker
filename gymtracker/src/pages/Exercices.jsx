import Exercice from "../components/Exercice";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/Searchbar";
import { exercises } from "../data/exercises";

function Exercices() {
    return (
        <div className="flex">
            <div className="w-3xs mr-5">
                <Sidebar />
            </div>
            <div className="flex-col">
                <div className="mt-10">
                    <SearchBar />
                </div>
                <div className="grid grid-cols-3 mt-10 gap-4">
                    {exercises.map((exercise) => (
                        <div key={exercise.id}>
                            <Exercice {...exercise} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Exercices