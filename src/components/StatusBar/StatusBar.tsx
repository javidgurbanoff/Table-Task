import React from "react";

interface StatusBarProps {
    percentage: number;
  }
  
  const StatusBar: React.FC<StatusBarProps> = ({ percentage }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        />
        <span className="text-xs text-gray-600">{percentage}% Completed</span>
      </div>
    );
  };
  
  export default StatusBar;
  