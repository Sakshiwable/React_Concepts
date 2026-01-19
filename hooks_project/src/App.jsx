import { useState } from "react"

const App = () => {

  const [num, setnum] = useState(0)

  const increase = () => {
    setnum(num + 1)
  }

  const decrease = () => {
    setnum(num - 1)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-700 p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6 w-80">

        {/* Counter Display */}
        <div className="h-24 w-24 rounded-xl bg-gray-900 flex items-center justify-center text-white text-4xl font-bold shadow-inner">
          {num}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 w-full">
          <button
            onClick={increase}
            className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-xl font-semibold hover:scale-105 active:scale-95 transition-transform"
          >
            Increase
          </button>

          <button
            onClick={decrease}
            disabled={num === 0}
            className={`flex-1 py-3 rounded-xl font-semibold transition-transform
              ${num === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-red-400 to-red-600 text-white hover:scale-105 active:scale-95"
              }`}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App