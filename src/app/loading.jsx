const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero / top section skeleton */}
            <section className="px-6 lg:px-12 pt-10 pb-14">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left content */}
                    <div className="space-y-5 animate-pulse">
                        <div className="h-8 w-40 rounded-full bg-primary/10" />
                        <div className="space-y-3">
                            <div className="h-14 w-72 rounded-lg bg-muted" />
                            <div className="h-14 w-64 rounded-lg bg-muted" />
                            <div className="h-6 w-full max-w-xl rounded bg-muted/70" />
                            <div className="h-6 w-5/6 rounded bg-muted/70" />
                        </div>

                        <div className="flex flex-wrap gap-4 pt-3">
                            <div className="h-12 w-40 rounded-xl bg-yellow-400/70" />
                            <div className="h-12 w-40 rounded-xl bg-card border border-border" />
                        </div>
                    </div>

                    {/* Right image grid skeleton */}
                    <div className="grid grid-cols-2 gap-4 animate-pulse">
                        <div className="h-72 rounded-3xl bg-muted" />
                        <div className="h-60 rounded-3xl bg-muted mt-8" />
                        <div className="h-60 rounded-3xl bg-muted" />
                        <div className="h-72 rounded-3xl bg-muted -mt-8" />
                    </div>
                </div>
            </section>

            {/* Stats skeleton */}
            <section className="border-y border-border bg-card/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="flex flex-col items-center gap-3 animate-pulse"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10" />
                            <div className="h-6 w-20 rounded bg-muted" />
                            <div className="h-4 w-28 rounded bg-muted/70" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured books skeleton */}
            <section className="px-6 lg:px-12 py-14">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="space-y-3 animate-pulse">
                            <div className="h-4 w-32 rounded bg-primary/10" />
                            <div className="h-10 w-56 rounded bg-muted" />
                        </div>
                        <div className="h-5 w-20 rounded bg-muted animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((book) => (
                            <div
                                key={book}
                                className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
                            >
                                <div className="h-72 bg-muted animate-pulse" />
                                <div className="p-5 space-y-3 animate-pulse">
                                    <div className="h-5 w-24 rounded-full bg-primary/10" />
                                    <div className="h-6 w-4/5 rounded bg-muted" />
                                    <div className="h-4 w-2/3 rounded bg-muted/70" />
                                    <div className="h-4 w-24 rounded bg-muted/70" />
                                    <div className="flex justify-between items-center pt-2">
                                        <div className="h-4 w-16 rounded bg-muted/70" />
                                        <div className="h-4 w-14 rounded bg-muted/70" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA skeleton */}
            <section className="px-6 lg:px-12 pb-16">
                <div className="max-w-7xl mx-auto rounded-3xl bg-primary p-10 lg:p-14">
                    <div className="max-w-2xl mx-auto text-center space-y-4 animate-pulse">
                        <div className="h-10 w-72 mx-auto rounded bg-white/20" />
                        <div className="h-5 w-full max-w-xl mx-auto rounded bg-white/10" />
                        <div className="h-12 w-40 mx-auto rounded-xl bg-yellow-400/80" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoadingPage;