import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import IssueListFilter from './IssueStatusFilter'

const IssueActions = () => {
  return (
    <Flex  justify='between' >
      <IssueListFilter />
        <Button>
          <Link href='/issues/new'>New Issue</Link>
        </Button>
      </Flex>
  )
}

export default IssueActions