import React from 'react';

const LanguageToggle = ({handleToggle, language}) => {

  return (
    <label className="flex justify-between items-center px-4 py-4 bg-[#e3f2fd] border rounded-lg">
        <p className='text-md font-semibold '>{language ? 'ভাষা' : 'Language'}</p>
      <div className="relative  cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleToggle}
          checked={language}
        />
        <div
          className={`w-20 h-8 bg-gray-300 rounded-full border border-gray-900 peer-checked:after:translate-x-[44px] peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-black`}
        ></div>
        <span className={`absolute inset-0 flex items-center justify-center transition-transform transform ${language ? 'translate-x-0' : 'translate-x-0'}`}>
          {language ? <span className='text-white mr-5'>বাংলা</span> : <span className='text-black font-bold ml-4'>EN</span> }
        </span>
      </div>
    </label>
  );
};

export default LanguageToggle;
