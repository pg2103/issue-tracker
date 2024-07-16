import { Box } from '@radix-ui/themes'
import { Skeleton } from '@/app/components'

const LoadingNewIssuePage = () => {
  return (
    <>
    <Box className='max-w-xl' >
      <Skeleton className='mb-3 ' height="2rem"/>
      <Skeleton height="23rem"/>
    </Box>
    <Skeleton className='mt-11 ' width="8.5rem" height="2rem"/>
    </>
  )
}

export default LoadingNewIssuePage