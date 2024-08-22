import React from 'react';
import { Project } from '@/types/types';
import ProjectRow from '@/components/ProjectRow/ProjectRow';

interface Props {
  projects: Project[];
}

const ProjectTable: React.FC<Props> = ({ projects }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-4 px-6 text-left">Project Name</th>
            <th className="py-4 px-6">Description</th>
            <th className="py-4 px-6">Team</th>
            <th className="py-4 px-6">Assigned Date</th>
            <th className="py-4 px-6">Due Date</th>
            <th className="py-4 px-6">Status</th>
            <th className="py-4 px-6">Priority</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
