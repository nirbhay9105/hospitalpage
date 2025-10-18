import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void; // ✅ Add this
  className?: string;   // (Optional: if you're using custom styling)
};

const Button = ({ children, onClick, className = '' }: Props) => {
  return (
    <button
      onClick={onClick} // ✅ Hook up the click handler
      className={`px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
