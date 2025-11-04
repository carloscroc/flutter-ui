import React from 'react';
import { Plus, Search, FolderOpen, Home, Image, User, Clock, Bookmark } from 'lucide-react';

/**
 * Dashboard Version 2: Project-Focused Approach
 *
 * Philosophy: Organization first. Emphasizes active projects with clear
 * categorization. Shows progress and provides structured navigation.
 */
const Dashboard2 = () => {
  const projects = [
    { id: 1, name: 'Living Room Redesign', rooms: 3, updated: '2 days ago', progress: 75 },
    { id: 2, name: 'Master Bedroom', rooms: 1, updated: '5 days ago', progress: 40 },
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

      {/* Header with Search */}
      <div className="px-6 pt-4 pb-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-semibold text-[#2C2520] mb-1 tracking-tight">
              Your Projects
            </h1>
            <p className="text-[15px] text-[#6B6157] leading-relaxed">
              Continue where you left off
            </p>
          </div>
          <button
            className="w-10 h-10 bg-[#F5F3F0] rounded-full flex items-center justify-center"
            style={{
              boxShadow: '-2px -2px 6px rgba(255,252,247,0.6), 2px 2px 6px rgba(167,158,148,0.2)'
            }}
          >
            <Search className="w-5 h-5 text-[#6B6157]" strokeWidth={1.5} />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2">
          <button
            className="px-5 py-2 bg-[#C1694F] rounded-full text-white text-[14px] font-medium"
            style={{
              boxShadow: '0 2px 8px rgba(193,105,79,0.25)'
            }}
          >
            Active
          </button>
          <button
            className="px-5 py-2 bg-white/70 backdrop-blur-md rounded-full text-[#2C2520] text-[14px] font-medium border border-white/40"
          >
            Saved
          </button>
          <button
            className="px-5 py-2 bg-white/70 backdrop-blur-md rounded-full text-[#2C2520] text-[14px] font-medium border border-white/40"
          >
            Archive
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="px-6 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#F5F3F0] rounded-3xl p-5"
            style={{
              boxShadow: '-3px -3px 8px rgba(255,252,247,0.8), 3px 3px 8px rgba(167,158,148,0.25)'
            }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-[#2C2520] mb-2">
                  {project.name}
                </h3>
                <div className="flex items-center gap-4 text-[13px] text-[#6B6157]">
                  <div className="flex items-center gap-1.5">
                    <Image className="w-4 h-4" strokeWidth={1.5} />
                    <span>{project.rooms} rooms</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                    <span>{project.updated}</span>
                  </div>
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-[#A39990]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-medium text-[#6B6157]">Progress</span>
                <span className="text-[12px] font-semibold text-[#C1694F]">{project.progress}%</span>
              </div>
              <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C1694F] rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Thumbnail Preview */}
            <div className="flex gap-2">
              <div className="w-20 h-16 bg-gradient-to-br from-[#E8E4DF] to-[#D4CFC8] rounded-lg"></div>
              <div className="w-20 h-16 bg-gradient-to-br from-[#D4CFC8] to-[#C7BEB6] rounded-lg"></div>
              <div className="w-20 h-16 bg-gradient-to-br from-[#C7BEB6] to-[#B8AFA8] rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Project Button */}
      <div className="px-6 mt-6">
        <button
          className="w-full h-[52px] bg-white rounded-full text-[#2C2520] font-medium text-base transition-all duration-150 active:scale-95 border border-[#D4CFC8]"
          style={{
            boxShadow: '0 2px 8px rgba(44,37,32,0.08)'
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" strokeWidth={2} />
            New Project
          </div>
        </button>
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
          <Home className="w-7 h-7 text-white opacity-60" strokeWidth={1.5} />
        </button>
        <button className="flex flex-col items-center gap-1">
          <FolderOpen className="w-7 h-7 text-[#C1694F]" strokeWidth={1.5} fill="#C1694F" />
          <div className="w-1 h-1 bg-[#C1694F] rounded-full"></div>
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

export default Dashboard2;
