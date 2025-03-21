import React, { useState } from 'react';
import { 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  TrendingUp, 
  BarChart3,
  Clock,
  User,
  Search
} from 'lucide-react';

const SocialFeed = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {/* Post Creation */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="flex space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Share your trading insights..." 
                className="w-full bg-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <div className="flex justify-between mt-3">
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-cyan-400">
                    <BarChart3 size={18} />
                  </button>
                  <button className="p-2 rounded-lg bg-gray-900 text-gray-400 hover:text-cyan-400">
                    <TrendingUp size={18} />
                  </button>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed Tabs */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-700">
            <button 
              onClick={() => setActiveTab('trending')}
              className={`flex-1 py-4 text-center font-medium ${activeTab === 'trending' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
            >
              Trending
            </button>
            <button 
              onClick={() => setActiveTab('following')}
              className={`flex-1 py-4 text-center font-medium ${activeTab === 'following' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
            >
              Following
            </button>
            <button 
              onClick={() => setActiveTab('latest')}
              className={`flex-1 py-4 text-center font-medium ${activeTab === 'latest' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'}`}
            >
              Latest
            </button>
          </div>

          {/* Feed Posts */}
          <div className="divide-y divide-gray-700">
            <div className="p-5">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="font-bold text-sm">JD</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold">Jane Doe</h4>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">Pro Trader</span>
                    <span className="text-gray-400 text-sm">@janedoe</span>
                  </div>
                  <p className="mt-2 text-sm">Just closed my $NVDA position with a 15% gain! The semiconductor sector is showing strong momentum despite market volatility. Looking to re-enter on any pullbacks below $850. #TechStocks #Trading</p>
                  
                  <div className="mt-3 p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold">NVDA</span>
                        <span className="text-gray-400 text-sm ml-2">NVIDIA Corporation</span>
                      </div>
                      <div className="text-green-400 font-bold">+4.2%</div>
                    </div>
                    <div className="mt-2 h-12 bg-gray-800 rounded relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-[40%]">
                        <svg className="w-full h-full">
                          <path 
                            d="M0,50 Q25,30 50,40 T100,30 T150,20 T200,10 T250,15 T300,5" 
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-5">
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <ThumbsUp size={18} />
                        <span className="ml-1 text-sm">124</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <MessageSquare size={18} />
                        <span className="ml-1 text-sm">23</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <Share2 size={18} />
                      </button>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>2h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="font-bold text-sm">MS</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold">Michael Smith</h4>
                    <span className="text-gray-400 text-sm">@msmith</span>
                  </div>
                  <p className="mt-2 text-sm">The Fed's latest comments suggest we might see rate cuts sooner than expected. This could be bullish for growth stocks and bearish for the dollar. I'm increasing my tech allocation and reducing financials. Thoughts? #FedWatch #MarketStrategy</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-5">
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <ThumbsUp size={18} />
                        <span className="ml-1 text-sm">87</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <MessageSquare size={18} />
                        <span className="ml-1 text-sm">14</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <Share2 size={18} />
                      </button>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>4h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="font-bold text-sm">SJ</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">Analyst</span>
                    <span className="text-gray-400 text-sm">@sarahj</span>
                  </div>
                  <p className="mt-2 text-sm">$AAPL technical analysis: The stock is forming a cup and handle pattern on the daily chart. If it breaks above $190 with volume, we could see a move to $210. Support is at $175. I'm setting a buy order at $182 with a stop at $172. #TechnicalAnalysis #AAPL</p>
                  
                  <div className="mt-3 p-3 bg-gray-900 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold">AAPL</span>
                        <span className="text-gray-400 text-sm ml-2">Apple Inc.</span>
                      </div>
                      <div className="text-green-400 font-bold">+1.8%</div>
                    </div>
                    <div className="mt-2 h-12 bg-gray-800 rounded relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-[40%]">
                        <svg className="w-full h-full">
                          <path 
                            d="M0,30 Q25,40 50,35 T100,25 T150,30 T200,20 T250,25 T300,15" 
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-5">
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <ThumbsUp size={18} />
                        <span className="ml-1 text-sm">156</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <MessageSquare size={18} />
                        <span className="ml-1 text-sm">32</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <Share2 size={18} />
                      </button>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>6h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="font-bold text-sm">RW</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold">Robert Williams</h4>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">Verified</span>
                    <span className="text-gray-400 text-sm">@robwilliams</span>
                  </div>
                  <p className="mt-2 text-sm">Just published my Q3 outlook report! Key themes: 1) AI spending acceleration, 2) Consumer resilience despite inflation, 3) Energy sector rotation. Full report link in my profile. #MarketOutlook #Q3Forecast</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-5">
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <ThumbsUp size={18} />
                        <span className="ml-1 text-sm">203</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <MessageSquare size={18} />
                        <span className="ml-1 text-sm">41</span>
                      </button>
                      <button className="flex items-center text-gray-400 hover:text-cyan-400">
                        <Share2 size={18} />
                      </button>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>8h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search posts, traders, stocks..." 
              className="w-full bg-gray-900 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
          </div>
        </div>

        {/* Trending Topics */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Trending Topics</h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400">#AIStocks</span>
                <span className="text-xs text-gray-400">1.2k posts</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400">#FedMeeting</span>
                <span className="text-xs text-gray-400">856 posts</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400">#EarningsSeason</span>
                <span className="text-xs text-gray-400">743 posts</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400">#CryptoRegulation</span>
                <span className="text-xs text-gray-400">621 posts</span>
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400">#TechnicalAnalysis</span>
                <span className="text-xs text-gray-400">512 posts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who to Follow */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Who to Follow</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="font-bold text-sm">EW</span>
                </div>
                <div>
                  <p className="font-medium">Emma Wilson</p>
                  <p className="text-xs text-gray-400">@emmawilson</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="font-bold text-sm">DT</span>
                </div>
                <div>
                  <p className="font-medium">David Thompson</p>
                  <p className="text-xs text-gray-400">@davidt</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="font-bold text-sm">LM</span>
                </div>
                <div>
                  <p className="font-medium">Lisa Martinez</p>
                  <p className="text-xs text-gray-400">@lisamartinez</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="font-bold text-sm">JC</span>
                </div>
                <div>
                  <p className="font-medium">James Chen</p>
                  <p className="text-xs text-gray-400">@jameschen</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-gray-900 transition-colors">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Live Activity */}
        <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700">
          <h3 className="font-bold text-lg mb-4">Live Activity</h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p><span className="text-cyan-400">@sarahj</span> just bought 50 shares of AAPL</p>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p><span className="text-cyan-400">@robwilliams</span> posted a new market analysis</p>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p><span className="text-cyan-400">@msmith</span> is now following you</p>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p><span className="text-cyan-400">@janedoe</span> commented on your post</p>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p>TSLA is up 3.2% in the last hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;