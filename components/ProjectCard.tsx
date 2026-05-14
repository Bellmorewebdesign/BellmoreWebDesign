interface ProjectCardProps {
  title: string;
  label: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

export default function ProjectCard({ title, label, description, link, isExternal }: ProjectCardProps) {
  const isRealProject = label === 'Real Project';
  
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 hover:scale-105 border-[#E8DED0]">
      <div className={`h-56 bg-gradient-to-br ${isRealProject ? 'from-[#A8C3A0] to-[#8FBC8F]' : 'from-[#D8BFA3] to-[#C0A080]'} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        </div>
        <div className="text-center p-6 relative z-10">
          <div className={`w-20 h-20 ${isRealProject ? 'bg-white/90' : 'bg-white/80'} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
            {isRealProject ? (
              <svg className="w-10 h-10 text-[#6B8E6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-10 h-10 text-[#A08060]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
          </div>
          <div className={`inline-block text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full ${isRealProject ? 'bg-white text-[#6B8E6B]' : 'bg-white/90 text-[#A08060]'}`}>
            {label}
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#1E2A38] mb-3">{title}</h3>
        <p className="text-[#5F6B73] mb-6 leading-relaxed">{description}</p>
        <a
          href={link}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={`inline-block ${isRealProject ? 'bg-gradient-to-r from-[#A8C3A0] to-[#8FBC8F] hover:from-[#8FBC8F] hover:to-[#6B8E6B]' : 'bg-gradient-to-r from-[#6FA8DC] to-[#5a8ec4] hover:from-[#5a8ec4] hover:to-[#4a7eb4]'} text-white px-8 py-3 rounded-xl transition-all font-semibold shadow-md hover:shadow-lg`}
        >
          {isExternal ? 'View Project →' : 'Explore Concept →'}
        </a>
      </div>
    </div>
  );
}
