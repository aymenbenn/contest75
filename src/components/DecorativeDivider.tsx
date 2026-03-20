import React from 'react';
export function DecorativeDivider() {
  return (
    <div
      className="flex items-center justify-center w-full max-w-md mx-auto my-12"
      aria-hidden="true">
      
      <div className="h-px bg-brand-teal flex-1"></div>
      <div className="mx-4 flex space-x-1">
        <div className="w-2 h-2 rounded-full bg-hot-pink"></div>
        <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
        <div className="w-2 h-2 rounded-full bg-hot-pink"></div>
      </div>
      <div className="h-px bg-brand-teal flex-1"></div>
    </div>);

}