import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="pt-">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-14 ml-1">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="mb-2">
              {" "}
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li className="mb-2">
              {" "}
              <Link to="/dashboard/myReview">My Review</Link>
            </li>
            {admin && (
              <>
                <li className="mb-2">
                  {" "}
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                <li className="mb-2">
                  {" "}
                  <Link to="/dashboard/addDoctor">Add Doctors</Link>
                </li>
                <li className="mb-2">
                  {" "}
                  <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
