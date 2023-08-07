import { SearchOutlined, ShoppingCartOutlined, HeartFilled } from '@ant-design/icons'

const NavbarEcommerce = () => {
    return(
        <div className='container dark:bg-slate-800 px-2 py-3 h-18 lg:mx-auto'>
            <div className='mx-auto'>
                <div className='flex justify-between'>
                    <div className='px-0 w-20'>
                    <img
                        src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
                        alt=""
                        className='w-10 h-10'
                    />
                    </div>

                    <div className="relative flex w-full lg:w-96 h-10 border-2 border-black dark:border-none rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <SearchOutlined />
                        </div>

                        <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Mau Makan Apa Hari Ini ?" /> 
                    </div>


                    <div className='flex justify-end'>
                    <div className='py-1 px-1 mx-2 w-10 h-10 text-center rounded-xl bg-blue-200'>
                        <ShoppingCartOutlined />
                    </div>

                    <div className='py-1 px-1 w-10 h-10 text-center text-red-500 rounded-xl bg-blue-200'>
                        <HeartFilled />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarEcommerce