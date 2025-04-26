
function Exercice() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3 w-full max-w-sm hover:shadow-lg transition">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-gray-800">Bench Press</h2>
                <p className="text-sm text-gray-500">Hypertrophy • Strength</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="bg-gray-100 rounded-full px-2 py-1">Chest</span>
                <span className="bg-gray-100 rounded-full px-2 py-1">Triceps</span>
            </div>
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
        </div>
    );
}

export default Exercice