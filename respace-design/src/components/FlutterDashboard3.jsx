import React from 'react';
import { Home, User, LayoutGrid, MessageCircle, BookOpen, Layers, Users, Briefcase, Plus, ArrowUpRight } from 'lucide-react';

// Flutter Dashboard Variation 3: Hero Content with Project Carousel
// Emphasizes visual content and swipeable project cards with Material Design elevation
const FlutterDashboard3 = () => {
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
          {/* Hero Header with Gradient */}
          <div className="relative h-64 mb-6 -mt-11">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C1694F] via-[#D4A574] to-[#8B9D83]" />

            {/* Decorative Circles */}
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white opacity-10" />
            <div className="absolute bottom-5 left-5 w-24 h-24 rounded-full bg-white opacity-10" />

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-end p-6 pb-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white opacity-90 text-sm mb-2">Welcome back</p>
                  <h1 className="text-3xl font-bold text-white mb-1">Your Dashboard</h1>
                  <p className="text-white opacity-90 text-sm">24 active projects</p>
                </div>
                <button className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.3)] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                  <User className="w-7 h-7 text-white" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="px-6 -mt-8 mb-6 relative z-10">
            <div className="bg-white rounded-3xl p-5 shadow-[0_8px_24px_rgba(44,37,32,0.15)]">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C1694F] mb-1">156</div>
                  <div className="text-xs text-[#6B6157]">Total designs</div>
                </div>
                <div className="text-center border-l border-r border-[#D4CFC8]">
                  <div className="text-2xl font-bold text-[#8B9D83] mb-1">89%</div>
                  <div className="text-xs text-[#6B6157]">Success rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#D4A574] mb-1">4.9</div>
                  <div className="text-xs text-[#6B6157]">Avg rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Projects Carousel */}
          <div className="mb-6">
            <div className="px-6 mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-[#2C2520]">Active projects</h2>
              <button className="text-sm text-[#C1694F] font-medium flex items-center gap-1">
                View all
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex gap-4 px-6 overflow-x-auto">
              {/* Project Card 1 */}
              <div className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(44,37,32,0.12)]">
                <div className="h-40 bg-gradient-to-br from-[#C1694F] to-[#D4A574] relative">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.25)] backdrop-blur-sm">
                    <span className="text-xs font-medium text-white">In progress</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#2C2520] mb-1">Modern Living Space</h3>
                  <p className="text-sm text-[#6B6157] mb-4">Contemporary design with minimal aesthetic</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#F5F3F0]" />
                      <span className="text-xs text-[#6B6157]">Sarah Chen</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#C1694F]">72%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(44,37,32,0.12)]">
                <div className="h-40 bg-gradient-to-br from-[#8B9D83] to-[#9DAAB6] relative">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.25)] backdrop-blur-sm">
                    <span className="text-xs font-medium text-white">Review</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#2C2520] mb-1">Cozy Kitchen Refresh</h3>
                  <p className="text-sm text-[#6B6157] mb-4">Warm Scandinavian-inspired redesign</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#F5F3F0]" />
                      <span className="text-xs text-[#6B6157]">Mike Johnson</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#8B9D83]">95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-medium text-[#2C2520] mb-4">Categories</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C1694F] to-[#D4A574] flex items-center justify-center mb-3">
                  <Layers className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-[#2C2520] mb-1">Residential</h3>
                <p className="text-sm text-[#6B6157] mb-2">18 projects</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[#F8F6F3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C1694F] rounded-full" style={{ width: '75%' }} />
                  </div>
                  <span className="text-xs text-[#C1694F] font-medium">75%</span>
                </div>
              </div>

              <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B9D83] to-[#9DAAB6] flex items-center justify-center mb-3">
                  <Briefcase className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-[#2C2520] mb-1">Commercial</h3>
                <p className="text-sm text-[#6B6157] mb-2">6 projects</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[#F8F6F3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#8B9D83] rounded-full" style={{ width: '45%' }} />
                  </div>
                  <span className="text-xs text-[#8B9D83] font-medium">45%</span>
                </div>
              </div>

              <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A574] to-[#C1694F] flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-[#2C2520] mb-1">Consultation</h3>
                <p className="text-sm text-[#6B6157] mb-2">12 sessions</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[#F8F6F3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#D4A574] rounded-full" style={{ width: '90%' }} />
                  </div>
                  <span className="text-xs text-[#D4A574] font-medium">90%</span>
                </div>
              </div>

              <div className="bg-[#F5F3F0] rounded-2xl p-5 shadow-[-3px_-3px_8px_rgba(255,252,247,0.8),_3px_3px_8px_rgba(167,158,148,0.25)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9DAAB6] to-[#8B9D83] flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-[#2C2520] mb-1">Collaborations</h3>
                <p className="text-sm text-[#6B6157] mb-2">8 partners</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[#F8F6F3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9DAAB6] rounded-full" style={{ width: '60%' }} />
                  </div>
                  <span className="text-xs text-[#9DAAB6] font-medium">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="absolute bottom-24 right-6 w-16 h-16 rounded-2xl bg-[#C1694F] shadow-[0_8px_20px_rgba(193,105,79,0.3)] flex items-center justify-center z-10">
          <Plus className="w-7 h-7 text-white" strokeWidth={2} />
        </button>

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

export default FlutterDashboard3;
