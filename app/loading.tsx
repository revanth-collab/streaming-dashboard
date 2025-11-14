import LoadingSkeleton from '@/components/LoadingSkeleton'

export default function Loading() {
    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <LoadingSkeleton rows={3} />
        </div>
    )
}
