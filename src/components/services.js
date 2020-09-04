import React from 'react';

export function Services() {
  return (
    <div className="text-center text-white bg-brand-black">
      <div className="grid grid-cols-3 gap-2">
        <div>
          <p>one</p>
          <h1>Domestic Services</h1>
          <p>Highly trained</p>
          <p>Quality Workmanship</p>
          <p>Clean & Tidy</p>
          <p>Great Communication</p>
        </div>
        <div>
          <p>two</p>
          <h1>Commercial Servies</h1>
          <p>Fault Finding & Repairs</p>
          <p>Emergency Light Maintenance</p>
        </div>
        <div>
          <p>three</p>
          <h1>Level 2 Servies</h1>
          <p>Cross Arm Replacements</p>
          <p>Overhead & Under Ground Services Mains</p>
          <p>Private Pole Installations & Replacement</p>
        </div>
      </div>
    </div>
  );
}
