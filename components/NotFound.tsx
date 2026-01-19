export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#041612] to-[#0B2B24] flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-9xl font-black text-[#4CAF50] mb-4">404</h1>
                <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
                <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="/"
                        className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors font-semibold"
                    >
                        Go Home
                    </a>
                    <a
                        href="/insights"
                        className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold border border-white/20"
                    >
                        Browse Insights
                    </a>
                </div>
            </div>
        </div>
    );
}
