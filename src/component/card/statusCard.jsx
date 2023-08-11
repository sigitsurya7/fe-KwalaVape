const StatusCard = ({ icon, name, total}) => {
    return(
        <>
            <div className="group relative w-full h-full inline-block focus:outline-none cursor-pointer">
                <div
                    class="absolute inset-0 translate-x-0 rounded-lg translate-y-0 border-2 border-dashed border-current"
                ></div>

                <div class="relative block border-2 rounded-lg h-full px-4 py-4 border-current bg-white transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="text-xl text-center">
                               {icon}
                            </div>
                            <p className="font-bold uppercase text-sm my-1">{name}</p>
                        </div>
                        <div className="mx-auto my-auto">
                            <h1 className="font-bold font-sans text-2xl">{total}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusCard