import React, { useState } from "react";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "_" : "+"}
        </button>
        {isOpen && children}
      </div>
    </div>
  );
};

export default Box;
