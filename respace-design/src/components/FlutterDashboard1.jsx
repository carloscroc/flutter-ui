import React from 'react';
import { Home, User, LayoutGrid, MessageCircle, TrendingUp, Calendar, MapPin, Clock, Star } from 'lucide-react';

// Flutter Dashboard Variation 1: Card-Rich Layout with Metrics Focus
// Emphasizes data visualization and progress tracking with Material Design principles
const FlutterDashboard1 = () => {
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
          {/* App Bar */}
          <div className="px-6 pt-4 pb-6">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h1 className="text-2xl font-semibold text-[#2C2520] tracking-tight">Client Dashboard</h1>
                <p className="text-sm text-[#6B6157] mt-1">Track your transformation</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F5F3F0] shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)] flex items-center justify-center">
                <User className="w-6 h-6 text-[#C1694F]" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Metrics Card */}
          <div className="px-6 mb-6">
            <div className="bg-[#F5F3F0] rounded-3xl p-6 shadow-[-4px_-4px_12px_rgba(255,252,247,0.8),_4px_4px_12px_rgba(167,158,148,0.3)]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-medium text-[#2C2520]">This month</h2>
                <button className="px-4 py-2 rounded-full bg-[#C1694F] text-white text-xs font-medium shadow-[0_4px_12px_rgba(193,105,79,0.25)]">
                  View details
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#C1694F] mb-1">24</div>
                  <div className="text-xs text-[#6B6157]">Projects</div>
                  <div className="text-xs text-[#8B9D83] mt-1">+3 new</div>
                </div>
                <div className="border-l border-r border-[#D4CFC8] px-4">
                  <div className="text-2xl font-bold text-[#8B9D83] mb-1">18</div>
                  <div className="text-xs text-[#6B6157]">Completed</div>
                  <div className="text-xs text-[#8B9D83] mt-1">+5 this week</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4A574] mb-1">92%</div>
                  <div className="text-xs text-[#6B6157]">Satisfaction</div>
                  <div className="text-xs text-[#8B9D83] mt-1">+2% up</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-medium text-[#2C2520] mb-4">Progress overview</h2>

            <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)] mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C1694F] to-[#D4A574] flex items-center justify-center">
                    <LayoutGrid className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2C2520] text-sm">Space designs</h3>
                    <p className="text-xs text-[#A39990]">24 total spaces</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#C1694F]">75%</div>
                  <div className="text-xs text-[#6B6157]">complete</div>
                </div>
              </div>
              <div className="w-full h-2 bg-[#F8F6F3] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#C1694F] to-[#D4A574] rounded-full" style={{ width: '75%' }} />
              </div>
            </div>

            <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B9D83] to-[#9DAAB6] flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2C2520] text-sm">Client feedback</h3>
                    <p className="text-xs text-[#A39990]">18 reviews received</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#8B9D83]">4.8</div>
                  <div className="text-xs text-[#6B6157]">rating</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[100, 100, 100, 100, 80].map((width, i) => (
                  <div key={i} className="flex-1 h-2 bg-[#F8F6F3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#8B9D83] rounded-full" style={{ width: `${width}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="px-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-[#2C2520]">Upcoming sessions</h2>
              <button className="text-sm text-[#C1694F] font-medium">View all</button>
            </div>

            <div className="space-y-3">
              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C1694F] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2C2520] text-sm mb-1">Living room consultation</h3>
                    <div className="flex items-center gap-3 text-xs text-[#6B6157]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" strokeWidth={1.5} />
                        <span>2:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" strokeWidth={1.5} />
                        <span>Video call</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#8B9D83] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2C2520] text-sm mb-1">Kitchen design review</h3>
                    <div className="flex items-center gap-3 text-xs text-[#6B6157]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" strokeWidth={1.5} />
                        <span>Tomorrow, 10:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-medium text-[#2C2520] mb-4">Quick actions</h2>

            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#F5F3F0] rounded-2xl p-4 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)] flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#C1694F] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-[#2C2520]">Messages</span>
              </button>

              <button className="bg-[#F5F3F0] rounded-2xl p-4 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)] flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#8B9D83] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-[#2C2520]">Analytics</span>
              </button>
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

export default FlutterDashboard1;
