import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
}

export default Layout;
