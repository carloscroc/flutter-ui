import React from 'react';
import { Plus, Sparkles, TrendingUp, Home, FolderOpen, Image, User, Lightbulb, ChevronRight } from 'lucide-react';

/**
 * Dashboard Version 3: AI-Guided Discovery
 *
 * Philosophy: Intelligent suggestions. AI-powered recommendations based on
 * user behavior. Emphasizes exploration and personalized guidance.
 */
const Dashboard3 = () => {
  const suggestions = [
    { id: 1, title: 'Try Coastal Style', subtitle: 'Popular in your area', icon: Sparkles },
    { id: 2, title: 'Complete Your Bedroom', subtitle: '60% finished', icon: TrendingUp },
    { id: 3, title: 'Trending: Warm Minimalism', subtitle: 'See examples', icon: Lightbulb },
  ];

  return (
    <div className="w-[390px] h-[844px] bg-[#F8F6F3] overflow-hidden relative">
      {/* Status Bar */}
      <div className="h-11 bg-transparent flex items-center justify-between px-6 pt-2">
        <span className="text-sm font-semibold text-[#2C2520]">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 opacity-60"></div>
          <div className="w-4 h-3 opacity-60"></div>
        </div>
      </div>

      {/* Header with User Greeting */}
      <div className="px-6 pt-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[15px] text-[#6B6157] mb-1">Good morning</p>
            <h1 className="text-2xl font-semibold text-[#2C2520] tracking-tight">
              Sarah
            </h1>
          </div>
          <div
            className="w-12 h-12 bg-[#C1694F] rounded-full flex items-center justify-center text-white font-semibold text-lg"
            style={{
              boxShadow: '0 4px 12px rgba(193,105,79,0.25)'
            }}
          >
            S
          </div>
        </div>

        {/* Featured Action Card - Large Hero */}
        <div
          className="relative bg-gradient-to-br from-[#C1694F] to-[#A85A42] rounded-3xl p-6 overflow-hidden"
          style={{
            boxShadow: '0 8px 24px rgba(193,105,79,0.3)'
          }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[13px] font-medium text-white/90">AI Suggestion</span>
            </div>
            <h2 className="text-[20px] font-semibold text-white mb-2 leading-tight">
              Transform your living room today
            </h2>
            <p className="text-[15px] text-white/80 mb-5 leading-relaxed">
              Upload a photo and see instant redesign options
            </p>
            <button
              className="bg-white text-[#C1694F] px-6 py-3 rounded-full font-medium text-[15px] transition-all duration-150 active:scale-95"
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              Get Started
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mb-12"></div>
        </div>
      </div>

      {/* For You Section */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-medium text-[#2C2520] mb-4">
          For You
        </h3>
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion.id}
              className="w-full bg-[#F5F3F0] rounded-2xl p-4 flex items-center gap-4 transition-all duration-150 active:scale-98"
              style={{
                boxShadow: '-2px -2px 6px rgba(255,252,247,0.6), 2px 2px 6px rgba(167,158,148,0.2)'
              }}
            >
              <div
                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  boxShadow: '0 2px 8px rgba(44,37,32,0.08)'
                }}
              >
                <suggestion.icon className="w-6 h-6 text-[#C1694F]" strokeWidth={1.5} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-[15px] font-semibold text-[#2C2520] mb-0.5">
                  {suggestion.title}
                </h4>
                <p className="text-[13px] text-[#6B6157]">
                  {suggestion.subtitle}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#A39990]" strokeWidth={1.5} />
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="px-6">
        <h3 className="text-lg font-medium text-[#2C2520] mb-4">
          Your Activity
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div
            className="bg-[#F5F3F0] rounded-2xl p-4"
            style={{
              boxShadow: '-2px -2px 6px rgba(255,252,247,0.6), 2px 2px 6px rgba(167,158,148,0.2)'
            }}
          >
            <div className="text-[28px] font-bold text-[#2C2520] mb-1">
              18
            </div>
            <div className="text-[13px] text-[#6B6157] mb-2">
              Designs Created
            </div>
            <div className="flex items-center gap-1 text-[#8B9D83] text-[12px]">
              <TrendingUp className="w-3 h-3" strokeWidth={2} />
              <span>+6 this week</span>
            </div>
          </div>
          <div
            className="bg-[#F5F3F0] rounded-2xl p-4"
            style={{
              boxShadow: '-2px -2px 6px rgba(255,252,247,0.6), 2px 2px 6px rgba(167,158,148,0.2)'
            }}
          >
            <div className="text-[28px] font-bold text-[#2C2520] mb-1">
              5
            </div>
            <div className="text-[13px] text-[#6B6157] mb-2">
              Active Projects
            </div>
            <div className="flex items-center gap-1 text-[#C1694F] text-[12px] font-medium">
              <span>View all</span>
              <ChevronRight className="w-3 h-3" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[88px] rounded-t-[28px] flex items-start justify-around pt-4 px-8"
        style={{
          background: 'rgba(44, 37, 32, 0.9)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.18)'
        }}
      >
        <button className="flex flex-col items-center gap-1">
          <Home className="w-7 h-7 text-[#C1694F]" strokeWidth={1.5} fill="#C1694F" />
          <div className="w-1 h-1 bg-[#C1694F] rounded-full"></div>
        </button>
        <button className="flex flex-col items-center gap-1">
          <FolderOpen className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
        </button>
        <button className="flex flex-col items-center gap-1 -mt-2">
          <div
            className="w-14 h-14 bg-[#C1694F] rounded-full flex items-center justify-center"
            style={{
              boxShadow: '0 8px 20px rgba(193,105,79,0.3)'
            }}
          >
            <Plus className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Image className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
        </button>
        <button className="flex flex-col items-center gap-1">
          <User className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard3;
