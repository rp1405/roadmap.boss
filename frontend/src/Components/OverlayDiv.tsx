import React from "react";
import { X } from "lucide-react";

interface DetailPageProps {
  heading: string;
  paragraph: string;
  onClose: () => void;
}

const OverlayDiv: React.FC<DetailPageProps> = ({
  onClose,
  heading,
  paragraph,
}) => {
  return (
    <div>
      <div className="fixed top-0 right-0 w-full md:w-2/5 h-full bg-white z-50 overflow-y-auto">
        {/* Your overlay content here */}
        <button className="absolute right-5 top-5" onClick={onClose}>
          <X />
        </button>
        <div className="mt-20 ml-4">
          <h1 className="font-bold text-5xl">{heading}</h1>
          <h1 className="font-semibold text-xl mt-10">{paragraph}</h1>
        </div>
      </div>
    </div>
  );
};

export default OverlayDiv;
