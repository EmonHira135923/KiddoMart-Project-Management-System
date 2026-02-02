import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6">
              Welcome to <span className="text-blue-500">Kiddo</span>
              <span className="text-orange-500">Mart</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Explore a world of joy! Discover premium quality toys, trendy
              fashion, and essentials designed specifically for your little
              ones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Shop Now 🛍️
              </Link>
              <Link
                href="/categories"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all active:scale-95"
              >
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Quick Features Section --- */}
      <section className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform block w-fit">
                🚚
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fast Delivery
              </h3>
              <p className="text-slate-400 text-sm">
                We deliver your happiness to your doorstep within 24-48 hours.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-colors group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform block w-fit">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Safe Materials
              </h3>
              <p className="text-slate-400 text-sm">
                All our products are 100% non-toxic and safety-certified for
                kids.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-green-500/50 transition-colors group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform block w-fit">
                🎁
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Gift Packing
              </h3>
              <p className="text-slate-400 text-sm">
                Make every occasion special with our premium gift wrapping
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
