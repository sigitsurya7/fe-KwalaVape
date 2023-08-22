import { SearchOutlined, ShoppingCartOutlined, HeartFilled } from '@ant-design/icons'
import { Navigation } from '../../../config/config'
import { isAuthenticatedUser } from '../../../middleware/auth/authentication'

const NavbarEcommerce = () => {

    const Home = Navigation({ link: '/' })
    const Chart = Navigation({ link: '/user/keranjang'})
    const Whisl = Navigation({ link: '/user/wishlist'})
    const Profile = Navigation({ link: '/user/profile'})

    let hiden = ''
    if(isAuthenticatedUser()){
        hiden = false
    }else{
        hiden = 'hidden'
    }

    return(
        <div className='container mx-auto sticky top-0 z-50 bg-white dark:bg-slate-800 px-2 py-3 h-18 lg:mx-auto'>
            <div className=''>
                <div className='flex justify-between'>
                    <div className='px-0 w-20'>
                        <a onClick={Home} className=' cursor-pointer'>
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
                            placeholder="Mau Makan Apa Hari Ini ?"
                        /> 
                    </div>


                    <div className='flex justify-end'>
                        <div className="indicator mx-2">
                            <span className="indicator-item indicator-end w-5 badge badge-secondary text-xs font-semibold text-white">
                                99
                            </span>
                            <a onClick={Chart} className='py-1 px-1 cursor-pointer hover:bg-blue-400 hover:text-white w-10 h-10 text-center text-black shadow rounded-xl bg-blue-200'>
                                <ShoppingCartOutlined />
                            </a>
                        </div>

                        <div className={`dropdown dropdown-end ${hiden}`}>
                            <label tabIndex={0} className=" cursor-pointer avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1525186492356-0fe09a5831df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZha2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                        alt="ProfileImage"
                                    />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44">
                                <li>
                                    <a onClick={Profile}>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a onClick={Whisl}>
                                        WhisList
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarEcommerce