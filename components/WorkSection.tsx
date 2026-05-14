import ProjectCard from './ProjectCard';

export default function WorkSection() {
  const projects = [
    {
      title: "Katie's Canines",
      label: 'Real Project',
      description: 'A pet care and dog walking website built for a local Long Island business.',
      link: 'https://katiescanines.com',
      isExternal: true
    },
    {
      title: "Grandma's Garden",
      label: 'Real Project',
      description: 'A warm small-business website for a local garden and homemade goods brand.',
      link: 'https://anonymous7624.github.io/GrandmasGarden/',
      isExternal: true
    },
    {
      title: 'South Shore Shine',
      label: 'Sample Concept',
      description: 'Pressure washing sample with fresh, water-inspired design. Clean, energetic, and mobile-friendly.',
      link: '/sample-sites/exterior-cleaning',
      isExternal: false
    },
    {
      title: 'Main Street Chicken Co.',
      label: 'Sample Concept',
      description: 'Restaurant sample with bold, food-focused design. Warm colors, menu showcase, and local flavor.',
      link: '/sample-sites/restaurant',
      isExternal: false
    },
    {
      title: 'Harbor Paws Pet Care',
      label: 'Sample Concept',
      description: 'Pet care sample with calm, trustworthy design. Soft colors, personal care focus, and family-friendly.',
      link: '/sample-sites/pet-care',
      isExternal: false
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF7] to-[#FAF7F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6">
            Real Projects & Sample Concepts
          </h2>
          <p className="text-xl text-[#5F6B73] max-w-3xl mx-auto">
            See completed websites for real clients and explore sample concepts that show what different industries could look like
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              label={project.label}
              description={project.description}
              link={project.link}
              isExternal={project.isExternal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
