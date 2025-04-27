
function Exercice({ text }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-3 w-96 hover:shadow-blue-500/50 transition">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-blue-500">Bench Press</h2>
                <p className="text-sm text-gray-500">Hypertrophy • Strength</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="bg-gray-100 rounded-full px-2 py-1">Chest</span>
                <span className="bg-gray-100 rounded-full px-2 py-1">Triceps</span>
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}

export default Exercice