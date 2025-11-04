import React from 'react';
import { Plus, Image, Home, FolderOpen, User, Sparkles } from 'lucide-react';

/**
 * Dashboard Version 1: Gallery-First Approach
 *
 * Philosophy: Immediate inspiration. Show recent generations prominently,
 * with quick access to generate new designs. Emphasizes visual content.
 */
const Dashboard1 = () => {
  const recentDesigns = [
    { id: 1, title: 'Living Room', style: 'Modern', image: '/api/placeholder/320/240' },
    { id: 2, title: 'Bedroom', style: 'Cozy', image: '/api/placeholder/320/240' },
    { id: 3, title: 'Kitchen', style: 'Rustic', image: '/api/placeholder/320/240' },
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

      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <h1 className="text-2xl font-semibold text-[#2C2520] mb-1 tracking-tight">
          Welcome back
        </h1>
        <p className="text-[15px] text-[#6B6157] leading-relaxed">
          Ready to reimagine your space?
        </p>
      </div>

      {/* Quick Actions Card - Neumorphic */}
      <div className="mx-6 mb-6">
        <div
          className="bg-[#F5F3F0] rounded-3xl p-5"
          style={{
            boxShadow: '-3px -3px 8px rgba(255,252,247,0.8), 3px 3px 8px rgba(167,158,148,0.25)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-medium text-[#2C2520] mb-1">
                Start Creating
              </h2>
              <p className="text-[13px] text-[#A39990] leading-relaxed">
                Upload a room to transform
              </p>
            </div>
            <Sparkles className="w-6 h-6 text-[#C1694F]" strokeWidth={1.5} />
          </div>

          {/* Generate Button - Terracotta */}
          <button
            className="w-full h-[52px] bg-[#C1694F] rounded-full text-white font-medium text-base transition-all duration-150 active:scale-95"
            style={{
              boxShadow: '0 4px 12px rgba(193,105,79,0.25)'
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" strokeWidth={2} />
              Upload Photo
            </div>
          </button>
        </div>
      </div>

      {/* Recent Designs Section */}
      <div className="px-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-[#2C2520]">
            Recent Designs
          </h3>
          <button className="text-[14px] font-medium text-[#C1694F]">
            See All
          </button>
        </div>

        {/* Horizontal Scrollable Gallery */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {recentDesigns.map((design, index) => (
            <div
              key={design.id}
              className="flex-shrink-0 w-[160px]"
            >
              <div
                className="bg-white rounded-xl overflow-hidden mb-3"
                style={{
                  boxShadow: '0 2px 8px rgba(44,37,32,0.1)'
                }}
              >
                <div className="w-[160px] h-[120px] bg-gradient-to-br from-[#E8E4DF] to-[#D4CFC8]"></div>
              </div>
              <h4 className="text-[15px] font-medium text-[#2C2520] mb-1">
                {design.title}
              </h4>
              <p className="text-[13px] text-[#A39990]">
                {design.style}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 mt-6">
        <div className="flex gap-3">
          <div
            className="flex-1 bg-[#F5F3F0] rounded-2xl p-4"
            style={{
              boxShadow: '-2px -2px 6px rgba(255,252,247,0.6), 2px 2px 6px rgba(167,158,148,0.2)'
            }}
          >
            <div className="text-[24px] font-bold text-[#2C2520] mb-1">
              12
            </div>
            <div className="text-[13px] text-[#6B6157]">
              Designs
            </div>
          </div>
          <div
            className="flex-1 bg-[#F5F3F0] rounded-2xl p-4"
            style={{
              boxShadow: '-2px -2px 6px rgba(255,252,247,0.6), 2px 2px 6px rgba(167,158,148,0.2)'
            }}
          >
            <div className="text-[24px] font-bold text-[#2C2520] mb-1">
              3
            </div>
            <div className="text-[13px] text-[#6B6157]">
              Projects
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Glassmorphic */}
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

export default Dashboard1;
