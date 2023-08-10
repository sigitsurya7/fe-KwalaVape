// Layout
import EcommerceLayout from "../../layout/ecommerceLayout"

// Currency Format
import { formatCurrency } from "../../config/config"

// Icon
import { DeleteOutlined, HomeOutlined } from "@ant-design/icons"

const ConfirmOder = () => {

    return(
        <>
            <EcommerceLayout>
                <div className="container dark:bg-slate-800 py-3 lg:px-44 px-2 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="px-4 py-2 w-full h-full lg:col-span-2">
                            <div className="flex mb-2 px-4 py-2 gap-5 bg-white rounded-lg border-2 border-black shadow-md">
                                <HomeOutlined className="my-auto ml-4 text-lg" />
                                <p className=" font-sans font-medium">
                                    Alamanda Regency Blok G6 No. 4 Desa Karangsatria
                                    Kecamatan Tambun Utara Kabupaten Bekasi
                                </p>
                            </div>

                            <div className="flex flex-col px-4 py-4 my-4 bg-white rounded-lg border-2 border-black shadow-md">
                                <div className="flex justify-between border-b-2 pb-4">
                                    <div className="w-24 mt-2">
                                        <img
                                            src="https://asset.kompas.com/crops/oS693LHobxbClbJpljPs9TS0ES4=/103x104:903x637/750x500/data/photo/2022/09/16/6323cb33ef229.jpg"
                                            alt=""
                                            className="object-cover w-full rounded-lg shadow"
                                        />
                                    </div>
                                    
                                    <div className="mr-16 lg:mr-72">
                                        <p className="font-bold dark:text-white text-xl">Spageti</p>
                                        <p className="text-sm my-1 text-gray-500">Blogones</p>
                                        <p className="font-bold dark:text-white">
                                        {formatCurrency('15000')}
                                        </p>
                                    </div>

                                    <div className="relative w-5 h-6 text-center cursor-pointer hover:text-black text-red-500 justify-end">
                                        <DeleteOutlined className="mb-2" />
                                    </div>
                                </div>
                            </div>

                            {/* Api From Raja Ongkir */}
                            <div className="px-4 py-4 my-4 bg-white rounded-lg border-2 border-black shadow-md">
                                <h1>Pilih Pengiriman</h1>
                                <select name="" id="" className="block w-full rounded-xl border-2 border-black py-4 px-2 my-2 focus:shadow-xl">
                                    <option> Pilih Ekpedisi </option>
                                    <option value="">
                                        JNE : {formatCurrency('10000')}
                                    </option>
                                </select>
                            </div>
                        </div>
                        

                        <div className="flex flex-col rounded-lg px-4 py-4 w-full h-full border-2 border-dashed border-current">
                            <div className="flex border-b-2 pb-4 border-black justify-between">
                                <h3 className="font-bold text">Nama barang </h3>
                                <h3 className="font-bold text">Total Harga</h3>
                            </div>
                            <div className="flex my-2 justify-between">
                                <p>Spageti</p>
                                <p>{formatCurrency('15000')}</p>
                            </div>

                            <div className="flex my-2 justify-between">
                                <p>Ongkir</p>
                                <p>{formatCurrency('10000')}</p>
                            </div>

                            <div className="flex my-2 justify-between">
                                <p>Promo</p>
                                <p>{formatCurrency('10000')}</p>
                            </div>

                            <div className="flex border-t-2 pt-4 mb-4 border-black justify-between">
                                <h3 className="font-bold text">Total Harga </h3>
                                <h3 className="font-bold text">{formatCurrency('15000')}</h3>
                            </div>

                            <button className="mt-auto hover:bg-blue-300 hover:text-white bg-blue-200 px-2 py-4 rounded-lg hover:shadow-md font-semibold border-current border-2">BAYAR</button>
                        </div>
                    </div>

                </div>
            </EcommerceLayout>
        </>
    )
}

export default ConfirmOder