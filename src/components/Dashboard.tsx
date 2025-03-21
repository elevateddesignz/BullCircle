import React from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Portfolio Value</p>
              <h3 className="text-2xl font-bold mt-1">$124,567.89</h3>
            </div>
            <div className="flex items-center text-green-400">
              <ArrowUp size={16} />
              <span className="ml-1 text-sm">12.4%</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Daily Change</span>
              <span className="text-green-400">+$1,234.56</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Available Cash</p>
              <h3 className="text-2xl font-bold mt-1">$45,678.90</h3>
            </div>
            <div className="p-2 rounded-full bg-gray-700">
              <DollarSign size={16} className="text-cyan-400" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Buying Power</span>
              <span>$91,357.80</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Total P&L</p>
              <h3 className="text-2xl font-bold mt-1">$24,567.89</h3>
            </div>
            <div className="flex items-center text-green-400">
              <TrendingUp size={16} />
              <span className="ml-1 text-sm">24.7%</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">All Time</span>
              <span className="text-green-400">+$24,567.89</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Overview & Portfolio Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Portfolio Performance</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm rounded-lg bg-gray-700 text-cyan-400">1D</button>
              <button className="px-3 py-1 text-sm rounded-lg bg-gray-900">1W</button>
              <button className="px-3 py-1 text-sm rounded-lg bg-gray-900">1M</button>
              <button className="px-3 py-1 text-sm rounded-lg bg-gray-900">1Y</button>
              <button className="px-3 py-1 text-sm rounded-lg bg-gray-900">All</button>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-64 bg-gray-900 rounded-lg overflow-hidden relative">
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
              <p className="text-gray-400 text-xs">Open</p>
              <p className="font-medium">$121,234.56</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">High</p>
              <p className="font-medium">$124,567.89</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Low</p>
              <p className="font-medium">$120,987.65</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Volume</p>
              <p className="font-medium">$1.2M</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Market Overview</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">S&P</span>
                </div>
                <div>
                  <p className="font-medium">S&P 500</p>
                  <p className="text-xs text-gray-400">US Market</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">4,782.45</p>
                <p className="text-xs text-green-400">+1.23%</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">DOW</span>
                </div>
                <div>
                  <p className="font-medium">Dow Jones</p>
                  <p className="text-xs text-gray-400">US Market</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">36,124.23</p>
                <p className="text-xs text-green-400">+0.89%</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">NAS</span>
                </div>
                <div>
                  <p className="font-medium">NASDAQ</p>
                  <p className="text-xs text-gray-400">US Market</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">14,897.12</p>
                <p className="text-xs text-red-400">-0.34%</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-xs">BTC</span>
                </div>
                <div>
                  <p className="font-medium">Bitcoin</p>
                  <p className="text-xs text-gray-400">Crypto</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$42,567.89</p>
                <p className="text-xs text-green-400">+2.45%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Trades & Watchlist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Recent Trades</h3>
            <button className="text-cyan-400 text-sm flex items-center">
              View All <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold">AAPL</span>
                </div>
                <div>
                  <p className="font-medium">Apple Inc.</p>
                  <p className="text-xs text-gray-400">100 shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-green-400">Buy</p>
                <p className="text-sm">$182.34</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <span className="font-bold">MSFT</span>
                </div>
                <div>
                  <p className="font-medium">Microsoft</p>
                  <p className="text-xs text-gray-400">50 shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-red-400">Sell</p>
                <p className="text-sm">$378.92</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                  <span className="font-bold">TSLA</span>
                </div>
                <div>
                  <p className="font-medium">Tesla Inc.</p>
                  <p className="text-xs text-gray-400">25 shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-green-400">Buy</p>
                <p className="text-sm">$247.56</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                  <span className="font-bold">NFLX</span>
                </div>
                <div>
                  <p className="font-medium">Netflix</p>
                  <p className="text-xs text-gray-400">10 shares</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-green-400">Buy</p>
                <p className="text-sm">$612.78</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Watchlist</h3>
            <button className="text-cyan-400 text-sm flex items-center">
              Edit <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold">AMZN</span>
                </div>
                <div>
                  <p className="font-medium">Amazon</p>
                  <p className="text-xs text-gray-400">E-Commerce</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$178.23</p>
                <p className="text-xs text-green-400">+2.34%</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <span className="font-bold">NVDA</span>
                </div>
                <div>
                  <p className="font-medium">NVIDIA</p>
                  <p className="text-xs text-gray-400">Technology</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$892.45</p>
                <p className="text-xs text-green-400">+4.12%</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                  <span className="font-bold">META</span>
                </div>
                <div>
                  <p className="font-medium">Meta</p>
                  <p className="text-xs text-gray-400">Social Media</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$478.91</p>
                <p className="text-xs text-red-400">-1.23%</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">
                  <span className="font-bold">GOOG</span>
                </div>
                <div>
                  <p className="font-medium">Alphabet</p>
                  <p className="text-xs text-gray-400">Technology</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$142.56</p>
                <p className="text-xs text-green-400">+0.78%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market News */}
      <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Market News</h3>
          <button className="text-cyan-400 text-sm flex items-center">
            More News <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Stock market" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-cyan-500 text-xs font-bold px-2 py-1 rounded">
                MARKETS
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2">Fed Signals Potential Rate Cuts as Inflation Cools</h4>
              <p className="text-sm text-gray-400 mb-3">The Federal Reserve indicated it may begin cutting interest rates soon as inflation shows signs of easing...</p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>2 hours ago</span>
                </div>
                <span>Bloomberg</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Tech company" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-purple-500 text-xs font-bold px-2 py-1 rounded">
                TECH
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2">Apple Unveils New AI Features for iPhone 16</h4>
              <p className="text-sm text-gray-400 mb-3">Apple's latest iPhone will include advanced AI capabilities, potentially reshaping the smartphone market...</p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>5 hours ago</span>
                </div>
                <span>TechCrunch</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Crypto trading" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-yellow-500 text-xs font-bold px-2 py-1 rounded">
                CRYPTO
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2">Bitcoin Surges Past $45K on ETF Approval News</h4>
              <p className="text-sm text-gray-400 mb-3">Bitcoin prices jumped after regulators approved several spot Bitcoin ETFs, opening the door to institutional investors...</p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>12 hours ago</span>
                </div>
                <span>CoinDesk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;