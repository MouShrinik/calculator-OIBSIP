import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div
      className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-900 via-blue-900 to-black 
    text-white w-screen h-screen flex justify-center items-center"
    >
      <div
        className="container w-64 h-auto bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-900 via-blue-900 to-black rounded-2xl 
      shadow-xl border-4 border-gray-600"
      >
        <div className="display p-2">
          <input
            type="text"
            value={result}
            className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6) 
                placeholder-black px-1 rounded-lg bg-gray-400 text-2xl pt-10 
                outline-none text-right"
            placeholder="0"
          />
        </div>
        <div className="number-keys">
          <div className="flex justify-between m-2">
            <input
              type="button"
              onClick={clearScreen}
              value="C"
              className="bg-red-500 shadow-md w-28 h-37 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="<"
              className="bg-gray-500 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />

            <input
              onClick={clickHandle}
              type="button"
              value="/"
              className="bg-gray-500 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandle}
              type="button"
              value="7"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="8"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="9"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="*"
              className="bg-gray-500 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandle}
              type="button"
              value="4"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="5"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="6"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="-"
              className="bg-gray-500 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandle}
              type="button"
              value="1"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="2"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="3"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="+"
              className="bg-gray-500 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandle}
              type="button"
              value="0"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="00"
              className="bg-gray-700 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={clickHandle}
              type="button"
              value="."
              className="bg-gray-500 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
            <input
              onClick={calculate}
              type="button"
              value="="
              className="bg-gray-500 shadow-md w-12 h-12 rounded-lg text-center text-black font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
