"use client";

import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { 
  Baby, 
  Trophy, 
  Palette, 
  Landmark, 
  Target, 
  Plane, 
  Heart, 
  Users, 
  Heart as HeartHealth 
} from "lucide-react";
import { useState } from "react";

// Story type definition
type Story = {
  title: string;
  description: string;
  date: string;
  tags: {
    tag1: string | null;
    tag2: string | null;
    tag3: string | null;
  };
};

export default function Stories() {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Define stories array
  const stories: Story[] = [
    {
      title: "Mukti Bahini",
      description: "I wished I joined Mukti Bahini. But I was seventeen and your grandmother needed me.",
      date: "2024-04-17",
      tags: {
        tag1: "Liberation war",
        tag2: "Family",
        tag3: null
      }
    },
    {
      title: "Woes of a Teen",
      description: "I wished I joined Mukti Bahini. But I was seventeen and your grandmother needed me.",
      date: "2024-04-17",
      tags: {
        tag1: "Liberation war",
        tag2: "Family",
        tag3: "Childhood"
      }
    },
    {
      title: "School & War",
      description: "Schooling stopped during the Liberation War. We needed to focus on survival.",
      date: "2024-04-05",
      tags: {
        tag1: "Liberation war",
        tag2: "Childhood",
        tag3: null
      }
    },
    {
      title: "Liberation",
      description: "Schooling stopped during the Liberation War. We needed to focus on survival.",
      date: "2024-04-05",
      tags: {
        tag1: "Liberation war",
        tag2: "Family",
        tag3: null
      }
    },
    {
      title: "Marriage",
      description: "Your mother was shy.",
      date: "2024-04-01",
      tags: {
        tag1: "Family",
        tag2: null,
        tag3: null
      }
    },
    {
      title: "Rubina",
      description: "Your mother was shy.",
      date: "2024-04-01",
      tags: {
        tag1: "Family",
        tag2: null,
        tag3: null
      }
    },
    {
      title: "Workforce",
      description: "If it hadn't been for my boss, transitioning from sports to employment would've been an uphill battle.",
      date: "2024-03-23",
      tags: {
        tag1: "Career",
        tag2: "Sports",
        tag3: null
      }
    },
    {
      title: "Vouched",
      description: "If it hadn't been for my boss, transitioning from sports to employment would've been an uphill battle.",
      date: "2024-03-23",
      tags: {
        tag1: "Career",
        tag2: "Sports",
        tag3: null
      }
    },
    {
      title: "Dwindling",
      description: "There were no medicines in Bangladesh that could keep my mother from suffering.",
      date: "2024-03-21",
      tags: {
        tag1: "Family",
        tag2: "Health",
        tag3: "Grief"
      }
    },
    {
      title: "Finding Solace",
      description: "There were no medicines in Bangladesh that could keep my mother from suffering.",
      date: "2024-03-21",
      tags: {
        tag1: "Family",
        tag2: "Health",
        tag3: "Grief"
      }
    },
    {
      title: "Calabasas",
      description: "I found my brother living in a trailer park in Calabasas, and he turned me away.",
      date: "2024-03-18",
      tags: {
        tag1: "Family",
        tag2: "Travel",
        tag3: "Grief"
      }
    },
    {
      title: "Finding Saki",
      description: "I found my brother living in a trailer park in Santa Monica, and he turned me away.",
      date: "2024-03-18",
      tags: {
        tag1: "Family",
        tag2: "Travel",
        tag3: "Grief"
      }
    },
    {
      title: "Cousins!",
      description: "How special it was that my cousins would walk to school every morning!",
      date: "2024-03-15",
      tags: {
        tag1: "Family",
        tag2: "Childhood",
        tag3: null
      }
    },
    {
      title: "First Cricket Bat",
      description: "We were the first ever cricket team, and had to find our own way to learn discipline.",
      date: "2024-03-15",
      tags: {
        tag1: "Sports",
        tag2: "Childhood",
        tag3: null
      }
    },
    {
      title: "The Tigers",
      description: "We were the first ever cricket team, and had to find our own way to learn discipline.",
      date: "2024-03-15",
      tags: {
        tag1: "Sports",
        tag2: "Childhood",
        tag3: null
      }
    }
  ];

  // Sort stories based on date
  const sortedStories = [...stories].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "newest" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCF5]">
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="max-w-6xl mx-auto w-full p-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Ex. college"
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-b-gray-500 transition-colors"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gray-900 text-white rounded-md">
                Search
              </button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Baby size={18} className="stroke-black" /> Childhood
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Trophy size={18} className="stroke-black" /> Sports
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Palette size={18} className="stroke-black" /> Hobbies
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Landmark size={18} className="stroke-black" /> Career
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Target size={18} className="stroke-black" /> Proud moments
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Plane size={18} className="stroke-black" /> Travel
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Heart size={18} className="stroke-black" /> Grief
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <Users size={18} className="stroke-black" /> Family
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
              <HeartHealth size={18} className="stroke-black" /> Health
            </button>
          </div>

          {/* Stories Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Stories</h2>
            <select 
              className="border rounded-md px-3 py-1.5"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
            >
              <option value="newest">Most recent</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedStories.map((story, index) => (
              <div key={`${story.title}-${index}`} className="relative aspect-square group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transition-all duration-300 group-hover:from-orange-500 group-hover:to-orange-700 group-hover:scale-[1.03] group-hover:border-0"></div>
                <div className="absolute inset-0 bg-black/20 rounded-lg group-hover:border-0"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white transition-transform duration-300 group-hover:scale-105 origin-bottom-left">
                  <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                  <p className="text-sm mb-4">{story.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {story.tags.tag1 && (
                      <span className="text-xs px-2 py-1 bg-white/20 rounded-full border border-white/40">{story.tags.tag1}</span>
                    )}
                    {story.tags.tag2 && (
                      <span className="text-xs px-2 py-1 bg-white/20 rounded-full border border-white/40">{story.tags.tag2}</span>
                    )}
                    {story.tags.tag3 && (
                      <span className="text-xs px-2 py-1 bg-white/20 rounded-full border border-white/40">{story.tags.tag3}</span>
                    )}
                  </div>
                  <p className="text-xs opacity-75">{new Date(story.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl">Finding Home</h3>
              <p className="text-gray-600 text-sm mt-2">© 2024 Finding Home. All rights reserved.</p>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                    Your Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-gray-600 hover:text-gray-900">
                    All Stories
                  </Link>
                </li>
                <li>
                  <Link href="/submit" className="text-gray-600 hover:text-gray-900">
                    Submit a Story
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}