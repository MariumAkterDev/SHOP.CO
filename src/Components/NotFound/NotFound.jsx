import React from 'react'

const NotFound = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-PrimaryColor-62 dark:text-primary-500">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-PrimaryColor-62 md:text-4xl dark:text-white">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-PrimaryColor-62 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            
        </div>   
    </div>
</section>
  )
}

export default NotFound