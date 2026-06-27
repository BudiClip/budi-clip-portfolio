import { useState } from "react";

export default function BudiClipPortfolio() {
  const [openVideo, setOpenVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // GANTI INI DENGAN EMAIL BISNIS LO
  const contactEmail = "satrioimron284@gmail.com";

  const tiktokVideos = [
    {
      title: "Reaction + Subtitle Edit",
      id: "7602527551772232981",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_1.png`,
    },
    {
      title: "Funny Stream Moment Edit",
      id: "7629587202095189266",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_2.png`,
    },
    {
      title: "Reaction + Subtitle Edit",
      id: "7616693182348152085",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_3.png`,
    },
    {
      title: "Highlight Stream Moment",
      id: "7644125908856556821",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_4.png`,
    },
    {
      title: "Funny Stream Moment Edit",
      id: "7645188848896593172",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_5.png`,
    },
    {
      title: "Funny Stream Moment Edit",
      id: "7646465610372730132",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_6.png`,
    },
    {
      title: "Stream Highlight Shorts",
      id: "7648252893190950165",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_7.png`,
    },
    {
      title: "Talking Head",
      id: "7652721216872090898",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_8.png`,
    },
    {
      title: "Talking Head",
      id: "7651231835208436999",
      thumbnail: `${import.meta.env.BASE_URL}thumbnails/tiktok-thumbnail_9.png`,
    },
  ];

  const youtubeVideos = [
    {
      title: "Funny Gaming Short - Indonesian",
      id: "2iD40AjaVw4",
      thumbnail: "https://img.youtube.com/vi/2iD40AjaVw4/maxresdefault.jpg",
      details: "Short-form gaming edit with subtitles, cuts, memes, and pacing.",
    },
    {
      title: "Funny Gaming Short - English",
      id: "5FFoKb-4_Pw",
      thumbnail: "https://img.youtube.com/vi/5FFoKb-4_Pw/maxresdefault.jpg",
      details: "English gaming short edited for fast pacing and viewer retention.",
    },
  ];

  const longFormVideos = [
    {
      title: "Unofficial Sample Edit Roblox",
      thumbnail: "https://img.youtube.com/vi/gYRpcBNFUAc/maxresdefault.jpg",
      url: "https://youtu.be/gYRpcBNFUAc",
      duration: "11:07",
      type: "Long-form Roblox video",
      details:
        "Roblox Video edited for pacing, storytelling, subtittles, memes, SFX, and retention.",
    },
    {
      title: "Meme Style Sample Edit (unofficial)",
      thumbnail: "https://img.youtube.com/vi/2e0BGYoR92A/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=2e0BGYoR92A",
      duration: "0:30",
      type: "Long-form YouTube video",
      details:
        "Meme Video",
    },
    {
      title: "Roblox Long-Form Gaming Video",
      thumbnail: "https://img.youtube.com/vi/sthTQBiU8gc/maxresdefault.jpg",
      url: "https://youtu.be/sthTQBiU8gc",
      duration: "18:22",
      type: "Long-form YouTube video",
      details:
        "Edited for pacing, storytelling, subtitles, memes, SFX, and viewer retention.",
    },
    {
      title: "Roblox Challenge / Story-Driven Edit",
      thumbnail: "https://img.youtube.com/vi/TuaLd4koFJI/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=TuaLd4koFJI",
      duration: "19:02",
      type: "Long-form YouTube video",
      details:
        "Structured gameplay footage into a cleaner and more engaging YouTube video.",
    },
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "longform", label: "Long-Form Videos" },
    { id: "shorts", label: "Short-Form Clips" },
    { id: "tiktok", label: "TikTok / Reels" },
  ];

  return (
    <>
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative w-[350px] md:w-[400px] h-[600px] md:h-[700px] bg-black rounded-2xl overflow-hidden">
            <iframe
              src={`https://www.tiktok.com/embed/v2/${openVideo}`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
            />
          </div>

          <button
            onClick={() => setOpenVideo(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>
        </div>
      )}

      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
        {/* Hero */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center px-6"
          id="top"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Budi Clip Logo"
              className="w-36 h-36 rounded-full shadow-2xl mb-8"
            />

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Budi <span className="text-purple-400">Clip</span>
            </h1>

            <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Gaming video editor for YouTube creators — turning raw gameplay
              and stream footage into engaging long-form videos, stream
              highlights, and short-form clips with strong pacing, clean
              subtitles, memes, SFX, and retention-focused cuts.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">1+</h3>
                <p className="text-zinc-400 mt-2">Years Experience</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">
                  Long + Short
                </h3>
                <p className="text-zinc-400 mt-2">YouTube Editing</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">Gaming</h3>
                <p className="text-zinc-400 mt-2">Retention-Focused</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4 flex-wrap justify-center">
              <a
                href="#work"
                className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition inline-block"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-purple-400 transition inline-block"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section id="work" className="pt-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>

          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            A selection of long-form gaming videos, stream highlights, and
            short-form clips edited for pacing, retention, and engagement.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition duration-200 ${
                  activeCategory === cat.id
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Long Form Projects */}
        {(activeCategory === "all" || activeCategory === "longform") && (
          <section className="px-6 pb-24 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-zinc-400">
              Featured Long-Form Projects
            </h2>

            <div className="space-y-6">
              {longFormVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500 transition"
                >
                  <div className="md:flex">
                    <div className="md:w-[420px] relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-center">
                      <p className="text-purple-400 font-medium mb-2">
                        {video.type}
                      </p>

                      <h3 className="text-2xl font-bold mb-3">
                        {video.title}
                      </h3>

                      <p className="text-zinc-400 leading-relaxed">
                        {video.details}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* YouTube Shorts */}
        {(activeCategory === "all" || activeCategory === "shorts") && (
          <section
            className={`px-6 pb-24 max-w-6xl mx-auto ${
              activeCategory === "all" ? "border-t border-zinc-900 pt-24" : ""
            }`}
          >
            <h2 className="text-2xl font-bold mb-8 text-zinc-400">
              Featured Short-Form Clips
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {youtubeVideos.map((video, index) => (
                <a
                  key={index}
                  href={`https://youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-red-500 transition"
                >
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-red-600 rounded-xl px-4 py-2 text-white text-3xl">
                        ▶
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {video.details}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* TikTok Work */}
        {(activeCategory === "all" || activeCategory === "tiktok") && (
          <section
            className={`px-6 pb-24 max-w-6xl mx-auto ${
              activeCategory === "all" ? "border-t border-zinc-900 pt-24" : ""
            }`}
          >
            <h2 className="text-2xl font-bold mb-8 text-zinc-400">
              Featured TikTok / Reels Work
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {tiktokVideos.map((video, index) => (
                <div
                  key={index}
                  onClick={() => setOpenVideo(video.id)}
                  className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-purple-500 transition cursor-pointer"
                >
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden mb-4 group">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-red-600 rounded-xl px-4 py-2 text-white text-3xl shadow-xl">
                        ▶
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold">{video.title}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Services */}
        <section className="px-6 py-24 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">What I Can Help With</h2>

            <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
              Editing support for gaming creators who need stronger YouTube
              videos, better stream highlights, and short-form clips for
              distribution.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-zinc-300">
              <div className="p-6 bg-zinc-900 rounded-2xl">
                Long-form YouTube Videos
              </div>

              <div className="p-6 bg-zinc-900 rounded-2xl">
                Stream Highlights
              </div>

              <div className="p-6 bg-zinc-900 rounded-2xl">
                Gaming Challenge Edits
              </div>

              <div className="p-6 bg-zinc-900 rounded-2xl">
                Shorts / TikToks / Reels
              </div>

              <div className="p-6 bg-zinc-900 rounded-2xl">
                Subtitles, Memes & SFX
              </div>

              <div className="p-6 bg-zinc-900 rounded-2xl">
                Retention-Focused Pacing
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-24 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Simple Workflow</h2>

            <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
              A simple editing process so creators can quickly see the style,
              review the edit, and move forward without overcomplicating things.
            </p>

            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-purple-400 font-bold mb-2">01</p>
                <h3 className="font-semibold mb-2">Send Footage</h3>
                <p className="text-zinc-400 text-sm">
                  Send raw gameplay, stream footage, or a video link.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-purple-400 font-bold mb-2">02</p>
                <h3 className="font-semibold mb-2">Editing</h3>
                <p className="text-zinc-400 text-sm">
                  I edit the footage with pacing, subtitles, memes, SFX, and
                  structure.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-purple-400 font-bold mb-2">03</p>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-zinc-400 text-sm">
                  You review the edit and send any notes or revisions.
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <p className="text-purple-400 font-bold mb-2">04</p>
                <h3 className="font-semibold mb-2">Final Delivery</h3>
                <p className="text-zinc-400 text-sm">
                  Final video is delivered clean and ready to upload.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="px-6 py-24 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Why Creators Work With Me
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-zinc-900 rounded-2xl p-6">
                🎮 Gaming-focused editing style
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                📺 Long-form and short-form experience
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                ✂️ Strong pacing, subtitles, memes, and SFX
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                📈 Edited with retention and viewer engagement in mind
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-6 py-24 border-t border-zinc-900 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Need a gaming editor for your YouTube videos, stream highlights, or
            short-form clips?
            <br />
            <br />
            Send me your footage or channel link, and I can help turn it into
            stronger content.
            <br />
            Long-form editing. Clean subtitles. Strong pacing.
            Retention-focused cuts.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${contactEmail}`}
              className="px-5 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.tiktok.com/@budiclip"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition"
            >
              TikTok
            </a>

            <a
              href="https://www.instagram.com/budiclip/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition"
            >
              Instagram
            </a>
          </div>
        </section>

        <footer className="px-6 py-16 border-t border-zinc-900 text-center text-zinc-500">
          <p>© 2026 Budi Clip — Built for creators who want attention.</p>
        </footer>
      </div>
    </>
  );
}