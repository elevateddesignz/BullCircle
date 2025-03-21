import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Clock, 
  Award, 
  TrendingUp, 
  DollarSign, 
  Shield,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  BarChart3,
  MessageSquare,
  ThumbsUp,
  Share2
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-4"></div>
            <div>
              <h2 className="text-xl font-bold">Alex Morgan</h2>
              <div className="flex items-center mt-1">
                <span className="text-gray-400 text-sm">@alexmorgan</span>
                <span className="ml-2 px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Pro Trader</span>
              </div>
              <div className="flex items-center mt-2">
                <button className="text-xs bg-gray-700 px-2 py-1 rounded-md mr-2">Edit Profile</button>
                <button className="text-xs bg-gray-700 px-2 py-1 rounded-md">Share Profile</button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">245</p>
              <p className="text-xs text-gray-400">Trades</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">1.2k</p>
              <p className="text-xs text-gray-400">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">384</p>
              <p className="text-xs text-gray-400">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-4 text-center font-medium ${activeTab === 'overview' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`flex-1 py-4 text-center font-medium ${activeTab === 'portfolio' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-4 text-center font-medium ${activeTab === 'history' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
          >
            History
          </button>
          <button 
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 py-4 text-center font-medium ${activeTab === 'achievements' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
          >
            Achievements
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-4 text-center font-medium ${activeTab === 'settings' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
          >
            Settings
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="p-5 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Performance Summary */}
                <div className="bg-gray-900 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Performance Summary</h3>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm rounded-lg bg-gray-700 text-cyan-400">1M</button>
                      <button className="px-3 py-1 text-sm rounded-lg bg-gray-800">3M</button>
                      <button className="px-3 py-1 text-sm rounded-lg bg-gray-800">6M</button>
                      <button className="px-3 py-1 text-sm rounded-lg bg-gray-800">1Y</button>
                      <button className="px-3 py-1 text-sm rounded-lg bg-gray-800">All</button>
                    </div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="h-64 bg-gray-800 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <BarChart3 size={120} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-400/30"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[40%]">
                      <svg className="w-full h-full">
                        <path 
                          d="M0,100 Q50,80 100,90 T200,60 T300,40 T400,30 T500,10 T600,30 V100 H0 Z" 
                          fill="rgba(6, 182, 212, 0.1)"
                          stroke="rgba(6, 182, 212, 0.5)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-gray-400 text-xs">Win Rate</p>
                      <p className="font-medium">68%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Avg. Return</p>
                      <p className="font-medium">+12.4%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Best Trade</p>
                      <p className="font-medium">+45.8%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Worst Trade</p>
                      <p className="font-medium">-12.3%</p>
                    </div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-gray-900 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Recent Activity</h3>
                    <button className="text-cyan-400 text-sm flex items-center">
                      View All <ChevronRight size={16} />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <TrendingUp size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Bought 10 shares of AAPL</p>
                          <p className="text-xs text-gray-400">2h ago</p>
                        </div>
                        <p className="text-sm text-gray-400">$182.34 per share</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <TrendingUp size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Sold 5 shares of MSFT</p>
                          <p className="text-xs text-gray-400">5h ago</p>
                        </div>
                        <p className="text-sm text-gray-400">$378.92 per share</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <MessageSquare size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Posted a market analysis</p>
                          <p className="text-xs text-gray-400">8h ago</p>
                        </div>
                        <p className="text-sm text-gray-400">Tech sector outlook for Q3 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <Award size={18} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Earned an achievement</p>
                          <p className="text-xs text-gray-400">1d ago</p>
                        </div>
                        <p className="text-sm text-gray-400">10% Profit milestone reached</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-gray-900 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Recent Posts</h3>
                    <button className="text-cyan-400 text-sm flex items-center">
                      View All <ChevronRight size={16} />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-2"></div>
                          <div>
                            <p className="font-medium">Alex Morgan</p>
                            <p className="text-xs text-gray-400">2 days ago</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mb-3">Just closed my $NVDA position with a 15% gain! The semiconductor sector is showing strong momentum despite market volatility. Looking to re-enter on any pullbacks below $850. #TechStocks #Trading</p>
                      <div className="flex space-x-4 text-gray-400">
                        <button className="flex items-center text-sm">
                          <ThumbsUp size={14} className="mr-1" />
                          <span>45</span>
                        </button>
                        <button className="flex items-center text-sm">
                          <MessageSquare size={14} className="mr-1" />
                          <span>12</span>
                        </button>
                        <button className="flex items-center text-sm">
                          <Share2 size={14} className="mr-1" />
                          <span>3</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-2"></div>
                          <div>
                            <p className="font-medium">Alex Morgan</p>
                            <p className="text-xs text-gray-400">5 days ago</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mb-3">The Fed's latest comments suggest we might see rate cuts sooner than expected. This could be bullish for growth stocks and bearish for the dollar. I'm increasing my tech allocation and reducing financials. Thoughts? #FedWatch #MarketStrategy</p>
                      <div className="flex space-x-4 text-gray-400">
                        <button className="flex items-center text-sm">
                          <ThumbsUp size={14} className="mr-1" />
                          <span>78</span>
                        </button>
                        <button className="flex items-center text-sm">
                          <MessageSquare size={14} className="mr-1" />
                          <span>23</span>
                        </button>
                        <button className="flex items-center text-sm">
                          <Share2 size={14} className="mr-1" />
                          <span>7</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Stats */}
                <div className="bg-gray-900 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-4">Trading Stats</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Win Rate</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Risk Score</span>
                        <span>Medium</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Consistency</span>
                        <span>High</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Profit Factor</span>
                        <span>2.4</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Performance */}
                <div className="bg-gray-900 rounded-xl p-5">
                  <h3 className="font-bold text-lg mb-4">Performance</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                      <p className="text-gray-400 text-xs">1 Week</p>
                      <div className="flex items-center mt-1">
                        <p className="font-medium">+3.2%</p>
                        <ArrowUp size={14} className="ml-1 text-green-400" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                      <p className="text-gray-400 text-xs">1 Month</p>
                      <div className="flex items-center mt-1">
                        <p className="font-medium">+8.7%</p>
                        <ArrowUp size={14} className="ml-1 text-green-400" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                      <p className="text-gray-400 text-xs">6 Months</p>
                      <div className="flex items-center mt-1">
                        <p className="font-medium">+15.3%</p>
                        <ArrowUp size={14} className="ml-1 text-green-400" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                      <p className="text-gray-400 text-xs">1 Year</p>
                      <div className="flex items-center mt-1">
                        <p className="font-medium">+24.7%</p>
                        <ArrowUp size={14} className="ml-1 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'portfolio' && (
          <div className="p-5 space-y-6">
            <div className="bg-gray-900 rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Current Holdings</h3>
                <button className="text-cyan-400 text-sm">Export</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Symbol</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Shares</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Avg. Price</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Current Price</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Market Value</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Gain/Loss</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                            <span className="font-bold text-xs">AAPL</span>
                          </div>
                          <div>
                            <p className="font-medium">Apple Inc.</p>
                            <p className="text-xs text-gray-400">Technology</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>100</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$175.23</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$182.34</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$18,234.00</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center text-green-400">
                          <ArrowUp size={14} className="mr-1" />
                          <span>+4.06%</span>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                            <span className="font-bold text-xs">MSFT</span>
                          </div>
                          <div>
                            <p className="font-medium">Microsoft</p>
                            <p className="text-xs text-gray-400">Technology</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>50</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$350.45</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$378.92</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$18,946.00</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center text-green-400">
                          <ArrowUp size={14} className="mr-1" />
                          <span>+8.12%</span>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                            <span className="font-bold text-xs">TSLA</span>
                          </div>
                          <div>
                            <p className="font-medium">Tesla Inc.</p>
                            <p className="text-xs text-gray-400">Automotive</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>25</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$260.78</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$247.56</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$6,189.00</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center text-red-400">
                          <ArrowDown size={14} className="mr-1" />
                          <span>-5.07%</span>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mr-3">
                            <span className="font-bold text-xs">AMZN</span>
                          </div>
                          <div>
                            <p className="font-medium">Amazon</p>
                            <p className="text-xs text-gray-400">E-Commerce</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>30</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$165.45</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$178.23</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$5,346.90</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center text-green-400">
                          <ArrowUp size={14} className="mr-1" />
                          <span>+7.72%</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-4">Portfolio Allocation</h3>
                
                <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center relative">
                  {/* Placeholder for pie chart */}
                  <div className="w-40 h-40 rounded-full bg-gray-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bottom-0 left-0" style={{ 
                      background: 'conic-gradient(#3b82f6 0% 30%, #10b981 30% 55%, #8b5cf6 55% 70%, #ef4444 70% 100%)' 
                    }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Technology (30%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Finance (25%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm">Consumer (15%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm">Energy (30%)</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-5">
                <h3 className="font-bold text-lg mb-4">Portfolio Metrics</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Alpha</span>
                      <span>2.34</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Beta</span>
                      <span>1.12</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Sharpe Ratio</span>
                      <span>1.87</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Volatility</span>
                      <span>Medium</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Drawdown</span>
                      <span>-8.3%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div className="p-5 space-y-6">
            <div className="bg-gray-900 rounded-xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Trade History</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm rounded-lg bg-gray-700 text-cyan-400">All</button>
                  <button className="px-3 py-1 text-sm rounded-lg bg-gray-800">Buy</button>
                  <button className="px-3 py-1 text-sm rounded-lg bg-gray-800">Sell</button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Symbol</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Shares</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={14} className="text-gray-400 mr-2" />
                          <span>May 15, 2025</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                            <span className="font-bold text-xs">AAPL</span>
                          </div>
                          <span>Apple Inc.</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Buy</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>10</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$182.34</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$1,823.40</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={14} className="text-gray-400 mr-2" />
                          <span>May 12, 2025</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                            <span className="font-bold text-xs">MSFT</span>
                          </div>
                          <span>Microsoft</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">Sell</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>5</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$378.92</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$1,894.60</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={14} className="text-gray-400 mr-2" />
                          <span>May 10, 2025</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-2">
                            <span className="font-bold text-xs">TSLA</span>
                          </div>
                          <span>Tesla Inc.</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Buy</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>25</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$247.56</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$6,189.00</span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={14} className="text-gray-400 mr-2" />
                          <span>May 5, 2025</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mr-2">
                            <span className="font-bold text-xs">NFLX</span>
                          </div>
                          <span>Netflix</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">Sell</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>10</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$612.78</span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span>$6,127.80</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <button className="text-gray-400 hover:text-cyan-400">Previous</button>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full bg-cyan-400 text-gray-900 font-medium flex items-center justify-center">1</button>
                  <button className="w-8 h-8 rounded-full bg-gray-700 text-gray-300 font-medium flex items-center justify-center">2</button>
                  <button className="w-8 h-8 rounded-full bg-gray-700 text-gray-300 font-medium flex items-center justify-center">3</button>
                  <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                  <button className="w-8 h-8 rounded-full bg-gray-700 text-gray-300 font-medium flex items-center justify-center">10</button>
                </div>
                <button className="text-cyan-400">Next</button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'achievements' && (
          <div className="p-5 space-y-6">
            <div className="bg-gray-900 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-4">Achievements</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400">
                    <Award size={32} className="text-white" />
                  </div>
                  <h4 className="text-center font-bold mb-1">First Trade</h4>
                  <p className="text-center text-sm text-gray-400">Complete your first trade</p>
                  <div className="mt-3 text-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Completed</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                  <h4 className="text-center font-bold mb-1">10% Profit</h4>
                  <p className="text-center text-sm text-gray-400">Achieve 10% profit on your portfolio</p>
                  <div className="mt-3 text-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Completed</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400">
                    <User size={32} className="text-white" />
                  </div>
                  <h4 className="text-center font-bold mb-1">100 Followers</h4>
                  <p className="text-center text-sm text-gray-400">Reach 100 followers</p>
                  <div className="mt-3 text-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Completed</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50">
                    <Trophy size={32} className="text-white" />
                  </div>
                  <h4 className="text-center font-bold mb-1">Top 100 Trader</h4>
                  <p className="text-center text-sm text-gray-400">Reach the top 100 on the leaderboard</p>
                  <div className="mt-3 text-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-400">Locked</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50">
                    <DollarSign size={32} className="text-white" />
                  </div>
                  <h4 className="text-center font-bold mb-1">$100K Portfolio</h4>
                  <p className="text-center text-sm text-gray-400">Grow your portfolio to $100,000</p> <div className="mt-3 text-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-400">Locked</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h4 className="text-center font-bold mb-1">Risk Manager</h4>
                  <p className="text-center text-sm text-gray-400">Maintain a positive return for 30 days straight</p>
                  <div className="mt-3 text-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-400">Locked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="p-5 space-y-6">
            <div className="bg-gray-900 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-4">Account Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Display Name</label>
                  <input 
                    type="text" 
                    value="Alex Morgan"
                    className="w-full bg-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value="alex.morgan@example.com"
                    className="w-full bg-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Username</label>
                  <input 
                    type="text" 
                    value="alexmorgan"
                    className="w-full bg-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Password</label>
                  <input 
                    type="password" 
                    value="••••••••••••"
                    className="w-full bg-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-bold">
                  Save Changes
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-5">
              <h3 className="font-bold text-lg mb-4">Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Trade Confirmations</p>
                    <p className="text-sm text-gray-400">Receive notifications for trade confirmations</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Price Alerts</p>
                    <p className="text-sm text-gray-400">Receive notifications for price alerts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Followers</p>
                    <p className="text-sm text-gray-400">Receive notifications when someone follows you</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Market News</p>
                    <p className="text-sm text-gray-400">Receive notifications for important market news</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-400">Receive email notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                  </label>
                </div>
                
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-sm font-medium">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;