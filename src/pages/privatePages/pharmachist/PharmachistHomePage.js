import React from 'react';
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    routeName: 'pharma/medicine-list',
    color: '#C9DAF8',
    title: 'Medicine List',
  },
  {
    id: 2,
    routeName: 'pharma/patient-list',
    color: '#f4cccc',
    title: 'Patient List',
  },
];

const PharmachistHomePage = () => {
  return (
    <div className="container-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-5 gap-y-3 mb-5  mt-5">
        {cardData.map((item, index) => (
          <Link to={`/${item.routeName}`}>
            <div
              key={index}
              className="max-w-lg py-5 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 shadow-md transform transition-transform hover:scale-105"
              style={{ backgroundColor: item.color }}
            >
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                {/* <p className="font-mono text-gray-700">{item.des}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PharmachistHomePage;
