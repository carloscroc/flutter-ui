import React from 'react';
import { Home, User, LayoutGrid, MessageCircle, Heart, Zap, Target, Award, ChevronRight, TrendingUp } from 'lucide-react';

// Flutter Dashboard Variation 2: Widget-Based Layout with Activity Feed
// Emphasizes modular widgets and real-time activity with Material Design cards
const FlutterDashboard2 = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F3] flex items-center justify-center p-8">
      {/* iPhone Frame */}
      <div className="relative w-[390px] h-[844px] bg-[#F8F6F3] rounded-[55px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Status Bar */}
        <div className="h-11 bg-[#F8F6F3] flex items-center justify-between px-8 pt-2">
          <span className="text-sm font-semibold text-[#2C2520]">9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-3 border-2 border-[#2C2520] rounded-sm" />
            <div className="w-1 h-3 bg-[#2C2520] rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-44px)] overflow-y-auto overflow-x-hidden pb-24">
          {/* Header with Profile */}
          <div className="px-6 pt-4 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C1694F] to-[#D4A574] shadow-[0_4px_12px_rgba(193,105,79,0.25)] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SC</span>
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-[#2C2520]">Sarah Chen</h1>
                <p className="text-sm text-[#6B6157]">Premium client</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F5F3F0] shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-[#6B6157]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Stats Widgets Row */}
          <div className="px-6 mb-6">
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-[#F5F3F0] rounded-xl p-3 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-[#C1694F] flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-lg font-bold text-[#2C2520]">24</div>
                <div className="text-xs text-[#A39990]">Goals</div>
              </div>

              <div className="bg-[#F5F3F0] rounded-xl p-3 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-[#8B9D83] flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-lg font-bold text-[#2C2520]">156</div>
                <div className="text-xs text-[#A39990]">Points</div>
              </div>

              <div className="bg-[#F5F3F0] rounded-xl p-3 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-[#D4A574] flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-lg font-bold text-[#2C2520]">12</div>
                <div className="text-xs text-[#A39990]">Badges</div>
              </div>

              <div className="bg-[#F5F3F0] rounded-xl p-3 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-[#9DAAB6] flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-lg font-bold text-[#2C2520]">87</div>
                <div className="text-xs text-[#A39990]">Saves</div>
              </div>
            </div>
          </div>

          {/* Current Activity Card */}
          <div className="px-6 mb-6">
            <div className="bg-gradient-to-br from-[#C1694F] to-[#D4A574] rounded-3xl p-6 shadow-[0_8px_24px_rgba(193,105,79,0.25)]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-white">Current sprint</h2>
                <div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.25)] backdrop-blur-sm">
                  <span className="text-xs font-medium text-white">In progress</span>
                </div>
              </div>

              <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-md rounded-2xl p-4 border border-[rgba(255,255,255,0.2)]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-white font-medium mb-1">Living Room Transformation</h3>
                    <p className="text-white text-xs opacity-80">5 days remaining</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">68%</div>
                  </div>
                </div>

                <div className="w-full h-2 bg-[rgba(255,255,255,0.25)] rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="px-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-[#2C2520]">Recent activity</h2>
              <button className="text-sm text-[#C1694F] font-medium">See all</button>
            </div>

            <div className="space-y-3">
              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C1694F] to-[#D4A574] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2C2520] text-sm mb-1">Design approved</h3>
                    <p className="text-xs text-[#6B6157] mb-2">Living room modern concept received approval</p>
                    <span className="text-xs text-[#A39990]">2 hours ago</span>
                  </div>
                  <button className="flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-[#A39990]" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B9D83] to-[#9DAAB6] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2C2520] text-sm mb-1">Milestone reached</h3>
                    <p className="text-xs text-[#6B6157] mb-2">Kitchen redesign 75% complete</p>
                    <span className="text-xs text-[#A39990]">5 hours ago</span>
                  </div>
                  <button className="flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-[#A39990]" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A574] to-[#C1694F] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2C2520] text-sm mb-1">New message</h3>
                    <p className="text-xs text-[#6B6157] mb-2">Your designer sent 3 new concepts</p>
                    <span className="text-xs text-[#A39990]">Yesterday</span>
                  </div>
                  <button className="flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-[#A39990]" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Insights */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-medium text-[#2C2520] mb-4">This week</h2>

            <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#8B9D83] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2C2520] text-sm">Progress trend</h3>
                    <p className="text-xs text-[#8B9D83]">+12% from last week</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#8B9D83]">↑</div>
              </div>

              <div className="flex items-end justify-between h-24 gap-2">
                {[40, 55, 45, 70, 60, 85, 75].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-[#8B9D83] to-[#9DAAB6] rounded-t-md"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-[#A39990]">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[rgba(44,37,32,0.9)] backdrop-blur-2xl rounded-t-[28px]">
          <div className="flex items-center justify-around h-full px-8">
            <button className="flex flex-col items-center gap-1">
              <Home className="w-7 h-7 text-[#C1694F]" strokeWidth={1.5} fill="#C1694F" />
              <span className="text-[10px] text-[#C1694F] font-medium">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <LayoutGrid className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
            </button>
            <button className="flex flex-col items-center gap-1">
              <MessageCircle className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
            </button>
            <button className="flex flex-col items-center gap-1">
              <User className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterDashboard2;
