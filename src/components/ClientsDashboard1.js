import React from 'react';
import { Home, Calendar, TrendingUp, MessageSquare, Bell, Menu } from 'lucide-react';

// Dashboard Variation 1: Card-Focused Layout
// Emphasizes neumorphic cards with clear hierarchy and breathing room
const ClientsDashboard1 = () => {
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
          {/* Header */}
          <div className="px-6 pt-4 pb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-2xl font-semibold text-[#2C2520] tracking-tight">Welcome back</h1>
                <p className="text-sm text-[#6B6157] mt-1">Your spaces are looking great</p>
              </div>
              <button className="w-11 h-11 rounded-full bg-[#F5F3F0] flex items-center justify-center shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
                <Bell className="w-5 h-5 text-[#C1694F]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="px-6 mb-6">
            <div className="bg-[#F5F3F0] rounded-3xl p-6 shadow-[-4px_-4px_12px_rgba(255,252,247,0.8),_4px_4px_12px_rgba(167,158,148,0.3)]">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C1694F] mb-1">12</div>
                  <div className="text-xs text-[#6B6157]">Projects</div>
                </div>
                <div className="text-center border-l border-r border-[#D4CFC8]">
                  <div className="text-2xl font-bold text-[#C1694F] mb-1">5</div>
                  <div className="text-xs text-[#6B6157]">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C1694F] mb-1">87%</div>
                  <div className="text-xs text-[#6B6157]">Complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Projects */}
          <div className="px-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-[#2C2520]">Active projects</h2>
              <button className="text-sm text-[#C1694F] font-medium">View all</button>
            </div>

            <div className="space-y-4">
              {/* Project Card 1 */}
              <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-white overflow-hidden flex-shrink-0 border border-[#D4CFC8]">
                    <div className="w-full h-full bg-gradient-to-br from-[#D4A574] to-[#C1694F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2C2520] mb-1 text-base">Living Room Redesign</h3>
                    <p className="text-xs text-[#A39990] mb-3">Modern • Cozy</p>
                    <div className="w-full h-2 bg-[#F8F6F3] rounded-full overflow-hidden">
                      <div className="h-full bg-[#C1694F] rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-white overflow-hidden flex-shrink-0 border border-[#D4CFC8]">
                    <div className="w-full h-full bg-gradient-to-br from-[#8B9D83] to-[#9DAAB6]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#2C2520] mb-1 text-base">Kitchen Refresh</h3>
                    <p className="text-xs text-[#A39990] mb-3">Scandinavian • Bright</p>
                    <div className="w-full h-2 bg-[#F8F6F3] rounded-full overflow-hidden">
                      <div className="h-full bg-[#C1694F] rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-medium text-[#2C2520] mb-4">Recent activity</h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F3F0] flex items-center justify-center flex-shrink-0 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                  <MessageSquare className="w-5 h-5 text-[#C1694F]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#2C2520]">New message from Sarah</p>
                  <p className="text-xs text-[#A39990] mt-0.5">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F3F0] flex items-center justify-center flex-shrink-0 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                  <TrendingUp className="w-5 h-5 text-[#8B9D83]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#2C2520]">Living room project updated</p>
                  <p className="text-xs text-[#A39990] mt-0.5">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F3F0] flex items-center justify-center flex-shrink-0 shadow-[-2px_-2px_6px_rgba(255,252,247,0.8),_2px_2px_6px_rgba(167,158,148,0.25)]">
                  <Calendar className="w-5 h-5 text-[#D4A574]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#2C2520]">Consultation scheduled</p>
                  <p className="text-xs text-[#A39990] mt-0.5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Glassmorphic */}
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
              <Menu className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsDashboard1;