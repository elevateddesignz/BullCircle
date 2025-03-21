import React, { useState } from 'react';
import { 
  Trophy, 
  ArrowUp, 
  ArrowDown, 
  Filter, 
  ChevronDown,
  ChevronRight,
  Clock,
  TrendingUp
} from 'lucide-react';

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  const [category, setCategory] = useState('all');

  return (
    <div className="space-y-6">
      {/* Leaderboard Header */}
      <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold flex items-center">
              <Trophy className="mr-2 text-yellow-400" size={24} />
              Top Traders Leaderboard
            </h2>
            <p className="text-gray-400 mt-1">Discover and follow the best traders on BullCircle</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <select 
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="appearance-none bg-gray-900 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full sm:w-auto"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="all-time">All Time</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none bg-gray-900 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full sm:w-auto"
              >
                <option value="all">All Categories</option>
                <option value="stocks">Stocks</option>
                <option value="crypto">Crypto</option>
                <option value="forex">Forex</option>
                <option value="options">Options</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Traders */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
        <div className="p-5 border-b border-gray-700">
          <h3 className="font-bold text-lg">Top Performers</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Trader</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Win Rate</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Profit</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Risk Level</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Followers</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="bg-gradient-to-r from-yellow-500/10 to-transparent">
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-black font-bold text-xs">1</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <span className="font-bold text-xs">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">Jane Doe</p>
                      <p className="text-xs text-gray-400">@janedoe</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="font-medium">87%</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center text-green-400">
                    <ArrowUp size={14} className="mr-1" />
                    <span>+245.8%</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-400">Medium</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span>12.4k</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                    Follow
                  </button>
                </td>
              </tr>
              
              <tr>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-black font-bold text-xs">2</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <span className="font-bold text-xs">MS</span>
                    </div>
                    <div>
                      <p className="font-medium">Michael Smith</p>
                      <p className="text-xs text-gray-400">@msmith</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="font-medium">82%</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center text-green-400">
                    <ArrowUp size={14} className="mr-1" />
                    <span>+198.3%</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-400">High</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span>9.8k</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                    Follow
                  </button>
                </td>
              </tr>
              
              <tr>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-700 text-black font-bold text-xs">3</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <span className="font-bold text-xs">SJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-xs text-gray-400">@sarahj</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="font-medium">79%</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center text-green-400">
                    <ArrowUp size={14} className="mr-1" />
                    <span>+176.5%</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-400">Low</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span>8.2k</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                    Follow
                  </button>
                </td>
              </tr>
              
              <tr>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-gray-300 font-bold text-xs">4</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mr-3">
                      <span className="font-bold text-xs">RW</span>
                    </div>
                    <div>
                      <p className="font-medium">Robert Williams</p>
                      <p className="text-xs text-gray-400">@robwilliams</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="font-medium">75%</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center text-green-400">
                    <ArrowUp size={14} className="mr-1" />
                    <span>+154.2%</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-400">Medium</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span>7.5k</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                    Follow
                  </button>
                </td>
              </tr>
              
              <tr>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-gray-300 font-bold text-xs">5</div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <span className="font-bold text-xs">EW</span>
                    </div>
                    <div>
                      <p className="font-medium">Emma Wilson</p>
                      <p className="text-xs text-gray-400">@emmawilson</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="font-medium">72%</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center text-green-400">
                    <ArrowUp size={14} className="mr-1" />
                    <span>+142.8%</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-400">Medium</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span>6.9k</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                    Follow
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-700 flex justify-between items-center">
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

      {/* Trending Traders & Win Streaks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Trending Traders</h3>
            <button className="text-cyan-400 text-sm flex items-center">
              View All <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">DT</span>
                </div>
                <div>
                  <p className="font-medium">David Thompson</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <TrendingUp size={12} className="mr-1 text-green-400" />
                    <span>+87% this week</span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">LM</span>
                </div>
                <div>
                  <p className="font-medium">Lisa Martinez</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <TrendingUp size={12} className="mr-1 text-green-400" />
                    <span>+65% this week</span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">JC</span>
                </div>
                <div>
                  <p className="font-medium">James Chen</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <TrendingUp size={12} className="mr-1 text-green-400" />
                    <span>+52% this week</span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">AK</span>
                </div>
                <div>
                  <p className="font-medium">Anna Kim</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <TrendingUp size={12} className="mr-1 text-green-400" />
                    <span>+48% this week</span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Longest Win Streaks</h3>
            <button className="text-cyan-400 text-sm flex items-center">
              View All <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">JD</span>
                </div>
                <div>
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-xs text-gray-400">@janedoe</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-cyan-400">24 Wins</p>
                <p className="text-xs text-gray-400">Current Streak</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">MS</span>
                </div>
                <div>
                  <p className="font-medium">Michael Smith</p>
                  <p className="text-xs text-gray-400">@msmith</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-cyan-400">19 Wins</p>
                <p className="text-xs text-gray-400">Current Streak</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">SJ</span>
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-xs text-gray-400">@sarahj</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-cyan-400">17 Wins</p>
                <p className="text-xs text-gray-400">Current Streak</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">RW</span>
                </div>
                <div>
                  <p className="font-medium">Robert Williams</p>
                  <p className="text-xs text-gray-400">@robwilliams</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-cyan-400">15 Wins</p>
                <p className="text-xs text-gray-400">Current Streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Competitions */}
      <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Active Trading Competitions</h3>
          <button className="text-cyan-400 text-sm flex items-center">
            View All <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <div className="p-4">
              <h4 className="font-bold mb-1">Summer Trading Challenge</h4>
              <p className="text-sm text-gray-400 mb-3">Compete for a prize pool of $25,000</p>
              
              <div className="flex justify-between text-sm mb-3">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-gray-400" />
                  <span>14 days left</span>
                </div>
                <span>1,245 participants</span>
              </div>
              
              <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium">
                Join Competition
              </button>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="p-4">
              <h4 className="font-bold mb-1">Crypto Trading Cup</h4>
              <p className="text-sm text-gray-400 mb-3">Test your skills in volatile markets</p>
              
              <div className="flex justify-between text-sm mb-3">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-gray-400" />
                  <span>7 days left</span>
                </div>
                <span>876 participants</span>
              </div>
              
              <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium">
                Join Competition
              </button>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <div className="h-3 bg-gradient-to-r from-green-500 to-emerald-400"></div>
            <div className="p-4">
              <h4 className="font-bold mb-1">Options Trading League</h4>
              <p className="text-sm text-gray-400 mb-3">Advanced strategies competition</p>
              
              <div className="flex justify-between text-sm mb-3">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-gray-400" />
                  <span>21 days left</span>
                </div>
                <span>543 participants</span>
              </div>
              
              <button className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg font-medium">
                Join Competition
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;