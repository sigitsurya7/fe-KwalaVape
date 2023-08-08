import { SearchOutlined, ShoppingCartOutlined, HeartFilled } from '@ant-design/icons'
import { Navigation } from '../../../config/config'

const NavbarEcommerce = () => {

    const Home = Navigation({ link: '/' })

    return(
        <div className='container sticky top-0 z-50 bg-white dark:bg-slate-800 px-2 py-3 h-18 lg:mx-auto'>
            <div className='mx-auto'>
                <div className='flex justify-between'>
                    <div className='px-0 w-20'>
                        <a onClick={Home}>
                            <img
                                src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
                                alt=""
                                className='w-10 h-10'
                            />
                        </a>
                    </div>

                    <div className="relative flex w-full lg:w-96 h-10 border-2 border-black dark:border-white dark:border-none rounded-lg focus-within:shadow-lg overflow-hidden">
                        <div className="grid place-items-center h-full w-12 dark:bg-slate-800 text-gray-300">
                            <SearchOutlined />
                        </div>

                        <input
                        className="peer px-2 h-full w-full dark:bg-slate-800 outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Mau Makan Apa Hari Ini ?" /> 
                    </div>


                    <div className='flex justify-end'>
                        <div className="indicator mx-2">
                            <span className="indicator-item indicator-end w-5 badge badge-secondary text-xs font-semibold text-white">
                                99
                            </span>
                            <div className='py-1 px-1 w-10 h-10 text-center text-black shadow rounded-xl bg-blue-200'>
                                <ShoppingCartOutlined />
                            </div>
                        </div>

                        <div className='py-1 px-1 w-10 h-10 text-center text-red-500 shadow rounded-xl bg-blue-200'>
                            <HeartFilled />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarEcommerce