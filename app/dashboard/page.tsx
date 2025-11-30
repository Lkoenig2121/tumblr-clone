"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Sidebar from "@/components/Sidebar";
import Post from "@/components/Post";
import VideoPost from "@/components/VideoPost";
import TrendingTag from "@/components/TrendingTag";
import TrendingBlog from "@/components/TrendingBlog";

export default function Dashboard() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("trending");
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tumblr-blue"></div>
      </div>
    );
  }

  const trendingTags = [
    {
      rank: 1,
      name: "dan and phil",
      subtitle: "amazingphil",
      color: "bg-gradient-to-br from-yellow-600 to-yellow-700",
    },
    {
      rank: 2,
      name: "my chemical romance",
      subtitle: "mcr",
      color: "bg-gradient-to-br from-orange-600 to-orange-700",
    },
    {
      rank: 3,
      name: "star wars",
      subtitle: "star wars rebels",
      color: "bg-gradient-to-br from-red-700 to-red-900",
    },
    {
      rank: 4,
      name: "wicked for good",
      subtitle: "glinda upland",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
    },
  ];

  // Trending posts - mix of popular content
  const trendingPosts = [
    {
      id: "t1",
      type: "text",
      username: "boag",
      content:
        "Why does everyone think fiction is just fantasy wish fulfillment now and not like an exploration of themes and ideas",
      tags: ["fiction", "writing", "literature"],
      notes: 5,
      reblogs: 13,
      likes: 20,
    },
    {
      id: "t2",
      type: "text",
      username: "wumlings",
      content: `LBH: Should I get rid of that terrible System for you?

SY's System: Noooo don't kick me out I'm just a little guy and I need to pay my employees!!

SY: [apparently forgets the time System trapped him in a dreamscape where Bing-ge ripped his limbs off]

SY: It's just a little guy that needs to pay its employees :(`,
      tags: [
        "bruh it literally got you Tortured but ok",
        "svsss",
        "scum villain",
        "new extras",
        "shen yuan",
        "luo binghe",
      ],
      notes: 6,
      reblogs: 100,
      likes: 468,
    },
    {
      id: "t3",
      type: "text",
      username: "lawfullybenjamin",
      content:
        "The way social media has changed how we communicate is fascinating. We've created entirely new forms of expression.",
      tags: ["thoughts", "social media", "communication"],
      notes: 12,
      reblogs: 234,
      likes: 567,
    },
    {
      id: "t4",
      type: "text",
      username: "cryptic-forge",
      content:
        "creatures creatures! i was looking for a creature to draw and ended up with several little guys",
      tags: ["art", "creatures", "digital art"],
      notes: 45,
      reblogs: 890,
      likes: 2300,
    },
  ];

  // Staff Picks - curated high-quality content
  const staffPicks = [
    {
      id: "s1",
      type: "text",
      username: "artistic-minds",
      content:
        "The intersection of technology and art creates something truly magical. When code becomes poetry and pixels become paint.",
      tags: ["art", "technology", "creativity", "digital art"],
      notes: 234,
      reblogs: 567,
      likes: 1200,
    },
    {
      id: "s2",
      type: "text",
      username: "philosophy-daily",
      content:
        "We are not just observers of the universe, but participants in its ongoing creation. Every thought, every action, every moment shapes reality.",
      tags: ["philosophy", "existence", "consciousness", "reality"],
      notes: 456,
      reblogs: 789,
      likes: 2100,
    },
    {
      id: "s3",
      type: "text",
      username: "nature-lover",
      content:
        "Found this beautiful sunset today. Sometimes the best moments are the ones we stumble upon by accident.",
      tags: ["nature", "photography", "sunset", "beauty"],
      notes: 123,
      reblogs: 234,
      likes: 890,
    },
    {
      id: "s4",
      type: "text",
      username: "poetry-corner",
      content: `In the silence between words,
      meaning finds its voice.
      In the space between thoughts,
      truth reveals itself.`,
      tags: ["poetry", "writing", "reflection", "mindfulness"],
      notes: 345,
      reblogs: 678,
      likes: 1500,
    },
  ];

  // Video posts - varied heights for masonry layout
  const videoPosts = [
    {
      id: "v1",
      type: "video",
      username: "video-creator",
      content:
        "Check out this amazing timelapse of a city at night! The way the lights come alive as darkness falls is absolutely mesmerizing. I spent hours capturing this footage from multiple angles.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: [
        "video",
        "timelapse",
        "city",
        "night",
        "photography",
        "urban",
        "lights",
        "aesthetic",
      ],
      notes: 1234,
      reblogs: 567,
      likes: 8900,
      duration: "2:34",
    },
    {
      id: "v2",
      type: "video",
      username: "music-vibes",
      content: "New music video just dropped! What do you think?",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
      tags: ["music", "video", "new release", "art"],
      notes: 2345,
      reblogs: 1234,
      likes: 12000,
      duration: "3:45",
    },
    {
      id: "v3",
      type: "video",
      username: "tutorial-master",
      content:
        "Quick tutorial on how to create amazing digital art! In this video, I'll walk you through my entire process from sketch to final piece. We'll cover color theory, composition, and some advanced techniques that will take your art to the next level. Make sure to subscribe for more tutorials!",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
      tags: [
        "tutorial",
        "art",
        "digital",
        "how-to",
        "digital art",
        "tutorial",
        "procreate",
        "photoshop",
        "art tips",
      ],
      notes: 890,
      reblogs: 456,
      likes: 3400,
      duration: "5:12",
    },
    {
      id: "v4",
      type: "video",
      username: "comedy-central",
      content: "This made me laugh way too hard 😂",
      videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
      tags: ["comedy", "funny", "laugh", "entertainment"],
      notes: 5678,
      reblogs: 2345,
      likes: 15000,
      duration: "1:23",
    },
    {
      id: "v5",
      type: "video",
      username: "nature-docs",
      content:
        "The beauty of nature never ceases to amaze me. This documentary explores the hidden world of forest ecosystems and the incredible creatures that call them home. From the smallest insects to the largest predators, every living thing plays a crucial role in maintaining the balance of these complex environments.",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      tags: [
        "nature",
        "documentary",
        "wildlife",
        "beautiful",
        "animals",
        "forest",
        "ecosystem",
        "conservation",
      ],
      notes: 1234,
      reblogs: 890,
      likes: 5600,
      duration: "4:56",
    },
    {
      id: "v6",
      type: "video",
      username: "short-clips",
      content: "Quick moment that made my day ✨",
      videoUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
      tags: ["short", "moment", "wholesome"],
      notes: 234,
      reblogs: 123,
      likes: 890,
      duration: "0:45",
    },
    {
      id: "v7",
      type: "video",
      username: "art-showcase",
      content:
        "Behind the scenes of my latest project! This took weeks to complete and I'm so excited to finally share it with you all. The process was challenging but incredibly rewarding. Let me know what you think in the comments below!",
      videoUrl: "https://www.youtube.com/embed/M7FIvfx5J10",
      tags: [
        "art",
        "behind the scenes",
        "process",
        "creative",
        "artist",
        "work in progress",
        "finished piece",
      ],
      notes: 890,
      reblogs: 456,
      likes: 2300,
      duration: "3:20",
    },
    {
      id: "v8",
      type: "video",
      username: "daily-vibes",
      content: "Just vibing",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
      tags: ["vibes", "chill"],
      notes: 45,
      reblogs: 23,
      likes: 156,
      duration: "0:30",
    },
  ];

  // Category-specific content for More dropdown
  const textPosts = [
    {
      id: "t1",
      type: "text",
      username: "random-thoughts",
      content:
        "You know what's wild? The fact that we're all just floating on a rock in space, worrying about what to have for dinner.",
      tags: ["thoughts", "philosophy", "random"],
      notes: 45,
      reblogs: 78,
      likes: 234,
    },
    {
      id: "t2",
      type: "text",
      username: "bookworm",
      content:
        "Just finished reading an incredible book. The way the author weaves together multiple storylines is masterful.",
      tags: ["books", "reading", "literature", "review"],
      notes: 123,
      reblogs: 234,
      likes: 567,
    },
    {
      id: "t3",
      type: "text",
      username: "tech-enthusiast",
      content:
        "The future of AI is both exciting and terrifying. We're creating tools that could reshape everything we know.",
      tags: ["technology", "AI", "future", "innovation"],
      notes: 234,
      reblogs: 456,
      likes: 890,
    },
  ];

  const photoPosts = [
    {
      id: "p1",
      type: "text",
      username: "photography-lover",
      content: "Golden hour in the city 🌆",
      tags: ["photography", "city", "golden hour", "urban"],
      notes: 567,
      reblogs: 234,
      likes: 1200,
    },
    {
      id: "p2",
      type: "text",
      username: "nature-shots",
      content: "Captured this beautiful sunset today",
      tags: ["nature", "sunset", "photography", "beautiful"],
      notes: 234,
      reblogs: 123,
      likes: 890,
    },
  ];

  const gifPosts = [
    {
      id: "g1",
      type: "text",
      username: "gif-master",
      content: "This perfectly captures my mood right now",
      tags: ["gif", "mood", "relatable", "funny"],
      notes: 890,
      reblogs: 456,
      likes: 2300,
    },
    {
      id: "g2",
      type: "text",
      username: "reaction-gifs",
      content: "When you finally understand the assignment",
      tags: ["gif", "reaction", "relatable", "mood"],
      notes: 567,
      reblogs: 234,
      likes: 1500,
    },
  ];

  const quotePosts = [
    {
      id: "q1",
      type: "text",
      username: "quote-collector",
      content:
        '"The only way to do great work is to love what you do." - Steve Jobs',
      tags: ["quote", "inspiration", "motivation", "wisdom"],
      notes: 1234,
      reblogs: 567,
      likes: 3400,
    },
    {
      id: "q2",
      type: "text",
      username: "wisdom-sharer",
      content: '"Be yourself; everyone else is already taken." - Oscar Wilde',
      tags: ["quote", "self-love", "authenticity", "wisdom"],
      notes: 890,
      reblogs: 456,
      likes: 2100,
    },
  ];

  const chatPosts = [
    {
      id: "c1",
      type: "text",
      username: "conversation-archive",
      content:
        "Person 1: Did you see that?\nPerson 2: See what?\nPerson 1: That thing!\nPerson 2: Oh yeah, that was wild",
      tags: ["chat", "conversation", "funny", "relatable"],
      notes: 234,
      reblogs: 123,
      likes: 567,
    },
  ];

  const audioPosts = [
    {
      id: "a1",
      type: "text",
      username: "music-sharer",
      content: "Currently obsessed with this track 🎵",
      tags: ["audio", "music", "song", "obsessed"],
      notes: 567,
      reblogs: 234,
      likes: 1200,
    },
  ];

  const askPosts = [
    {
      id: "ask1",
      type: "text",
      username: "ask-answerer",
      content:
        "Q: What's your favorite thing about today?\nA: The fact that I get to share this with all of you!",
      tags: ["ask", "question", "answer", "community"],
      notes: 123,
      reblogs: 45,
      likes: 234,
    },
  ];

  // More tab - default mix
  const morePosts = [
    ...textPosts.slice(0, 2),
    ...photoPosts.slice(0, 1),
    ...gifPosts.slice(0, 1),
  ];

  // Get content based on active tab
  const getCurrentContent = () => {
    switch (activeTab) {
      case "trending":
        return trendingPosts;
      case "staff":
        return staffPicks;
      case "videos":
        return videoPosts;
      case "text":
        return textPosts;
      case "photos":
        return photoPosts;
      case "gifs":
        return gifPosts;
      case "quotes":
        return quotePosts;
      case "chats":
        return chatPosts;
      case "audio":
        return audioPosts;
      case "asks":
        return askPosts;
      case "more":
        return morePosts;
      default:
        return trendingPosts;
    }
  };

  const currentContent = getCurrentContent();

  const trendingBlogs = [
    { name: "clarawinnie", description: "Clara Winnie" },
    { name: "cryptic-forge", description: "creatures creatures!" },
    { name: "sukapin", description: "i was looking for a..." },
    { name: "mads-schubert", description: "Art by Madison..." },
  ];

  return (
    <div className="min-h-screen bg-tumblr-dark">
      <Sidebar />

      <div className="ml-16 md:ml-64">
        {/* Top Navigation */}
        <div className="sticky top-0 z-30 bg-tumblr-darker border-b border-gray-700 overflow-visible">
          <div className="flex items-center justify-between px-4 md:px-6 py-4 relative overflow-visible">
            <div
              className="flex items-center space-x-1 overflow-x-auto flex-1"
              style={{ position: "static" }}
            >
              <h1 className="text-3xl font-bold text-white mr-4 hidden md:block">
                t
              </h1>
              <button
                onClick={() => {
                  setActiveTab("trending");
                  setShowMoreDropdown(false);
                }}
                className={`px-3 md:px-4 py-2 rounded-lg font-medium transition text-sm md:text-base whitespace-nowrap ${
                  activeTab === "trending"
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Trending
              </button>
              <button
                onClick={() => {
                  setActiveTab("staff");
                  setShowMoreDropdown(false);
                }}
                className={`px-3 md:px-4 py-2 rounded-lg font-medium transition text-sm md:text-base whitespace-nowrap ${
                  activeTab === "staff"
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Staff Picks
              </button>
              <button
                onClick={() => {
                  setActiveTab("videos");
                  setShowMoreDropdown(false);
                }}
                className={`px-3 md:px-4 py-2 rounded-lg font-medium transition text-sm md:text-base whitespace-nowrap ${
                  activeTab === "videos"
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Videos
              </button>
              <div style={{ position: "relative" }}>
                <button
                  className={`px-3 md:px-4 py-2 rounded-lg font-medium transition flex items-center text-sm md:text-base whitespace-nowrap ${
                    [
                      "text",
                      "photos",
                      "gifs",
                      "quotes",
                      "chats",
                      "audio",
                      "asks",
                    ].includes(activeTab)
                      ? "text-white bg-gray-800"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  More
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${
                      showMoreDropdown ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {showMoreDropdown && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      marginTop: "8px",
                      width: "176px",
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                      overflow: "hidden",
                      zIndex: 10000,
                    }}
                  >
                    <button
                      onClick={() => {
                        setActiveTab("text");
                        setShowMoreDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        backgroundColor:
                          activeTab === "text" ? "#f3f4f6" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== "text") {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== "text") {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      Text
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("photos");
                        setShowMoreDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        backgroundColor:
                          activeTab === "photos" ? "#f3f4f6" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== "photos") {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== "photos") {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      Photos
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("gifs");
                        setShowMoreDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        backgroundColor:
                          activeTab === "gifs" ? "#f3f4f6" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== "gifs") {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== "gifs") {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      GIFs
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("quotes");
                        setShowMoreDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        backgroundColor:
                          activeTab === "quotes" ? "#f3f4f6" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== "quotes") {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== "quotes") {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      Quotes
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("chats");
                        setShowMoreDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        backgroundColor:
                          activeTab === "chats" ? "#f3f4f6" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== "chats") {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== "chats") {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      Chats
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("audio");
                        setShowMoreDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        backgroundColor:
                          activeTab === "audio" ? "#f3f4f6" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== "audio") {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== "audio") {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      Audio
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("asks");
                        setShowMoreDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#111827",
                        backgroundColor:
                          activeTab === "asks" ? "#f3f4f6" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== "asks") {
                          e.currentTarget.style.backgroundColor = "#f9fafb";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== "asks") {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      Asks
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="p-2 text-gray-400 hover:text-white transition hidden sm:block">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Trending Tags (hidden below 768px and on Videos tab) */}
          {activeTab !== "videos" && (
            <div className="hidden md:block md:w-80 lg:w-96 p-4 md:p-6 md:border-r border-gray-700">
              <div className="grid grid-cols-2 gap-3">
                {trendingTags.map((tag) => (
                  <TrendingTag key={tag.rank} {...tag} />
                ))}
              </div>
            </div>
          )}

          {/* Center Column - Posts */}
          <div
            className={`flex-1 w-full p-4 md:p-6 mx-auto ${
              activeTab === "videos" ? "max-w-7xl" : "md:max-w-2xl lg:max-w-3xl"
            }`}
          >
            {/* Trending Tags on mobile (below 768px, hidden on Videos tab) */}
            {activeTab !== "videos" && (
              <div className="md:hidden mb-6">
                <div className="grid grid-cols-2 gap-3">
                  {trendingTags.map((tag) => (
                    <TrendingTag key={tag.rank} {...tag} />
                  ))}
                </div>
              </div>
            )}

            {/* Videos Tab - Masonry Layout */}
            {activeTab === "videos" ? (
              <div className="masonry-container">
                {currentContent.map((item) => {
                  if (item.type === "video" && "videoUrl" in item) {
                    return (
                      <div key={item.id} className="masonry-item">
                        <VideoPost {...(item as any)} />
                      </div>
                    );
                  } else {
                    return (
                      <div key={item.id} className="masonry-item">
                        <Post {...item} />
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              /* Other Tabs - Single Column */
              currentContent.map((item) => {
                if (item.type === "video" && "videoUrl" in item) {
                  return <VideoPost key={item.id} {...(item as any)} />;
                } else {
                  return <Post key={item.id} {...item} />;
                }
              })
            )}

            {/* Sign up banner */}
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-6 text-center">
              <p className="text-white text-base md:text-lg font-medium mb-4">
                Join over 100 million people using Tumblr to find their
                communities and make friends.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">
                  Sign up
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition">
                  Log in
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Trending Blogs (hidden below 1024px) */}
          <div className="hidden lg:block lg:w-80 xl:w-96 p-4 md:p-6 md:border-l border-gray-700">
            <div className="sticky top-24">
              <h2 className="text-white font-bold text-lg mb-4">
                Trending Blogs
              </h2>
              <div className="space-y-2">
                {trendingBlogs.map((blog) => (
                  <TrendingBlog key={blog.name} {...blog} />
                ))}
              </div>
              <button className="text-tumblr-blue hover:underline text-sm mt-4 w-full text-left">
                Show more blogs
              </button>

              <div className="mt-8">
                <h3 className="text-white font-bold text-lg mb-4">Sponsored</h3>
                <div className="bg-gray-800 rounded-lg p-4 h-40 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Ad Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
