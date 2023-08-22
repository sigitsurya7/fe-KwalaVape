import { AppstoreFilled, OrderedListOutlined, ShoppingOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons"

import imageCard from "../../assets/picture/congrats.svg"
import StatusCard from "../../component/card/statusCard"
import AdminLayout from "../../layout/adminLayout"
import { formatCurrency } from "../../config/config"
import { ConfigChart } from "../../config/config"
import { Bar, Line } from "react-chartjs-2"

ConfigChart()

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Sales',
        data: [12500000, 15000000, 25000000, 11200000, 22300000, 34500000, 30000000, 25000000],
        backgroundColor: 'rgba(99, 179, 237, 1)',
        borderWidth: 0,
      },
    ],
}

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
}

const Dashboard = () => {
    return(
        <AdminLayout>
            <div className="grid grid-cols-1 mb-4 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2 w-full bg-white dark:bg-slate-800 dark:text-white h-full px-4 py-4 border-2 border-current rounded-lg">
                    <div className="">
                        <h1 className="lg:text-2xl font-bold">Congratulation, Alysca Zahra </h1>
                        <p className="text-sm text-gray-500 mt-2">Best Seller Of The Month</p>
                    </div>
                    <div className="flex mt-auto lg:mt-8 justify-between">
                        <div className="my-auto">
                            <h1 className="font-bold text-blue-400  lg:text-xl">{formatCurrency('2500000')}</h1>
                            <span className="text-xs lg:text-sm text-gray-500">Selamat atas pencapaian penjualan pada bulan ini</span>
                            <button className="lg:mt-9 bg-blue-400 text-white h-full px-4 py-2 rounded-md block w-full hover:bg-blue-500 hover:shadow-md">Lihat Penjualan</button>
                        </div>
                        <div className="">
                            <img src={imageCard} className="lg:h-44 h-20" alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 w-full h-full px-4 py-2 bg-white dark:bg-slate-800 dark:text-white border-2 border-current rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="px-4 py-4 lg:col-span-2 w-full h-full">
                            <h1 className="font-semibold">Ringkasan Pesanan</h1>
                            <div className="mt-2 w-full">
                                <Bar data={data} options={options} />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 h-full col-span-1 w-full px-4 py-2">
                            <h1 className="font-semibold">History Penjualan</h1>
                            <div className="flex flex-col">
                                <div className="border-b-2 pb-2">
                                    {/* Mapping */}
                                    <div className="flex justify-between mt-2">
                                        <div>
                                            <h1 className="font-bold">Spageti</h1>
                                            <span className="text-sm text-gray-500">1 day ago</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold">{formatCurrency('15000')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h1 id="ProgressLabel" className="mb-1 text-blue-400 font-bold">{formatCurrency('2500000')}</h1>

                                    <span
                                        role="progressbar"
                                        aria-labelledby="ProgressLabel"
                                        aria-valuenow="75"
                                        className="block rounded-full bg-gray-200"
                                    >
                                        <span
                                        className="block h-3 rounded-full bg-blue-400"
                                        style={{width: '75%'}}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-1">
                    <StatusCard icon={<ShoppingOutlined />} name={`product`} total={`100`} />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <StatusCard icon={<AppstoreFilled />} name={`kategori`} total={`6`} />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <StatusCard icon={<UserOutlined />} name={`User`} total={`1022`} />
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <StatusCard icon={<OrderedListOutlined />} name={`order`} total={`12`} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                <div className="px-4 py-4 w-full h-full bg-white dark:bg-slate-800 border-2 border-current rounded-md">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <h1 className="my-2 font-bold text-left">Penjualan Terbaik</h1>
                            <button className="btn btn-ghost bg-blue-400 text-white">View All</button>
                        </div>
                        <div className="mt-2">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="lg:columns-3">Name</th>
                                            <th className="text-right">Stok</th>
                                            <th className="text-right">Harga</th>
                                            <th className="text-right">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://asset.kompas.com/crops/oS693LHobxbClbJpljPs9TS0ES4=/103x104:903x637/750x500/data/photo/2022/09/16/6323cb33ef229.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            </td>
                                            <td className="lg:columns-3 font-semibold">Spageti</td>
                                            <td className="text-right font-semibold">750</td>
                                            <td className="text-right font-semibold">{formatCurrency('15000')}</td>
                                            <td className="text-right font-semibold">{formatCurrency('750000')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-4 w-full h-full bg-white dark:bg-slate-800 border-2 border-current rounded-md">
                    <div className="flex flex-col">
                        <h1 className="my-2 font-bold text-left">Riwayat Order</h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Produk</th>
                                        <th>Invoice</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="lg:columns-3">Febrian</td>
                                        <td>Spageti</td>
                                        <td>#4679</td>
                                        <td>{formatCurrency('30000')}</td>
                                        <td>Terkirim</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard