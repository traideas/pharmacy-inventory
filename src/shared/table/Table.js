import React from 'react';

const Table = ({ children }) => {
  return (
    <div className=" overflow-x-auto">
      <div className=" min-w-full inline-block align-middle">
        <div className="overflow-hidden ">
          <div className=" h-[60vh] overflow-y-scroll">
            <table className="min-w-full divide-y divide-gray-200 border-t-2 border-gray-100">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
