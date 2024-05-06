export default function AboutPage() {
  return (
    <div>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='h-60 space-y-2'>
              <h1 className='text-3xl font-bold tracking-wider sm:text-5xl xl:text-6xl/none'>
                About Kamay Labs
              </h1>
              <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
                Learn more about our company and our mission to transform
                businesses through innovative software solutions.
              </p>
            </div>
            <div className='grid gap-6 lg:grid-cols-2'>
              <div className='flex flex-col items-start justify-center space-y-4'>
                <h2 className='text-2xl font-bold'>Our Mission</h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  At Kamay Labs, our mission is to empower businesses of all
                  sizes with cutting-edge software solutions that drive growth,
                  efficiency, and innovation. We believe that technology should
                  be a strategic asset, not a hindrance, and we are dedicated to
                  helping our clients unlock their full potential.
                </p>
              </div>
              <div className='flex flex-col items-start justify-center space-y-4'>
                <h2 className='text-2xl font-bold'>Our Team</h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  Our team of talented developers, designers, and project
                  managers are passionate about their craft and committed to
                  delivering exceptional results. With years of experience in
                  the industry, we bring a wealth of knowledge and expertise to
                  every project, ensuring that our clients receive the highest
                  level of service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
