import { formatCurrency } from "../../config/config"
import EcommerceLayout from "../../layout/ecommerceLayout"

const WhisList = () => {
    return(
        <EcommerceLayout>
            <div className="container min-h-screen dark:bg-slate-800 py-3 lg:px-44 px-2 mx-auto">
                <p className="font-bold text-xl mb-4">Keranjang</p>
                <div className="w-full h-full bg-white border-b-2 border-black my-2">
                    <div className="grid grid-cols-2 gap-2 px-2 py-4">
                        <div className="w-full lg:h-52">
                            <img
                                src="https://asset.kompas.com/crops/oS693LHobxbClbJpljPs9TS0ES4=/103x104:903x637/750x500/data/photo/2022/09/16/6323cb33ef229.jpg"
                                alt="ads"
                                className="object-cover lg:h-52 w-full rounded-lg shadow"
                            />
                        </div>
                        <div>
                            <div className="mx-2">
                                <p className="font-bold dark:text-white text-xl">Spageti</p>
                                <p className="text-sm my-1 text-gray-500">Blogones</p>
                                <span className='font-semibold'>stok : 10</span>
                                <p className="font-bold dark:text-white">
                                    {formatCurrency('15000')}
                                </p>
                                <div className="grid grid-cols-2 gap-1">
                                <button className="block w-full py-1 my-2 bg-red-400 rounded-lg text-white font-semibold">Delete</button>
                                    <button className="block w-full py-1 my-2 bg-blue-400 rounded-lg text-white font-semibold">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EcommerceLayout>
    )
}

export default WhisList