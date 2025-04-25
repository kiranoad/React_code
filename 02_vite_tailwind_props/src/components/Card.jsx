    import React from 'react'

    function Card({username,btnText ="visit me",textline}) {
        console.log(username);
        
    return (
    <>
                <figure class="md:flex bg-slate-100 rounded-xl p-8 mb-2 md:p-0 dark:bg-slate-800">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/20570035/pexels-photo-20570035/free-photo-of-a-young-woman-in-a-green-jacket-sitting-and-holding-a-fujifilm-x100f-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                    {username}
                </div>
                <div class="text textClass text-slate-700 dark:text-slate-500">
                    {textline}
                </div>
                <div className="btn flex text-center rounded hover:bg-blue-400" ></div>
                </figcaption>
                <button className="btn  bg-green-400  text-black">{btnText}</button>
            </div>
            </figure>
            </>
    )
    }

    export default Card
