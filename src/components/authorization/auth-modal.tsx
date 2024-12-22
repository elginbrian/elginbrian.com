import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
}

export default function AuthModal({ isOpen, onClose, onSubmit }: ModalProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [inputs, setInputs] = useState(["", "", "", ""]);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    } else {
      setTimeout(() => setShowAnimation(false), 300);
    }
  }, [isOpen]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 5) return;
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && inputs[index] === "" && index > 0) {
      const previousInput = document.getElementById(`input-${index - 1}`) as HTMLInputElement;
      previousInput.focus();
    }
    if (e.key !== "Backspace" && inputs[index].length === 5 && index < 3) {
      const nextInput = document.getElementById(`input-${index + 1}`) as HTMLInputElement;
      nextInput.focus();
    }
  };

  const handleSubmit = () => {
    const authCode = inputs.join("");
    onSubmit(authCode);
  };

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
      <div className={`relative bg-black bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 border-opacity-20 rounded-2xl mx-6 p-8 max-w-2xl w-full z-10 transition-transform duration-300 ${isOpen ? "scale-100" : "scale-98"}`}>
        <div className="text-white">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-lg sm:text-xl font-bold text-center">Access Control</h1>
            <p className="text-sm text-center font-[family-name:var(--font-geist-mono)]">Please enter the 20-digit authorization code to access the admin dashboard.</p>

            <div className="flex items-center gap-2">
              {inputs.map((input, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={`input-${index}`}
                    type="text"
                    maxLength={5}
                    value={input}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                    className="w-16 sm:w-20 px-4 py-2 text-black border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  {index < 3 && <div className="w-2 h-0.5 bg-gray-400 ml-2"></div>}
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
