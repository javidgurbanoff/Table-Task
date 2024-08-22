import React from "react";

interface PriorityIndicatorProps {
    priority: 'High' | 'Medium' | 'Low';
  }
  
  const PriorityIndicator: React.FC<PriorityIndicatorProps> = ({ priority }) => {
    let color = '';
  
    switch (priority) {
      case 'High':
        color = 'text-red-600 bg-red-100';
        break;
      case 'Medium':
        color = 'text-yellow-600 bg-yellow-100';
        break;
      case 'Low':
        color = 'text-green-600 bg-green-100';
        break;
    }
  
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
        {priority}
      </span>
    );
  };
  
  export default PriorityIndicator;
  