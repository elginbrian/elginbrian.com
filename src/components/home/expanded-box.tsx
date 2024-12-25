import { FaX } from "react-icons/fa6";

interface ExpandedBoxProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

const ExpandedBox: React.FC<ExpandedBoxProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full min-h-screen grid gap-4 pl-6 pr-6 pb-28 pt-36 sm:pl-12 sm:pb-12 sm:pt-28 sm:pr-32 box-border">
      <div className="relative bg-black border-gray-700 border-2 text-white flex flex-col items-center justify-center rounded-lg">
        <FaX className="absolute top-4 right-4 cursor-pointer text-white" onClick={onClose} />
        <div className="p-4 w-full sm:w-3/4">
          <div className="text-base mt-2 sm:mt-8">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedBox;
