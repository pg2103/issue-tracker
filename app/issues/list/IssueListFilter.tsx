'use client'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React from 'react'

type StatusOption = {
  label: string;
  value: Status | 'no-filter';
};


const statuses: StatusOption[] = [
  { label: 'All', value: 'no-filter' }, 
  { label: 'Open', value: Status.OPEN },
  { label: 'In Progress', value: Status.IN_PROGRESS },
  { label: 'Done', value: Status.DONE },
];

const IssueListFilter = () => {
  return (
   <Select.Root>
    <Select.Trigger placeholder='Filder by...'/>
    <Select.Content>
        {statuses.map((status)=>(
            <Select.Item key={status.value} value={status.value}>
              {status.label}
            </Select.Item>
        ))}
    </Select.Content>
   </Select.Root>
  )
}

export default IssueListFilter