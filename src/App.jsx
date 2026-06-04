import { useState } from "react";

export default function BudiClipPortfolio() {
  const [openVideo, setOpenVideo] = useState(null);

  const tiktokVideos = [
    {
      title: "Reaction + Subtitle Edit",
      id: "7602527551772232981",
      thumbnail:
      "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oQKps1qfAAAsARMHgEFCgmcDLfRuxoZEBECCBI~tplv-tiktokx-origin.image?dr=14575&x-expires=1780758000&x-signature=CK4SNTaXrIx0FCGpTItec0yLUmI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
    },
    {
      title: "Funny Stream Moment Edit",
      id: "7629587202095189266",
      thumbnail:
      "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUch80vbiTmGAisDzAUEAwgvMhAeBmByBIIPKQ~tplv-tiktokx-origin.image?dr=14575&x-expires=1780758000&x-signature=VMi7IR0xGWhtkbBMqXyoJxj9tY4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
    },
    {
      title: "Reaction + Subtitle Edit",
      id: "7616693182348152085",
      thumbnail:
      "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUcsBf3SEiNUIi7T4ApgiCJzEuRfAAxYCBXAqT~tplv-tiktokx-origin.image?dr=14575&x-expires=1780758000&x-signature=3JAjV64jOkxcbTZlnHvZ%2Ba1AcCM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
    },
    {
      title: "Highlight Stream Moment",
      id: "7644125908856556821",
      thumbnail:
      "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oUy7jFuEEQAIgCFHWqfQwAJARAsIqDcOBAeBCl~tplv-tiktokx-dmt-logom:tos-alisg-i-0068/o4AVAAy5jnPEBhKiVyAVMYYZBAIaAiwkGBRAE.image?dr=14573&x-expires=1780758000&x-signature=QVa5sWewiZtDNA%2BVByXY%2BPNeHbQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
    },
    {
      title: "Funny Stream Moment Edit",
      id: "7645188848896593172",
      thumbnail:
      "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/oMESZPAlYkiIAzuYnA9ioigr6oBaghAnAAqAK~tplv-tiktokx-origin.image?dr=14575&x-expires=1780758000&x-signature=yT9VOenGAZDNRtFtTEYP%2F%2F3VlbQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",
    },
    {
      title: "Funny Stream Moment Edit",
      id: "7646465610372730132",
      thumbnail:
      "https://p16-common-sign.tiktokcdn.com/tos-alisg-p-0037/o8ObAGdIsAL2DpxeIAc734U3ZAjvOAeVIQfEAF~tplv-tiktokx-origin.image?dr=14575&x-expires=1780761600&x-signature=Lv80qgsVG%2FN7niO5FuM72vxNbSQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=my2",

    },
  ];

  const youtubeVideos = [
    {
      title: "Funny Gaming Short",
      id: "2iD40AjaVw4",
      thumbnail: "https://img.youtube.com/vi/2iD40AjaVw4/maxresdefault.jpg",
    },
  ];

  const longFormVideos = [
    {
      title: "Roblox Long-Form Edit",
      thumbnail: `https://img.youtube.com/vi/sthTQBiU8gc/maxresdefault.jpg`,
      url: "https://youtu.be/sthTQBiU8gc",
      duration: "18:22",
    },

    {
      title: "Roblox Long-Form Edit",
      thumbnail: `https://img.youtube.com/vi/TuaLd4koFJI/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=TuaLd4koFJI",
      duration: "19:02",
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
              src={`${import.meta.env.BASE_URL}logo.png`}
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
          <h2 className="text-4xl font-bold mb-12">Featured TikTok Work</h2>

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

                <h3 className="text-xl font-semibold">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Shorts */}
        <section className="px-6 py-24 border-t border-zinc-900 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Featured YouTube Shorts
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

                <h3 className="text-xl font-semibold">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </section>

        {/* Long Form Projects */}
        <section className="px-6 py-24 border-t border-zinc-900 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Featured Long Form Projects
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
                  <div className="md:w-[400px] relative">
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
                    <h3 className="text-2xl font-bold mb-2">
                      {video.title}
                    </h3>

                    <p className="text-zinc-400">
                      Long-form gaming content edited for engagement,
                      pacing, and viewer retention.
                    </p>
                  </div>
                </div>
              </a>
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

        {/* Why Work With Me */}
        <section className="px-6 py-24 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Why Creators Work With Me
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-zinc-900 rounded-2xl p-6">
                ⚡ Fast turnaround (&lt;12h)
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                🎮 Gaming-focused editing
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                📱 Optimized for Shorts, TikTok, and Reels
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6">
                📈 Strong pacing and retention-focused cuts
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-6 py-24 border-t border-zinc-900 text-center"
        >
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Need a gaming editor for TikTok, Reels, or Shorts?

            Let's work together.
            Fast delivery. Clean subtitles. High-retention pacing.
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
        </section>


        <footer className="px-6 py-16 border-t border-zinc-900 text-center text-zinc-500">
          <p>© 2026 Budi Clip — Built for creators who want attention.</p>
        </footer>
      </div>
    </>
  );
}