import React from 'react';
import { Home, Calendar, TrendingUp, MessageSquare, Bell, Search, ChevronRight } from 'lucide-react';

// Dashboard Variation 2: List-Priority Layout
// Emphasizes clean lists with dense information and quick scanning
const ClientsDashboard2 = () => {
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
          {/* Compact Header */}
          <div className="px-6 pt-3 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold text-[#2C2520] tracking-tight">Dashboard</h1>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-[#F5F3F0] flex items-center justify-center shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                  <Search className="w-5 h-5 text-[#6B6157]" strokeWidth={1.5} />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#F5F3F0] flex items-center justify-center shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                  <Bell className="w-5 h-5 text-[#C1694F]" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Inline Stats */}
            <div className="flex gap-3">
              <div className="flex-1 bg-[#F5F3F0] rounded-2xl p-3.5 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="text-xl font-bold text-[#C1694F]">12</div>
                <div className="text-xs text-[#6B6157] mt-0.5">Total</div>
              </div>
              <div className="flex-1 bg-[#F5F3F0] rounded-2xl p-3.5 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="text-xl font-bold text-[#8B9D83]">5</div>
                <div className="text-xs text-[#6B6157] mt-0.5">Active</div>
              </div>
              <div className="flex-1 bg-[#F5F3F0] rounded-2xl p-3.5 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                <div className="text-xl font-bold text-[#D4A574]">7</div>
                <div className="text-xs text-[#6B6157] mt-0.5">Done</div>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="px-6 mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-medium text-[#2C2520]">Your projects</h2>
              <button className="text-sm text-[#C1694F] font-medium">See all</button>
            </div>

            <div className="space-y-2.5">
              {/* List Item 1 */}
              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#C1694F] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-[#2C2520] text-sm mb-0.5">Living Room Redesign</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#A39990]">Modern</span>
                        <span className="text-xs text-[#A39990]">•</span>
                        <span className="text-xs text-[#C1694F] font-medium">75%</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A39990] flex-shrink-0" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* List Item 2 */}
              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#8B9D83] to-[#9DAAB6] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-[#2C2520] text-sm mb-0.5">Kitchen Refresh</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#A39990]">Scandinavian</span>
                        <span className="text-xs text-[#A39990]">•</span>
                        <span className="text-xs text-[#C1694F] font-medium">45%</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A39990] flex-shrink-0" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* List Item 3 */}
              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#9DAAB6] to-[#D4A574] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-[#2C2520] text-sm mb-0.5">Bedroom Makeover</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#A39990]">Minimalist</span>
                        <span className="text-xs text-[#A39990]">•</span>
                        <span className="text-xs text-[#C1694F] font-medium">90%</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A39990] flex-shrink-0" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* List Item 4 */}
              <div className="bg-[#F5F3F0] rounded-xl p-4 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)] flex items-center gap-3">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#C1694F] to-[#8B9D83] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-[#2C2520] text-sm mb-0.5">Home Office Setup</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#A39990]">Industrial</span>
                        <span className="text-xs text-[#A39990]">•</span>
                        <span className="text-xs text-[#C1694F] font-medium">30%</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A39990] flex-shrink-0" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="px-6 mb-6">
            <h2 className="text-base font-medium text-[#2C2520] mb-3">Activity</h2>

            <div className="space-y-2">
              <div className="flex items-center gap-3 py-2">
                <div className="w-8 h-8 rounded-full bg-[#C1694F] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#2C2520]">New message from Sarah</p>
                  <p className="text-xs text-[#A39990]">2h ago</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2">
                <div className="w-8 h-8 rounded-full bg-[#8B9D83] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#2C2520]">Project milestone reached</p>
                  <p className="text-xs text-[#A39990]">5h ago</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2">
                <div className="w-8 h-8 rounded-full bg-[#D4A574] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#2C2520]">Consultation scheduled</p>
                  <p className="text-xs text-[#A39990]">1d ago</p>
                </div>
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
              <TrendingUp className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
            </button>
            <button className="flex flex-col items-center gap-1">
              <MessageSquare className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
            </button>
            <button className="flex flex-col items-center gap-1">
              <Calendar className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsDashboard2;
