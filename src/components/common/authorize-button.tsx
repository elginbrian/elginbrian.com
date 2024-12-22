import Link from "next/link";
import React from "react";
import { FaUserLock } from "react-icons/fa";

const AuthorizeButton: React.FC = () => {
  return (
    <Link href="/authorization">
      <div className="fixed bottom-8 sm:bottom-6 right-6 bg-white hover:bg-gray-300 text-black text-sm font-sans font-semibold py-2 px-2 rounded-full hidden sm:block">
        <FaUserLock size={18} />
      </div>
    </Link>
  );
};

export default AuthorizeButton;
