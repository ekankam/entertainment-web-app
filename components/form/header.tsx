import React from "react";

function Header({ header }: { header: string }) {
  return (
    <span className="text-brand-white text-heading-lg mb-10">{header}</span>
  );
}

export default Header;
