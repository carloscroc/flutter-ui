import React from 'react';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';
import FlutterDashboard1 from './components/FlutterDashboard1';
import FlutterDashboard2 from './components/FlutterDashboard2';
import FlutterDashboard3 from './components/FlutterDashboard3';

/**
 * ReSpace Design System Showcase
 *
 * Main App component displaying all dashboard variations
 * Each dashboard represents a different approach to the home screen
 */
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      {/* Focused view: render only Dashboard1 for testing */}
      <div>
        <Dashboard1 />
      </div>
    </div>
  );
}

export default App;
