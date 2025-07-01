import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Themes /> */}
    </div>
  );
}

export default AppLayout;
