import ProjectCard from './ProjectCard';

export default function WorkSection() {
  const projects = [
    {
      title: "Katie's Canines",
      label: 'Real project',
      description: 'A pet care and dog walking website built for a local Long Island business.',
      link: 'https://katiescanines.com',
      isExternal: true
    },
    {
      title: "Grandma's Garden",
      label: 'Real project',
      description: 'A warm small-business website for a local garden and homemade goods brand.',
      link: 'https://anonymous7624.github.io/GrandmasGarden/',
      isExternal: true
    },
    {
      title: 'Local Service Business Website',
      label: 'Sample concept',
      description: 'A clean one-page layout for a home service business with services, photos, reviews, service areas, and a free estimate button.',
      link: '/sample-sites/exterior-cleaning',
      isExternal: false
    },
    {
      title: 'Restaurant and Menu Website',
      label: 'Sample concept',
      description: 'A mobile-friendly restaurant site with menu sections, hours, location, food photos, ordering info, and contact buttons.',
      link: '/sample-sites/restaurant',
      isExternal: false
    },
    {
      title: 'Pet Care Booking Website',
      label: 'Sample concept',
      description: 'A simple pet care site with services, available dates, towns served, meet and greet info, reviews, and a booking button.',
      link: '/sample-sites/pet-care',
      isExternal: false
    }
  ];

  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real projects and sample concepts
          </h2>
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
