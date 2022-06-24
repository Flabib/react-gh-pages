const NavBar = ({ onSearchChange }) => {
  return (
    <div className="navbar bg-primary text-primary-content mb-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Daily Routines</a>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered text-black" onChange={(e) => onSearchChange(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;