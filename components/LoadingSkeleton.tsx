'use client'

export default function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
    return (
        <div className="space-y-6 animate-pulse pt-24">
            <div className="h-[50vh] w-full rounded-lg bg-gradient-to-r from-white/3 to-white/6" />
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i}>
                    <div className="h-6 w-48 bg-white/5 rounded mb-3" />
                    <div className="flex gap-4 overflow-hidden pb-2">
                        {Array.from({ length: 8 }).map((__, j) => (
                            <div key={j} className="min-w-[140px] h-40 bg-white/6 rounded" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
