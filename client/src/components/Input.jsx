import { forwardRef } from "react";
const Input = (
  { label, hide, setHide, type = "text", id, className = "", ...props },
  ref
) => {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
      id={id}
        type={type}
        className={`w-full p-3 rounded ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default forwardRef(Input);
