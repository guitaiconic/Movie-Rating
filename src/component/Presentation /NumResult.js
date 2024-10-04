import React from "react";

const NumResult = ({ movies = [] }) => {
  return (
    <div>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </div>
  );
};

export default NumResult;
