import React from 'react';
import { Home, Calendar, TrendingUp, MessageSquare, Bell, Plus, Image } from 'lucide-react';

// Dashboard Variation 3: Visual-First Layout
// Emphasizes large imagery with glassmorphic overlays and hero content
const ClientsDashboard3 = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F3] flex items-center justify-center p-8">
      {/* iPhone Frame */}
      <div className="relative w-[390px] h-[844px] bg-[#F8F6F3] rounded-[55px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Status Bar */}
        <div className="h-11 bg-transparent flex items-center justify-between px-8 pt-2 relative z-20">
          <span className="text-sm font-semibold text-white">9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-3 border-2 border-white rounded-sm" />
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-44px)] overflow-y-auto overflow-x-hidden pb-24">
          {/* Hero Section with Image */}
          <div className="relative h-80 mb-6">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C1694F] via-[#D4A574] to-[#8B9D83]" />

            {/* Glassmorphic Header Overlay */}
            <div className="absolute top-0 left-0 right-0 px-6 pt-4">
              <div className="bg-[rgba(255,255,255,0.75)] backdrop-blur-xl rounded-2xl p-5 border border-[rgba(255,255,255,0.3)] shadow-[0_8px_24px_rgba(44,37,32,0.15)]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-xl font-semibold text-[#2C2520] mb-1">Your spaces</h1>
                    <p className="text-sm text-[#6B6157]">12 projects • 5 in progress</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(44,37,32,0.1)]">
                    <Bell className="w-5 h-5 text-[#C1694F]" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Progress Ring */}
                <div className="flex items-center justify-center gap-6">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#F8F6F3"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#C1694F"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.87} ${2 * Math.PI * 40}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-[#C1694F]">87%</span>
                      <span className="text-xs text-[#6B6157]">Overall</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#C1694F]" />
                      <span className="text-xs text-[#2C2520]">7 Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#8B9D83]" />
                      <span className="text-xs text-[#2C2520]">5 Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#D4CFC8]" />
                      <span className="text-xs text-[#2C2520]">0 Paused</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="px-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-[#2C2520]">Featured project</h2>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(44,37,32,0.15)]">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-[#D4A574] to-[#C1694F]" />

              {/* Glassmorphic Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-[rgba(255,255,255,0.75)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.3)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#2C2520] text-base mb-1">Living Room Redesign</h3>
                    <p className="text-sm text-[#6B6157]">Modern • Cozy atmosphere</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#C1694F]">75%</div>
                    <div className="text-xs text-[#6B6157]">complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="px-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-[#2C2520]">Other projects</h2>
              <button className="text-sm text-[#C1694F] font-medium">View all</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Project Thumbnail 1 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(44,37,32,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D83] to-[#9DAAB6]" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-[rgba(255,255,255,0.7)] backdrop-blur-lg">
                  <h3 className="font-medium text-[#2C2520] text-sm mb-0.5">Kitchen</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6B6157]">Scandinavian</span>
                    <span className="text-xs font-medium text-[#C1694F]">45%</span>
                  </div>
                </div>
              </div>

              {/* Project Thumbnail 2 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(44,37,32,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9DAAB6] to-[#D4A574]" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-[rgba(255,255,255,0.7)] backdrop-blur-lg">
                  <h3 className="font-medium text-[#2C2520] text-sm mb-0.5">Bedroom</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6B6157]">Minimalist</span>
                    <span className="text-xs font-medium text-[#C1694F]">90%</span>
                  </div>
                </div>
              </div>

              {/* Project Thumbnail 3 */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(44,37,32,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C1694F] to-[#8B9D83]" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-[rgba(255,255,255,0.7)] backdrop-blur-lg">
                  <h3 className="font-medium text-[#2C2520] text-sm mb-0.5">Office</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6B6157]">Industrial</span>
                    <span className="text-xs font-medium text-[#C1694F]">30%</span>
                  </div>
                </div>
              </div>

              {/* Add New Project */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F5F3F0] shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C1694F] flex items-center justify-center mx-auto mb-2">
                    <Plus className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-medium text-[#6B6157]">New project</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="absolute bottom-24 right-6 w-16 h-16 rounded-full bg-[#C1694F] shadow-[0_8px_20px_rgba(193,105,79,0.3)] flex items-center justify-center z-10">
          <Image className="w-7 h-7 text-white" strokeWidth={1.5} />
        </button>

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

export default ClientsDashboard3;
