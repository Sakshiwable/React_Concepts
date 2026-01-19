// import { useState } from "react"

// const App = () => {

//   const [title, setTitle] = useState('');
//   const [details, setDetails] = useState('');

//   const [task, setTask] = useState([]);

//   const submitHandler = (e) =>{
//     e.preventDefault();
//     const copyTask = [...task];
//     copyTask.push({title, details});
//     setTask(copyTask);

//     setTitle('');
//     setDetails('');
//   }

//   const deleteNote = (idx) => {
//     const copyTask = [...task];
//     copyTask.splice(idx, 1);
//     setTask(copyTask);
//   }

//   return (
//     <div className="bg-gray-900 h-screen w-full flex  p-4">
//       <div className="w-full flex  justify-between p-10 gap-10">
        
//         <div className="w-1/2">
//           {/* Form Section */}
//         <h1 className="text-white text-2xl font-semibold mb-3">
//           Add Note
//         </h1>

//         <form className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Note title"
//             className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <textarea
//             placeholder="Add details"
//             rows="4"
//             className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//           >
            
//           </textarea>
//           <button
//             onClick={submitHandler}
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
//           >
//             Save Note
//           </button>
//         </form>
//         </div>

//         {/* Notes Section */}
//         <div className="w-1/2">
         
//           <h1 className="text-white text-2xl font-semibold mb-3">
//             Recent Notes
//           </h1>
//           <div className="flex flex-wrap gap-5 mt-3 h-full overflow-auto">
//             {task.map(function(elem, idx){
//               return <div key={idx} className="h-60 w-48 rounded-xl bg-white p-4 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-lg font-semibold mb-2">{elem.title}</h2>
//                   <p className="text-gray-700 flex-grow">{elem.details}</p>
//                 </div>
//                 <button onClick={()=>{
//                   deleteNote(idx);
//                 }} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg">Delete</button>
//               </div>
//             })}
//             <div className="h-60 w-48 rounded-xl bg-white"></div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App


import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, details }]);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    setTask(task.filter((_, i) => i !== idx));
  };

  return (
    <div className="bg-gray-900 min-h-screen w-full p-4">
      <div className="w-full flex flex-col lg:flex-row gap-8 p-2 lg:p-10">

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-white text-2xl font-semibold mb-3">
            Add Note
          </h1>

          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Note title"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              placeholder="Add details"
              rows="4"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
            >
              Save Note
            </button>
          </form>
        </div>

        {/* Notes Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-white text-2xl font-semibold mb-3">
            Recent Notes
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
            {task.map((elem, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white p-4 flex flex-col min-h-[200px]"
              >
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold mb-2">
                    {elem.title}
                  </h2>
                  <p className="text-gray-700 text-sm">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => deleteNote(idx)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default App;
