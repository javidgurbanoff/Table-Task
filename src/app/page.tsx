import ProjectTable from '@/components/ProjectTable/ProjectTable';

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Project Management</h1>
      <ProjectTable />
    </main>
  );
}
