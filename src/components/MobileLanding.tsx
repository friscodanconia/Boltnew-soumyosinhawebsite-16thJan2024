import { Link } from 'react-router-dom';
import { MapPin, Briefcase, FolderOpen, BookOpen, Mail } from 'lucide-react';

export function MobileLanding() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="space-y-3">
        {/* About Me Card */}
        <Link to="/about" className="block">
          <div className="bg-gray-900 rounded-lg p-4 transition-transform hover:translate-x-1">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                  <h2 className="text-lg font-medium leading-snug text-white">About Me</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mt-1 pl-8">I'm Soumyo, global marketing and technology executive</p>
              </div>
              <span className="text-gray-400 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Experience Card */}
        <Link to="/experience" className="block">
          <div className="bg-gray-900 rounded-lg p-4 transition-transform hover:translate-x-1">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <h2 className="text-lg font-medium leading-snug text-white">Experience</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mt-1 pl-8">Worked across top technology and media firms</p>
              </div>
              <span className="text-gray-400 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Projects Card */}
        <Link to="/projects" className="block">
          <div className="bg-gray-900 rounded-lg p-4 transition-transform hover:translate-x-1">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <FolderOpen className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                  <h2 className="text-lg font-medium leading-snug text-white">Projects</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mt-1 pl-8">What I find interesting to tinker around</p>
              </div>
              <span className="text-gray-400 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Reading Card */}
        <Link to="/reading" className="block">
          <div className="bg-gray-900 rounded-lg p-4 transition-transform hover:translate-x-1">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  <h2 className="text-lg font-medium leading-snug text-white">Reading</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mt-1 pl-8">My reading list</p>
              </div>
              <span className="text-gray-400 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Contact Card */}
        <Link to="/contact" className="block">
          <div className="bg-gray-900 rounded-lg p-4 transition-transform hover:translate-x-1">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <h2 className="text-lg font-medium leading-snug text-white">Contact</h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mt-1 pl-8">Ways to reach me</p>
              </div>
              <span className="text-gray-400 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
