const NotFound = () => {
    return(
        <main class="h-screen w-full flex flex-col justify-center items-center dark:bg-slate-800">
            <h1 class="text-9xl font-extrabold dark:text-white tracking-widest">404</h1>
            <div class="bg-blue-200 px-2 text-black text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5">
            <a
                class="relative inline-block text-sm font-medium text-blue-200 group active:text-blue-500 focus:outline-none focus:ring"
            >
                <span
                class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-200 group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <a href="/">Go Home</a>
                </span>
            </a>
            </button>
        </main>
    )
}

export default NotFound