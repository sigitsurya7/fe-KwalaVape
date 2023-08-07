import { HeartFilled, ShoppingOutlined } from "@ant-design/icons";

const CardProduct = ({ image, brand, productName, price, afterPrice, category }) => {
  return (
    <div className="bg-white border-2 w-52 border-black shadow-md rounded-xl duration-500 hover:scale-10 hover:shadow-xl">
      <a href="#" className="">
        <div className="flex justify-end">
          <div className="absolute w-8 h-8 mx-2 my-2 rounded-full text-center shadow-md border-black bg-white hover:bg-red-500 hover:text-white">
            <HeartFilled />
          </div>
        </div>
        <div className="flex justify-end">
            <div className="absolute bottom-[8rem] mt-2 mx-2 bg-blue-200 shadow-md px-2 py-1 rounded-lg">
                <p className="text-sm font-bold">{category}</p>
            </div>
        </div>
        <img
          src={image}
          alt="Product"
          className="object-cover h-40 lg:h-48 w-full rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {productName}
          </p>
          <div className="flex items-center">
            <div className="flex flex-col">
              <del>
                <p className="text-sm text-gray-600 cursor-auto  mt-2">
                  {price}
                </p>
              </del>
              <p className="text-lg font-semibold text-black cursor-auto">
                Rp.{afterPrice}
              </p>
            </div>
            <a href="#" className="ml-16 mb-2 hover:text-blue-500">
            <ShoppingOutlined className="text-xl" />
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardProduct;
