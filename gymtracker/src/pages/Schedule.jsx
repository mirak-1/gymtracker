import ScheduleBox from "../components/ScheduleBox";
import Sidebar from "../components/Sidebar";

function Schedule() {
    return (
        <div className="flex">
            <div className="mr-20">
                <Sidebar />
            </div>
            <div className="mt-20">
                <ScheduleBox />
            </div>
        </div>
    );
}

export default Schedule