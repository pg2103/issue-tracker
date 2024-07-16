import { Skeleton } from '@/app/components'
import { Card, Flex } from '@radix-ui/themes'


const IssueDetailPage =async () => {
 
return (
  <div>
      <Skeleton/>
      <Flex className='space-x-3' my="2">
          <Skeleton width="5rem"/>
          <Skeleton width="8rem"/>
      </Flex>
     <Card className='prose'>
     <Skeleton count={3}/>
     </Card>
     
     

  </div>
)
}

export default IssueDetailPage