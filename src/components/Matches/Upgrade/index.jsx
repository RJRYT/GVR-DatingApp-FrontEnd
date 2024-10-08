import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Upgrade() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll position as needed
        setShowModal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Add or remove inline styles to the body when modal is shown
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ""; // Restore scrolling on cleanup
    };
  }, [showModal]);

  const closeModal = () => setShowModal(false);

  return showModal ? (
    <div className="fixed inset-0 z-11 flex items-end justify-center">
      {/* Background blur effect */}
      <div
        className="fixed inset-x-0 bottom-0 shadow-2xl bg-black bg-opacity-50 backdrop-blur-sm"
        style={{ height: "50%" }}
      />

      {/* Modal content */}
      <div className="absolute bottom-[80px] w-3/4 py max-w-md mb-6 mx-3 bg-white p-6 rounded-lg shadow-lg">
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
