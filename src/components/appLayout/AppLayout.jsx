import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Theme from "../theme/Theme"
function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Theme />
    </div>
  );
}

export default AppLayout;
