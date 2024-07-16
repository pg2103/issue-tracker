import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import {Pencil2Icon} from '@radix-ui/react-icons'
import Link from 'next/link'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'

interface Props{
    params:{id:string}
}
const IssueDetailPage =async ({params}:Props) => {
    const issue=await prisma.issue.findUnique({
        where:{
            id:parseInt(params.id)
        }
    })
    if(!issue){
         notFound();
    }
  return (
    <Grid columns={{initial:"1",md:"2"}}>
        <Box>

        <IssueDetails issue={issue}/>
            
        </Box>
        <Box>
            <EditIssueButton issueId={issue.id}/>
        </Box>
    </Grid>
  )
}

export default IssueDetailPage