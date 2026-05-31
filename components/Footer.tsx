'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Bellmore Web Design</h3>
            <p className="text-gray-400 text-sm">Clean websites for local businesses</p>
            <p className="text-gray-400 text-sm mt-2">Located in Nassau County, NY — serving all of NY</p>
            <p className="text-gray-400 text-sm mt-2">
              <a href="tel:+15167252774" className="hover:text-white transition-colors">516 725 2774</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('work');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-white transition-colors">
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('pricing');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Real Projects */}
          <div>
            <h4 className="font-semibold mb-4">Real Projects</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://katiescanines.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Katie's Canines
                </a>
              </li>
              <li>
                <a href="https://anonymous7624.github.io/GrandmasGarden/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Grandma's Garden
                </a>
              </li>
            </ul>
          </div>

          {/* Sample Sites */}
          <div>
            <h4 className="font-semibold mb-4">Sample Concepts</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sample-sites/exterior-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Exterior Cleaning Demo
                </Link>
              </li>
              <li>
                <Link href="/sample-sites/restaurant" className="text-gray-400 hover:text-white transition-colors">
                  Restaurant Demo
                </Link>
              </li>
              <li>
                <Link href="/sample-sites/pet-care" className="text-gray-400 hover:text-white transition-colors">
                  Pet Care Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bellmore Web Design. Built by Bellmore Web Design.</p>
        </div>
      </div>
    </footer>
  );
}
