import React, { useEffect, useState } from 'react';
import { TableRow } from "../../components/Admin";
import axiosInstance from "../../Instance/Axios";

const UserManagementScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectAll, setSelectAll] = useState(false);

  const fetchUsers = async (page) => {
    try {
      const response = await axiosInstance.get(`/admin/me/users?page=${page}&limit=10`);
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // const renderPagination = () => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pageNumbers.push(i);
  //   }

  //   return (
  //     <div className="flex justify-end mt-4">
  //       <div className="pagination flex items-center">
  //         <div className="px-3 py-1">
  //           <button
  //             className="px-3 py-1 border rounded-full bg-blue-800 text-white"
  //             onClick={handlePreviousPage}
  //             disabled={currentPage === 1}
  //           >
  //             <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  //               <path d="M11.5125 20.6761L1.04846 11.2361C0.600461 10.8521 0.600461 10.1481 1.04846 9.76415L11.5125 0.324149C12.1845 -0.283851 13.2725 0.164149 13.2725 1.06015L13.2725 19.9401C13.2725 20.8361 12.1845 21.2841 11.5125 20.6761Z" fill="#A098AE" />
  //             </svg>
  //           </button>
  //         </div>

  //         {pageNumbers.map((number) => (
  //               <button
  //               key={number}
  //               onClick={() => handlePageClick(number)}
  //               className={`mx-1 px-3 py-1 border rounded-full ${
  //                 number === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black'
  //               }`}
  //             >
  //               {number}
  //             </button>
            
  //           // <button
  //           //   key={number}
  //           //   onClick={() => handlePageClick(number)}
  //           //   className={`mx-1 px-3 py-1 border ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black'} rounded-full`}
  //           // >
  //           //   {number}
  //           // </button>
  //         ))}

  //         <div className="px-3 py-1">
  //           <button
  //             className="px-3 py-1 border rounded-full bg-blue-800 text-white"
  //             onClick={handleNextPage}
  //             disabled={currentPage === totalPages}
  //           >
  //             <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  //               <path d="M2.48754 0.323851L12.9515 9.76385C13.3995 10.1479 13.3995 10.8519 12.9515 11.2359L2.48754 20.6759C1.81554 21.2839 0.727539 20.8359 0.727539 19.9399L0.727539 1.05985C0.727539 0.163851 1.81554 -0.284149 2.48754 0.323851Z" fill="#A098AE" />
  //             </svg>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-end mt-4">
        <div className="pagination flex items-center">
          <div className="px-3 py-1">
            <button
               onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5125 20.6761L1.04846 11.2361C0.600461 10.8521 0.600461 10.1481 1.04846 9.76415L11.5125 0.324149C12.1845 -0.283851 13.2725 0.164149 13.2725 1.06015L13.2725 19.9401C13.2725 20.8361 12.1845 21.2841 11.5125 20.6761Z" fill="#A098AE" />
              </svg>
            </button>
          </div>
  
          
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageClick(number)}
                className={`mx-1 px-3 py-1 border rounded-full ${
                  number === currentPage 
                    ? 'bg-blue-700 text-white ' // Active page stays blue
                    : 'bg-white text-gray-400 hover:bg-blue-300' // Other pages hover effect
                }`}
              >
                {number}
              </button>
          ))}
  
          <div className="px-3 py-1">
            <button
              
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.48754 0.323851L12.9515 9.76385C13.3995 10.1479 13.3995 10.8519 12.9515 11.2359L2.48754 20.6759C1.81554 21.2839 0.727539 20.8359 0.727539 19.9399L0.727539 1.05985C0.727539 0.163851 1.81554 -0.284149 2.48754 0.323851Z" fill="#A098AE" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="w-[calc(100vw-4rem)] h-screen overflow-auto">
      <div className="w-full h-full flex items-start justify-center">
        <div className="w-[90%] h-max">
          <div className="w-full mt-7 flex items-center justify-between">
            <h1 className="text-xl font-medium">User Management</h1>
            <button className="w-max h-10 px-5 text-white bg-gray-900 rounded-lg">
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
