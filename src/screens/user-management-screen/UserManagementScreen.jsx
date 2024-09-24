import React, { useState } from "react";
import { TableRow } from "../../components/Admin";
import { useNavigate } from "react-router-dom";

const UserManagementScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="w-[calc(100vw-4rem)] h-screen overflow-auto">
      <div className="w-full h-full flex items-start justify-center">
        <div className="w-[90%] h-max">
          <div className="w-full mt-7 flex items-center justify-between">
            <h1 className="text-xl font-medium">User Management</h1>
            <button 
            className="w-max h-10 px-5 text-white bg-gray-900 rounded-lg"
            onClick={()=> navigate("/admin/users/profile")}
            >
              Add user
            </button>
          </div>
          <table cellSpacing={30} className="w-full h-full text-center mt-5 border-collapse">
            <thead className="border-b">
              <tr className="w-full h-16 font-semibold">
                <td>
                  <input
                    className="w-5 h-5 accent-black"
                    type="checkbox"
                    name="select-user"
                    id="select-user"
                    onChange={(e) => setSelectAll(e.target.checked)}
                  />
                </td>
                <td>Name</td>
                <td>Gender</td>
                <td>Age</td>
                <td>Location</td>
                <td>Status</td>
                <td>Subscription type</td>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <TableRow 
                  key={user._id} // Ensure key is present
                  selectAll={selectAll} 
                  // name={`${user.firstName} ${user.lastName}`} 
                  name={user.username}
                  gender={user.gender} 
                  age={user.age} 
                  location={user.location.shortName}
                  profilepic={user && user.profilePic ? user.profilePic.url : "https://i.imgur.com/sjLMNDM.png"}
                />
              ))}
            </tbody>
          </table>

          {/* Render pagination */}
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default UserManagementScreen;
