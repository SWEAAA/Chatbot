import React from 'react';
import { BellIcon, ShieldCheckIcon, MapIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GuardianBot</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Report Issue
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your Neighborhood's</span>
              <span className="block text-blue-600">First Responder</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering communities with real-time emergency response and crisis management.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Report Issue
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Visit Community Hub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">How GuardianBot Works</h2>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <BellIcon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Real-time Alerts</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    Instant notifications for emergencies in your area
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <MapIcon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Live Incident Map</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    Track and respond to incidents in real-time
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <ChatBubbleLeftRightIcon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-6 text-xl font-medium text-gray-900">24/7 Support</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    AI-powered chatbot for immediate assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">&copy; 2024 GuardianBot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;