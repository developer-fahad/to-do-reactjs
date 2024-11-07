import Cards from "./components/Cards";

function App() {
  return (
    <div className="font-raleway overflow-x-scroll  scrollbar-thumb p-4 mx-4 grid grid-flow-col gap-6">
      <div className="w-[420px] h-[90vh] p-2 overflow-hidden  pb-8 bg-gray-200">
        <div className="py-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-10 w-10 block rounded-tl-full rounded-bl-full bg-rose-600"></span>
            <h1 className="text-2xl font-semibold">Incompleted</h1>
          </div>
          <div className="h-10 w-10 flex justify-center rounded-lg items-center bg-gray-300">
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>

        <div className="w-full h-full pb-12 overflow-y-scroll">
          {Array.from({ length: 14 }).map((_, index) => (
            <Cards key={index} />
          ))}
        </div>
      </div>
      <div className="w-[420px] h-[90vh] p-2  overflow-hidden pb-8 bg-gray-200">
        <div className="py-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-10 w-10 block rounded-tl-full rounded-bl-full bg-sky-500"></span>
            <h1 className="text-2xl font-semibold">To Do</h1>
          </div>
          <div className="h-10 w-10 flex justify-center rounded-lg items-center bg-gray-300">
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
        <div className="w-full h-full pb-12 overflow-y-scroll">
          {Array.from({ length: 14 }).map((_, index) => (
            <Cards key={index} />
          ))}
        </div>
      </div>
      <div className="w-[420px] h-[90vh] p-2  overflow-hidden pb-8  bg-gray-200">
        <div className="py-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-10 w-10 block rounded-tl-full rounded-bl-full bg-yellow-500"></span>
            <h1 className="text-2xl font-semibold">Doing</h1>
          </div>
          <div className="h-10 w-10 flex justify-center rounded-lg items-center bg-gray-300">
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
        <div className="w-full h-full pb-12 overflow-y-scroll">
          {Array.from({ length: 14 }).map((_, index) => (
            <Cards key={index} />
          ))}
        </div>
      </div>
      <div className="w-[420px] h-[90vh] p-2  overflow-hidden pb-8  bg-gray-200">
        <div className="py-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* <span className="h-10 w-10 block rounded-tl-full rounded-bl-full bg-sky-500"></span> */}
            <h1 className="text-2xl font-semibold">Under Review</h1>
          </div>
          <div className="h-10 w-10 flex justify-center rounded-lg items-center bg-gray-300">
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
        <div className="w-full h-full pb-12 overflow-y-scroll">
          {Array.from({ length: 14 }).map((_, index) => (
            <Cards key={index} />
          ))}
        </div>
      </div>
      <div className="w-[420px] h-[90vh] p-2  overflow-hidden pb-8  bg-gray-200">
        <div className="py-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* <span className="h-10 w-10 block rounded-tl-full rounded-bl-full bg-sky-500"></span> */}
            <h1 className="text-2xl font-semibold">Completed</h1>
          </div>
          <div className="h-10 w-10 flex justify-center rounded-lg items-center bg-gray-300">
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
        <div className="w-full h-full pb-12 overflow-y-scroll">
          {Array.from({ length: 14 }).map((_, index) => (
            <Cards key={index} />
          ))}
        </div>
      </div>
      <div className="w-[420px] h-[90vh] p-2  overflow-hidden pb-8  bg-gray-200">
        <div className="py-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* <span className="h-10 w-10 block rounded-tl-full rounded-bl-full bg-sky-500"></span> */}
            <h1 className="text-2xl font-semibold">Overdated</h1>
          </div>
          <div className="h-10 w-10 flex justify-center rounded-lg items-center bg-gray-300">
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
        <div className="w-full h-full pb-12 overflow-y-scroll">
          {Array.from({ length: 14 }).map((_, index) => (
            <Cards key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
