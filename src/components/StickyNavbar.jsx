import React from 'react';
import { ink } from 'react-router-dom';


function StickyNavbar() {
      return (
    <div className="w-full flex justify-start items-center bg-white p-4 z-10 sticky top-0 shadow-sm">
      <Link to="/">
        <h1 className="text-2xl font-bold text-blue-500 shine-text hover:text-blue-600 transition-colors">
          ReadRight
        </h1>
      </Link>
    </div>
  );
}

export default StickyNavbar;