import { useState } from "react";

export default function BudiClipPortfolio() {
  const [openVideo, setOpenVideo] = useState(null);

  const videos = [
    {
      title: "Gaming Shorts #1",
      id: "7602527551772232981",
    },
    {
      title: "Gaming Shorts #2",
      id: "7629587202095189266",
    },
    {
      title: "Gaming Shorts #3",
      id: "7616693182348152085",
    },
    {
      title: "Gaming Shorts #4",
      id: "7644125908856556821",
    },
    {
      title: "Gaming Shorts #5",
      id: "7645188848896593172",
    },
  ];

  return (
    <>
      {openVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
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
              src="/Budi Clip Logo.png"
              alt="Budi Clip Logo"
              className="w-36 h-36 rounded-full shadow-2xl mb-8"
            />

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Budi <span className="text-purple-400">Clip</span>
            </h1>

            <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Short-form gaming editor focused on high-retention cuts, strong pacing,
              and content engineered to keep viewers watching.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">1+</h3>
                <p className="text-zinc-400 mt-2">Years Experience</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">&lt;12h</h3>
                <p className="text-zinc-400 mt-2">Fast Delivery</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">Gaming</h3>
                <p className="text-zinc-400 mt-2">Short-Form Focus</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#work" className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition inline-block">
                View Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-purple-400 transition inline-block">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="px-6 py-24 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setOpenVideo(video.id)}
                className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-purple-500 transition cursor-pointer"
              >
                <div className="aspect-[9/16] rounded-2xl bg-zinc-800 mb-4 flex items-center justify-center hover:bg-zinc-700 transition">
                  <div className="text-center">
                    <p className="text-lg font-semibold">▶ Watch Edit</p>
                    <p className="text-sm text-zinc-400 mt-2">Click to preview</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="text-zinc-400 mt-2">{video.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-24 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Services</h2>
            <div className="grid md:grid-cols-3 gap-6 text-zinc-300">
              <div className="p-6 bg-zinc-900 rounded-2xl">Short-form Editing</div>
              <div className="p-6 bg-zinc-900 rounded-2xl">Gaming Highlights</div>
              <div className="p-6 bg-zinc-900 rounded-2xl">TikTok / Reels Optimization</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Interested in working together, discussing a project, or getting a quote?
          Feel free to send me a DM through TikTok or Instagram.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
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

        <footer className="px-6 py-16 border-t border-zinc-900 text-center text-zinc-500">
          <p>© 2026 Budi Clip — Built for creators who want attention.</p>
        </footer>
      </div>
    </>
  );
}