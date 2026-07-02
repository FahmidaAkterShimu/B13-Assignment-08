const Loading = () => {
    return (
        <div className="bg-background min-h-screen px-6 lg:px-12 py-10">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-10 animate-pulse">
                    <div className="h-4 w-28 rounded bg-primary/10 mb-3" />
                    <div className="h-10 w-64 rounded bg-muted mb-4" />
                    <div className="h-5 w-full max-w-2xl rounded bg-muted/70" />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Skeleton */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <div className="rounded-2xl border border-border bg-card p-5 space-y-6 shadow-sm animate-pulse">
                            {/* Search */}
                            <div className="space-y-3">
                                <div className="h-5 w-24 rounded bg-muted" />
                                <div className="h-11 w-full rounded-xl bg-muted/70" />
                            </div>

                            {/* Categories */}
                            <div className="space-y-3">
                                <div className="h-5 w-28 rounded bg-muted" />
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div
                                        key={item}
                                        className="h-10 w-full rounded-xl bg-muted/70"
                                    />
                                ))}
                            </div>

                            {/* Availability */}
                            <div className="space-y-3">
                                <div className="h-5 w-24 rounded bg-muted" />
                                <div className="h-10 w-full rounded-xl bg-muted/70" />
                                <div className="h-10 w-full rounded-xl bg-muted/70" />
                            </div>

                            {/* Button */}
                            <div className="h-11 w-full rounded-xl bg-primary/20" />
                        </div>
                    </aside>

                    {/* Books Section */}
                    <div className="flex-1 min-w-0">
                        {/* top row */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 animate-pulse">
                            <div className="h-5 w-32 rounded bg-muted" />
                            <div className="h-11 w-full sm:w-52 rounded-xl bg-muted/70" />
                        </div>

                        {/* Book Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((book) => (
                                <div
                                    key={book}
                                    className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
                                >
                                    {/* Image */}
                                    <div className="h-72 bg-muted animate-pulse" />

                                    {/* Content */}
                                    <div className="p-5 space-y-4 animate-pulse">
                                        {/* category badge */}
                                        <div className="h-5 w-16 rounded-full bg-primary/10" />

                                        {/* title */}
                                        <div className="space-y-2">
                                            <div className="h-6 w-4/5 rounded bg-muted" />
                                            <div className="h-6 w-2/3 rounded bg-muted" />
                                        </div>

                                        {/* author */}
                                        <div className="h-4 w-28 rounded bg-muted/70" />

                                        {/* rating */}
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-20 rounded bg-muted/70" />
                                            <div className="h-4 w-10 rounded bg-muted/70" />
                                        </div>

                                        {/* bottom row */}
                                        <div className="flex items-center justify-between pt-2">
                                            <div className="h-4 w-16 rounded bg-muted/70" />
                                            <div className="h-9 w-24 rounded-lg bg-primary/10" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Skeleton */}
                        <div className="flex justify-center gap-3 mt-10 animate-pulse">
                            <div className="h-10 w-10 rounded-xl bg-muted/70" />
                            <div className="h-10 w-10 rounded-xl bg-primary/20" />
                            <div className="h-10 w-10 rounded-xl bg-muted/70" />
                            <div className="h-10 w-10 rounded-xl bg-muted/70" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;