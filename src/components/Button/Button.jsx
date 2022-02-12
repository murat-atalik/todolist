import React from 'react';

function Button({ callback, title, className, disabled }) {
  return (
    <button
      type="button"
      onClick={callback}
      className={className}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
