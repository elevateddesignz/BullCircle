import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart3, 
  Trophy, 
  User, 
  Menu, 
  X, 
  Bell, 
  Search,
  DollarSign,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  ThumbsUp,
  Share2,
  ChevronRight
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import SocialFeed from './components/SocialFeed';
import TradePanel from './components/TradePanel';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import Logo from './components/Logo';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'social':
        return <SocialFeed />;
      case 'trade':
        return <TradePanel />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-gray-800 p-4 flex justify-between items-center">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="text-cyan-400"
        >
          <Menu size={24} />
        </button>
        <Logo size="small" />
        <div className="flex items-center space-x-3">
          <Bell size={20} className="text-gray-400" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800 p-4 h-screen sticky top-0">
        <div className="flex items-center mb-8">
          <Logo size="large" />
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('social')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'social' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
              >
                <TrendingUp size={20} />
                <span>Social Feed</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('trade')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'trade' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
              >
                <BarChart3 size={20} />
                <span>Trade</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('leaderboard')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'leaderboard' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
              >
                <Trophy size={20} />
                <span>Leaderboard</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
              >
                <User size={20} />
                <span>Profile</span>
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 p-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <div>
              <p className="font-medium">Alex Morgan</p>
              <p className="text-sm text-gray-400">Pro Trader</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-gray-800 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <Logo size="medium" />
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} className="text-gray-400" />
              </button>
            </div>
            
            <nav className="flex-1">
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab('dashboard');
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
                  >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab('social');
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'social' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
                  >
                    <TrendingUp size={20} />
                    <span>Social Feed</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab('trade');
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'trade' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
                  >
                    <BarChart3 size={20} />
                    <span>Trade</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab('leaderboard');
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'leaderboard' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
                  >
                    <Trophy size={20} />
                    <span>Leaderboard</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActiveTab('profile');
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-gray-700 text-cyan-400' : 'hover:bg-gray-700'}`}
                  >
                    <User size={20} />
                    <span>Profile</span>
                  </button>
                </li>
              </ul>
            </nav>
            
            <div className="mt-auto pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-3 p-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <div>
                  <p className="font-medium">Alex Morgan</p>
                  <p className="text-sm text-gray-400">Pro Trader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around p-2 z-10">
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`p-2 rounded-lg flex flex-col items-center ${activeTab === 'dashboard' ? 'text-cyan-400' : 'text-gray-400'}`}
        >
          <LayoutDashboard size={20} />
          <span className="text-xs mt-1">Dashboard</span>
        </button>
        <button 
          onClick={() => setActiveTab('social')}
          className={`p-2 rounded-lg flex flex-col items-center ${activeTab === 'social' ? 'text-cyan-400' : 'text-gray-400'}`}
        >
          <TrendingUp size={20} />
          <span className="text-xs mt-1">Social</span>
        </button>
        <button 
          onClick={() => setActiveTab('trade')}
          className={`p-2 rounded-lg flex flex-col items-center ${activeTab === 'trade' ? 'text-cyan-400' : 'text-gray-400'}`}
        >
          <BarChart3 size={20} />
          <span className="text-xs mt-1">Trade</span>
        </button>
        <button 
          onClick={() => setActiveTab('leaderboard')}
          className={`p-2 rounded-lg flex flex-col items-center ${activeTab === 'leaderboard' ? 'text-cyan-400' : 'text-gray-400'}`}
        >
          <Trophy size={20} />
          <span className="text-xs mt-1">Leaders</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`p-2 rounded-lg flex flex-col items-center ${activeTab === 'profile' ? 'text-cyan-400' : 'text-gray-400'}`}
        >
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 pb-20 md:pb-6 overflow-auto">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <button className="relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
            </button>
          </div>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
}

export default App;