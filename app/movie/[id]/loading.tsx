import LoadingSkeleton from '@/components/LoadingSkeleton'

export default function MovieLoading() {
    return (
        <div className="max-w-[1400px] mx-auto px-4 pt-20">
            <LoadingSkeleton rows={1} />
        </div>
    )
}
