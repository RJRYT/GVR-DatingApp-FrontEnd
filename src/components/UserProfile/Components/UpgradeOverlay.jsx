import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Upgrade() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const showModalTime = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = ""; // Restore scrolling on cleanup
      clearTimeout(showModalTime);
    };
  }, [showModal]);

  const closeModal = () => setShowModal(false);

  return showModal ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 mx-10 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold mb-4">Upgrade to view more</h2>
          <Link
            onClick={closeModal}
            to={"/dashboard/@me/subscription"}
            className="bg-fuchsia-900 text-white w-3/4 py-3 px-6 rounded-full"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}

export default Upgrade;
