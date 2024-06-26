'use client'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { createForm, sendContactEmail } from '../_actions/actions'
import { z } from 'zod'
import { useBoolean } from '@/hooks/useBoolean'
import { SkeletonForm } from './SkeletonForm'
import { useToast } from '@/components/ui/use-toast'

const ContactSchema = z.object({
  name: z.string().min(3, { message: 'Name must be valid' }),
  email: z.string().email({ message: 'Must be a valid Email' }),
  message: z
    .string()
    .min(10)
    .max(400, { message: 'Max length message is 400 characters' })
})

export type ContactForm = z.infer<typeof ContactSchema>

export const ContactForm = () => {
  const { toast } = useToast()
  const { boolean: loading, setIsLoading } = useBoolean()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({ resolver: zodResolver(ContactSchema) })

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    setIsLoading()
    const res = await createForm(data)
    if (res) {
      await sendContactEmail({
        email: res.email,
        message: res.message,
        name: res.name
      })
      toast({
        title: 'Form was submitted successfully',
        variant: 'default'
      })
    } else {
      toast({
        title: 'Connection error',
        variant: 'destructive'
      })
    }
    reset()
    setIsLoading()
  }

  return (
    <>
      {loading ? (
        <SkeletonForm />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2'
        >
          <Input
            {...register('name')}
            className='max-w-lg flex-1'
            placeholder='Name'
            type='text'
            autoComplete='off'
          />
          <p className='my-1 block h-4 text-red-700'>
            {errors['name'] && errors['name'].message}
          </p>
          <Input
            {...register('email')}
            className='max-w-lg flex-1'
            placeholder='Email'
            type='email'
            autoComplete='off'
          />
          <p className='my-1 block h-4 text-red-700'>
            {' '}
            {errors['email'] && errors['email'].message}
          </p>
          <Textarea
            {...register('message')}
            className='max-w-lg flex-1'
            placeholder='Message'
          />
          <p className='my-1 block h-4 text-red-700'>
            {' '}
            {errors['message'] && errors['message'].message}
          </p>
          <Button
            type='submit'
            className='bg-green-900 hover:bg-green-700  dark:text-white'
          >
            Submit
          </Button>
        </form>
      )}
    </>
  )
}
