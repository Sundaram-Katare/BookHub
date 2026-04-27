import { Check, X } from "lucide-react";

function PassIndicator({ val, text }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      {val ? (
        <Check className="text-black w-4 h-4" />
      ) : (
        <X className="text-black w-4 h-4" />
      )}
      <span className={ "text-black"}>{text}</span>
    </li>
  );
}

export default PassIndicator;
