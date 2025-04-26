import HugeiconsDashboardBrowsing from "./icones/dashboard";
import HugeiconsChart01 from './icones/chart'
import HugeiconsNoteEdit from './icones/note'
import HugeiconsCalendar01 from "./icones/calendar";

function Sidebar() {
    return (
        <div>
            <div className="absolute top-0 ml-6 mt-6 text-2xl">Gym<span className="text-blue-700">Trackr</span></div>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 pr-20 hover:bg-blue-200 hover:border-r-5 hover:text-blue-700">
                    <HugeiconsDashboardBrowsing className="mr-3" />
                    Dashboard
                </div>
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 pr-20 hover:bg-blue-200 hover:border-r-5 hover:text-blue-700">
                    <HugeiconsChart01 className="mr-3" />
                    Statistics
                </div>
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 pr-20 hover:bg-blue-200 hover:border-r-5 hover:text-blue-700">
                    <HugeiconsNoteEdit className="mr-3" />
                    Workout plans
                </div>
                <div className="flex place-items-center rounded-l-xl pt-2 pb-2 pl-3 pr-20 hover:bg-blue-200 hover:border-r-5 hover:text-blue-700">
                    <HugeiconsCalendar01 className="mr-3" />
                    Schedule
                </div>
                <div className="divider divider-horizontal">

                </div>
            </div>
        </div>
    );
}

export default Sidebar