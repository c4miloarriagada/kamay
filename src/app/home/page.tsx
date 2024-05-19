import { CiSettings } from 'react-icons/ci'
import { GoCloud } from 'react-icons/go'
import { IoCodeOutline } from 'react-icons/io5'
import { ContactForm } from './_components/ContactForm'

export default async function Home() {
  return (
    <section className='min-h-screen w-full  '>
      <div className='flex min-h-[50rem] w-full flex-col gap-8'>
        <div className='flex h-[30rem] flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold  tracking-wider sm:text-5xl xl:text-6xl/none'>
              Kamay Labs Software Creations
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
              Crafting innovative software solutions to transform your business.
            </p>
          </div>
        </div>
        <section className='flex w-full justify-center  bg-gray-100 py-12 dark:bg-gray-700 md:py-24 lg:py-32 '>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-3'>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <IoCodeOutline className='h-12 w-12 text-gray-500 dark:text-gray-400' />
                <div className='space-y-2'>
                  <h3 className='text-xl font-bold'>
                    Custom Software Development
                  </h3>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Tailored software solutions to meet your unique business
                    needs.
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <CiSettings className='h-12 w-12 text-gray-500 dark:text-gray-400' />
                <div className='space-y-2'>
                  <h3 className='text-xl font-bold'>Mobile App Development</h3>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Engaging mobile apps that deliver seamless user experiences.
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <GoCloud className='h-12 w-12 text-gray-500 dark:text-gray-400' />
                <div className='space-y-2'>
                  <h3 className='text-xl font-bold'>Cloud-based Solutions</h3>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Scalable and secure cloud-powered applications for your
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className='flex min-h-64 w-full justify-center py-12 md:py-24 lg:py-32'
          id='contact'
        >
          <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Get in Touch
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Have a project in mind? Let&apos;s discuss how we can bring your
                ideas to life.
              </p>
            </div>
            <div className='mx-auto w-full max-w-sm space-y-2'>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
