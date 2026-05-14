interface ProjectCardProps {
  title: string;
  label: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

export default function ProjectCard({ title, label, description, link, isExternal }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{label}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isExternal ? 'View Project' : 'View Concept'}
        </a>
      </div>
    </div>
  );
}
