'use client'
import { Button, Callout, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import {useForm,Controller} from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import delay from 'delay';
type IssueForm=z.infer<typeof createIssueSchema>

const NewIssuePage = async() => {
  
  const router=useRouter();
  const {register,control,handleSubmit,formState:{errors}} = useForm<IssueForm>({
    resolver:zodResolver(createIssueSchema)
  })

  const[error,setError]=useState('')
  const [loading, setLoading] = useState(false)
  const onSubmit=handleSubmit(async(data)=>{
    try {
     setLoading(true)
     await axios.post('/api/issues',data) 
     router.push('/issues')
    } catch (error) {
       setLoading(false)
     setError('An unexpected error occured')
    }
   })
   await delay(2000)
  return (
    <div className='max-w-xl'>
      {error&&<Callout.Root color='red'  className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form 
    className=' space-y-3 '
    onSubmit={onSubmit}>
        <TextField.Root  placeholder ='Title' {...register('title')}>
        </TextField.Root>
        <ErrorMessage >{errors.title?.message}</ErrorMessage>
        <Controller 
          name='description'
          control={control}
          render={({field})=> < SimpleMDE placeholder='Description' {...field}/>}
        />
        <ErrorMessage >{errors.description?.message}</ErrorMessage>
        <Button>Submit New Issue{loading&&<Spinner/>}</Button>
    </form>
    </div>
  )
}

export default NewIssuePage