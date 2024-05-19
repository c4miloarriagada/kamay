import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonForm = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <div className='space-y-4'>
        <Skeleton className='h-12 w-full rounded-xl' />
        <Skeleton className='h-12 w-full rounded-xl' />
        <Skeleton className='h-24 w-full rounded-xl' />
        <Skeleton className='h-12 w-full rounded-xl' />
      </div>
    </div>
  )
}
