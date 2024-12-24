import { FaExpand } from "react-icons/fa6";

interface InfoBoxProps {
  title: string;
  description: React.ReactNode;
  onClick: () => void;
  isExpanded: boolean;
  className?: string;
  showTitleOnDesktop?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, onClick, isExpanded, className = "", showTitleOnDesktop = true }) => {
  return (
    <div onClick={onClick} className={`backdrop-blur-sm ${className} ${isExpanded ? "sm:pointer-events-none" : ""}`}>
      {showTitleOnDesktop && <h3 className="text-medium font-semibold sm:block">{title}</h3>}
      <div className="">{description}</div>
      <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
    </div>
  );
};

export default InfoBox;
