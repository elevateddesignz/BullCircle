import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  ArrowUp, 
  ArrowDown,
  AlertCircle,
  Info,
  ChevronDown,
  Check
} from 'lucide-react';

const TradePanel = () => {
  const [orderType, setOrderType] = useState('market');
  const [chartType, setChartType] = useState('candle');
  const [timeframe, setTimeframe] = useState('1D');
  const [quantity, setQuantity] = useState(10);
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {/* Stock Info */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="font-bold">AAPL</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Apple Inc.</h2>
                  <p className="text-gray-400">NASDAQ: AAPL</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div>
                <p className="text-2xl font-bold">$182.34</p>
                <div className="flex items-center text-green-400">
                  <ArrowUp size={16} />
                  <span className="ml-1">$3.45 (1.93%)</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm">Add to Watchlist</button>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <button 
                onClick={() => setChartType('candle')}
                className={`px-3 py-1 text-sm rounded-lg ${chartType === 'candle' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                Candlestick
              </button>
              <button 
                onClick={() => setChartType('line')}
                className={`px-3 py-1 text-sm rounded-lg ${chartType === 'line' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                Line
              </button>
              <button 
                onClick={() => setChartType('volume')}
                className={`px-3 py-1 text-sm rounded-lg ${chartType === 'volume' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                Volume
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setTimeframe('1D')}
                className={`px-3 py-1 text-sm rounded-lg ${timeframe === '1D' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                1D
              </button>
              <button 
                onClick={() => setTimeframe('1W')}
                className={`px-3 py-1 text-sm rounded-lg ${timeframe === '1W' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                1W
              </button>
              <button 
                onClick={() => setTimeframe('1M')}
                className={`px-3 py-1 text-sm rounded-lg ${timeframe === '1M' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                1M
              </button>
              <button 
                onClick={() => setTimeframe('3M')}
                className={`px-3 py-1 text-sm rounded-lg ${timeframe === '3M' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                3M
              </button>
              <button 
                onClick={() => setTimeframe('1Y')}
                className={`px-3 py-1 text-sm rounded-lg ${timeframe === '1Y' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-900'}`}
              >
                1Y
              </button>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-96 bg-gray-900 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <BarChart3 size={120} />
            </div>
            
            {chartType === 'candle' && (
              <div className="absolute inset-0 p-4">
                <div className="grid grid-cols-6 h-full">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                      <div 
                        className={`w-4 ${Math.random() > 0.5 ? 'bg-green-500' : 'bg-red-500'}`} 
                        style={{ height: `${Math.random() * 40 + 10}%` }}
                      ></div>
                      <div 
                        className="w-[1px] bg-gray-600" 
                        style={{ height: `${Math.random() * 20 + 5}%` }}
                      ></div>
                      <div 
                        className="w-[1px] bg-gray-600" 
                        style={{ height: `${Math.random() * 20 + 5}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {chartType === 'line' && (
              <div className="absolute bottom-0 left-0 w-full h-[60%]">
                <svg className="w-full h-full">
                  <path 
                    d="M0,100 Q50,80 100,90 T200,60 T300,40 T400,30 T500,10 T600,30" 
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.8)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}
            
            {chartType === 'volume' && (
              <div className="absolute inset-0 p-4">
                <div className="grid grid-cols-12 h-full items-end gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-cyan-500/30"
                      style={{ height: `${Math.random() * 80 + 10}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-400">
              <span>9:30 AM</span>
              <span>11:00 AM</span>
              <span>12:30 PM</span>
              <span>2:00 PM</span>
              <span>3:30 PM</span>
            </div>
            
            <div className="absolute top-4 right-4 bottom-4 flex flex-col justify-between items-end text-xs text-gray-400">
              <span>$190</span>
              <span>$185</span>
              <span>$180</span>
              <span>$175</span>
              <span>$170</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div>
              <p className="text-gray-400 text-xs">Open</p>
              <p className="font-medium">$179.21</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">High</p>
              <p className="font-medium">$183.56</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Low</p>
              <p className="font-medium">$178.92</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Volume</p>
              <p className="font-medium">42.3M</p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Company Overview</h3>
          
          <p className="text-sm text-gray-300 mb-4">
            Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-gray-400 text-xs">Market Cap</p>
              <p className="font-medium">$2.85T</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">P/E Ratio</p>
              <p className="font-medium">30.24</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Dividend Yield</p>
              <p className="font-medium">0.51%</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">52-Week Range</p>
              <p className="font-medium">$142.35 - $187.90</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Order Form */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Place Order</h3>
          
          <div className="space-y-4">
            <div className="flex space-x-2">
              <button 
                className="flex-1 py-2 rounded-lg font-medium bg-green-500/20 text-green-400 border border-green-500/30"
              >
                Buy
              </button>
              <button 
                className="flex-1 py-2 rounded-lg font-medium bg-gray-900 text-gray-400 border border-gray-700"
              >
                Sell
              </button>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Order Type</label>
              <div className="relative">
                <select 
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="w-full bg-gray-900 rounded-lg p-3 appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="market">Market Order</option>
                  <option value="limit">Limit Order</option>
                  <option value="stop">Stop Order</option>
                  <option value="stop_limit">Stop Limit Order</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3.5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">Quantity</label>
              <div className="flex">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 bg-gray-900 rounded-l-lg border-r border-gray-700"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="flex-1 bg-gray-900 text-center focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 bg-gray-900 rounded-r-lg border-l border-gray-700"
                >
                  +
                </button>
              </div>
            </div>
            
            {orderType !== 'market' && (
              <div>
                <label className="block text-sm text-gray-400 mb-1">Price ($)</label>
                <input 
                  type="number" 
                  placeholder="Enter price"
                  className="w-full bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            )}
            
            <div className="pt-2 border-t border-gray-700">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Estimated Cost</span>
                <span className="font-medium">${(182.34 * quantity).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Commission</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(182.34 * quantity).toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={() => setShowConfirmation(true)}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-cyan-400 rounded-lg font-bold"
            >
              Buy {quantity} Shares
            </button>
            
            <p className="text-xs text-gray-400 flex items-start">
              <Info size={12} className="mr-1 mt-0.5 flex-shrink-0" />
              Market orders execute immediately at the best available price. Your final execution price may differ from the current quote due to market fluctuations.
            </p>
          </div>
        </div>

        {/* Order Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl border border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg">Confirm Order</h3>
                <button 
                  onClick={() => setShowConfirmation(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Action</span>
                    <span className="font-medium text-green-400">Buy</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Symbol</span>
                    <span className="font-medium">AAPL</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Quantity</span>
                    <span className="font-medium">{quantity} shares</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Order Type</span>
                    <span className="font-medium">Market Order</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Estimated Price</span>
                    <span className="font-medium">$182.34</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-700">
                    <span>Total Cost</span>
                    <span>${(182.34 * quantity).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                  <AlertCircle size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-200">
                    Market orders execute immediately at the best available price. The final execution price may differ from the estimated price.
                  </p>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setShowConfirmation(false)}
                    className="flex-1 py-3 bg-gray-700 rounded-lg font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      // Handle order submission
                      setShowConfirmation(false);
                      // Show success message
                    }}
                    className="flex-1 py-3 bg-gradient-to-r from-green-500 to-cyan-400 rounded-lg font-bold"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Orders */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Recent Orders</h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">MSFT</span>
                <span className="text-green-400 font-medium">Buy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">25 shares @ $378.92</span>
                <span className="text-gray-400">Filled</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">TSLA</span>
                <span className="text-red-400 font-medium">Sell</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">10 shares @ $245.32</span>
                <span className="text-gray-400">Filled</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">AMZN</span>
                <span className="text-green-400 font-medium">Buy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">5 shares @ $178.23</span>
                <span className="text-gray-400">Filled</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">NVDA</span>
                <span className="text-green-400 font-medium">Buy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">3 shares @ $892.45</span>
                <span className="text-yellow-400">Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Ideas */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Trading Ideas</h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">AAPL</span>
                <div className="flex items-center text-green-400">
                  <TrendingUp size={14} className="mr-1" />
                  <span>Strong Buy</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Upcoming product launch could drive significant growth.
              </p>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">MSFT</span>
                <div className="flex items-center text-green-400">
                  <TrendingUp size={14} className="mr-1" />
                  <span>Buy</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Cloud division showing strong performance in Q2.
              </p>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">META</span>
                <div className="flex items-center text-yellow-400">
                  <TrendingUp size={14} className="mr-1" />
                  <span>Hold</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Regulatory concerns may impact short-term performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePanel;