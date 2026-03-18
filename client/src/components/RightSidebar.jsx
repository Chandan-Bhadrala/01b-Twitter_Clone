import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <div className="flex h-full flex-col">
      {/* Searchbar */}
      <div className="mt-2 flex items-center gap-1 rounded-4xl border border-amber-200 p-2">
        <CiSearch size="20" />
        <input placeholder="Search" type="text" className="outline-none" />
      </div>

      {/* Who to follow card*/}
      <div className="mt-4 rounded-2xl border border-amber-200 p-2">
        <h1 className="mb-4 text-2xl font-bold">Who to follow</h1>

        {/* Individual Profiles */}
        <div className="mb-4 flex gap-2">
          <img
            src="https://i.pravatar.cc/150"
            alt="avatar"
            className="h-10 w-10 rounded-full"
          />

          <div className="flex w-full justify-between">
            <div>
              <h1 className="font-semibold">Chandan</h1>
              <p>@ChandanBhadrala</p>
            </div>
            <button className="mr-2 rounded-4xl bg-black px-4 text-lg font-semibold text-white">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
