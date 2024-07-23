import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import IssueListFilter from './IssueListFilter'

const IssueActions = () => {
  return (
    <Flex mb='5' justify='between' >
      <IssueListFilter />
        <Button>
          <Link href='/issues/new'>New Issue</Link>
        </Button>
      </Flex>
  )
}

export default IssueActions