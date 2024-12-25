import { FaExpand } from "react-icons/fa6";

interface InfoBoxProps {
  title: string;
  description: React.ReactNode;
  onClick: () => void;
  isExpanded: boolean;
  className?: string;
  showTitleOnDesktop?: boolean;
  showTitleOnMobile?: boolean;
  showExpandedOnDesktop?: boolean;
  showExpandedOnMobile?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, onClick, isExpanded, className = "", showTitleOnDesktop = true, showTitleOnMobile = true, showExpandedOnDesktop = false, showExpandedOnMobile = true }) => {
  return (
    <div onClick={onClick} className={`backdrop-blur-sm ${className} ${isExpanded ? "sm:pointer-events-none" : ""}`}>
      {showTitleOnDesktop && <h3 className="text-medium font-semibold hidden sm:block">{title}</h3>}
      {showTitleOnMobile && <h3 className="text-medium font-semibold sm:hidden">{title}</h3>}
      <div className="">{description}</div>
      {showExpandedOnDesktop && <FaExpand className="block absolute bottom-4 right-4 cursor-pointer text-white" />}
      {showExpandedOnMobile && <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />}
    </div>
  );
};

export default InfoBox;
