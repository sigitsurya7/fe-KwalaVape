import { AlignLeftOutlined, HeartOutlined, HomeOutlined, MessageOutlined, QuestionOutlined, SettingOutlined, WhatsAppOutlined } from "@ant-design/icons"
import EcommerceLayout from "../../layout/ecommerceLayout"

const Profile = () => {
    return(
        <EcommerceLayout>
            <div className="container mx-auto dark:bg-slate-800 min-h-screen px-2">
                <div className="text-center items-center border-b-2 mb-2 pb-8 pt-4">
                    <div className="avatar">
                        <div className="w-24 rounded-xl shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1525186492356-0fe09a5831df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZha2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                alt="ProfileImage"
                            />
                        </div>
                    </div>
                    <p className="font-bold dark:text-white">
                        Alysca Zahra
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex px-4 flex-col py-4">
                        <div className="flex gap-4 font-bold">
                            <AlignLeftOutlined className="mt-1 text-black dark:text-white" />
                            <button className="pb-2 border-b-2 border-black dark:border-white dark:text-white block text-left px-2 w-full">
                                Semua Pesanan
                            </button>
                        </div>
                    </div>

                    <div className="flex px-4 flex-col py-4">
                        <div className="flex gap-4 font-bold">
                            <HeartOutlined className="mt-1 text-black dark:text-white" />
                            <button className="pb-2 border-b-2 border-black dark:border-white dark:text-white block text-left px-2 w-full">
                                WishList
                            </button>
                        </div>
                    </div>

                    <div className="flex px-4 flex-col py-4">
                        <div className="flex gap-4 font-bold">
                            <HomeOutlined className="mt-1 text-black dark:text-white" />
                            <button className="pb-2 border-b-2 border-black dark:border-white dark:text-white block text-left px-2 w-full">
                                Alamat Pengiriman
                            </button>
                        </div>
                    </div>

                    <div className="flex px-4 flex-col py-4">
                        <div className="flex gap-4 font-bold">
                            <QuestionOutlined className="mt-1 text-black dark:text-white" />
                            <button className="pb-2 border-b-2 border-black dark:border-white dark:text-white block text-left px-2 w-full">
                                Bantuan
                            </button>
                        </div>
                    </div>

                    <div className="flex px-4 flex-col py-4">
                        <div className="flex gap-4 font-bold">
                            <MessageOutlined className="mt-1 text-black dark:text-white" />
                            <button className="pb-2 border-b-2 border-black dark:border-white dark:text-white block text-left px-2 w-full">
                                Curhat
                            </button>
                        </div>
                    </div>

                    <div className="flex px-4 flex-col py-4">
                        <div className="flex gap-4 font-bold">
                            <WhatsAppOutlined className="mt-1 text-black dark:text-white" />
                            <button className="pb-2 border-b-2 border-black dark:border-white dark:text-white block text-left px-2 w-full">
                                Live Chat
                            </button>
                        </div>
                    </div>

                    <div className="flex col-span-1 lg:col-span-2 px-4 flex-col py-4">
                        <div className="flex gap-4 font-bold">
                            <SettingOutlined className="mt-1 text-black dark:text-white" />
                            <button className="pb-2 border-b-2 border-black dark:border-white dark:text-white block text-left px-2 w-full">
                                Pengaturan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </EcommerceLayout>
    )
}

export default Profile