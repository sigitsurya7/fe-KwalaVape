import { HeartFilled, ShoppingOutlined } from "@ant-design/icons";
import { Navigation } from "../../config/config";

const CardProduct = ({ image, brand, productName, price, afterPrice, category }) => {
    const ToDetail = Navigation({ link: `/${category}/${productName}` })

    return (
        <div className="bg-white border-2 w-48 border-black shadow-md rounded-xl duration-500 hover:scale-10 hover:shadow-xl">
            <div className="">
                <div className="flex justify-end">
                    <div className="absolute w-8 h-8 mx-2 my-2 rounded-full text-center shadow-md border-black bg-white hover:bg-red-500 hover:text-white active:bg-red-500">
                        <HeartFilled />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="absolute bottom-[8rem] mt-2 mx-2 dark:bg-blue-400 bg-blue-200 shadow-md px-2 py-1 rounded-lg">
                        <p className="text-sm font-bold dark:text-white">{category}</p>
                    </div>
                </div>
                <div onClick={ToDetail}>
                    <img
                        src={image}
                        alt="Product"
                        className="object-cover h-40 lg:h-48 w-full rounded-t-xl cursor-pointer"
                    />
                </div>
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
                    <div onClick={ToDetail} className="text-lg font-bold text-black truncate block capitalize cursor-pointer">
                        {productName}
                    </div>
                    <div className="flex items-center">
                        <div className="flex flex-col">
                            <del>
                                <p className="text-sm text-gray-600 cursor-auto mt-2">
                                    Rp.{price}
                                </p>
                            </del>
                            <p className="text-lg font-semibold text-black cursor-auto">
                                Rp.{afterPrice}
                            </p>
                        </div>
                        <a href="#" className="ml-10 mb-2 rounded-lg hover:bg-blue-500 hover:text-white">
                            <ShoppingOutlined className="text-xl mb-2 mx-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
