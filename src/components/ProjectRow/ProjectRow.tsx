import React from 'react';
import { Project } from '@/types/types';

interface Props {
  project: Project;
}

const ProjectRow: React.FC<Props> = ({ project }) => {
  return (
    <tr className="border-b">
      <td className="py-4 px-6 text-left bg-red-500">{project.name}</td>
      <td className="py-4 px-6">{project.description}</td>
      <td className="py-4 px-6">{project.team.length} members</td>
      <td className="py-4 px-6">{project.assignedDate}</td>
      <td className="py-4 px-6">{project.dueDate}</td>
      <td className="py-4 px-6">
        <div className="relative w-full h-2 bg-gray-200">
          <div
            className="absolute left-0 top-0 h-2 bg-blue-500"
            style={{ width: `${project.completed}%` }}
          ></div>
        </div>
        <span>{project.completed}% Completed</span>
      </td>
      <td className="py-4 px-6">
        <span
          className={`${
            project.priority === 'High'
              ? 'text-red-600'
              : project.priority === 'Medium'
              ? 'text-yellow-600'
              : 'text-green-600'
          } font-semibold`}
        >
          {project.priority}
        </span>
      </td>
    </tr>
  );
};

export default ProjectRow;
