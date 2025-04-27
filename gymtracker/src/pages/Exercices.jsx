import Exercice from "../components/Exercice";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/Searchbar";

function Exercices() {
    return (
        <div className="flex">
            <div className="w-3xs mr-2">
                <Sidebar />
            </div>
            <div className="flex-col">
                <div className="mt-10">
                    <SearchBar />
                </div>
                <div className="grid grid-cols-3 mt-10 gap-4">
                    <div className="">
                        <Exercice text="lorem ipsum" />
                    </div>
                    <div className="">
                        <Exercice text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" />
                    </div>
                    <div className="">
                        <Exercice />
                    </div>
                    <div className="">
                        <Exercice />
                    </div>
                    <div className="">
                        <Exercice />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exercices