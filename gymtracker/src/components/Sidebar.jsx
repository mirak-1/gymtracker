import HugeiconsDashboardBrowsing from "./icones/dashboard";
import HugeiconsChart01 from './icones/chart'
import HugeiconsNoteEdit from './icones/note'
import HugeiconsCalendar01 from "./icones/calendar";
import HugeiconsDumbbell01
 from "./icones/dumbbell";
function Sidebar() {
    return (
        <div className="flex-col">
            <div className="ml-6 mt-6 text-2xl mb-20">Gym<span className="text-blue-700">Trackr</span></div>
            <div className="grid grid-cols-1 gap-2 align-center">
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 hover:bg-blue-200 hover:border-r-5 transition duration-300 hover:text-blue-700">
                    <HugeiconsDashboardBrowsing className="mr-3" />
                    Dashboard
                </div>
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 hover:bg-blue-200 hover:border-r-5 transition duration-300 hover:text-blue-700">
                    <HugeiconsChart01 className="mr-3" />
                    Statistics
                </div>
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 hover:bg-blue-200 hover:border-r-5 transition duration-300 hover:text-blue-700">
                    <HugeiconsNoteEdit className="mr-3" />
                    Workout plans
                </div>
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 hover:bg-blue-200 hover:border-r-5 transition duration-300 hover:text-blue-700">
                    <HugeiconsCalendar01 className="mr-3" />
                    Schedule
                </div>
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 hover:bg-blue-200 hover:border-r-5 transition duration-300 hover:text-blue-700">
                    <HugeiconsDumbbell01 className="mr-3" />
                    
                    Exercises
                </div>

            </div>
        </div>
    );
}

export default Sidebar