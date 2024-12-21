import React, { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div style={{ position: "absolute", top: "24px", left: "24px", color: "#fff", fontSize: "18px", fontFamily: "Arial, sans-serif" }}>{time}</div>;
};

export default Clock;
