const CommandMenu = () => {
  return (
    <div className="absolute bg-transparent-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 flex flex-col items-start rounded-xl w-[90vw] max-w-[64rem] border border-transparent-white">
      <span className="bg-white/5 mt-3 mx-4 rounded-lg text-white/50 text-[12px] px-2 leading-10">
        LIN-111 Welkway lightning
      </span>
      <input
        className="text-lg bg-transparent py-3 mx-4 w-full outline-none"
        placeholder="Type a command or search..."
      />
      <div className="flex flex-col w-full text-sm text-gray-400/90 transition duration-150">
        <button className="py-3 px-4 text-start hover:bg-white/5 w-full">
          Assign to...
        </button>
        <button className="py-3 px-4 text-start hover:bg-white/5 w-full">
          Assign to...
        </button>
        <button className="py-3 px-4 text-start hover:bg-white/5 w-full">
          Assign to...
        </button>
      </div>
    </div>
  );
};

export default CommandMenu;
