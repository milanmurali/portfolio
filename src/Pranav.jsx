import React from 'react'
import maman from './assets/maman.png'


export const Pranav = () => {




  return (
    <div>

      <div className='h-svh py-10 flex items-center justify-center '>


        <div className='bg-black w-11/12 h-full rounded-2xl'>

          <h1 className="text-8xl font-extrabold tracking-widest mb-6 text-white text-center">
            PYTHON DEVELOPER
          </h1>

          <div className='flex items-center justify-between px-20'>
            <div>
              <p className="text-lg text-gray-300 max-w-md border-t border-gray-600 pt-4">
                Hi, I'm PRANAV, a B.Tech Computer Science student passionate about building intelligent,
                user-centric web applications. I specialize in full-stack development using Django and React,
                and I love combining backend logic with sleek frontend experiences.
              </p>

              {/* Placeholder squares */}
              <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-10 w-60">

                <div className="w-20 h-20 gap-y-3 bg-gray-300 rounded" />
                <div className="w-20 h-20 gap-y-3 bg-gray-300 rounded" />
                <div className="w-20 h-20 gap-y-3 bg-gray-300 rounded" />
                <div className="w-20 h-20 gap-y-3 bg-gray-300 rounded" />
                <div className="w-20 h-20 gap-y-3 bg-gray-300 rounded" />
                <div className="w-20 h-20 gap-y-3 bg-gray-300 rounded" />
              </div>
            </div>

            <div>
              <div className="hidden md:block">
                <img
                  src={maman}
                  alt="Developer"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


  )
}
