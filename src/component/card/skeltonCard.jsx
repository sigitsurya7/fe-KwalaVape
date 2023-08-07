import { FileImageFilled } from "@ant-design/icons";

const SkeletonCard = () => {
    return (
      <div className="bg-white border-2 w-52 border-black shadow-md rounded-xl duration-500 hover:scale-10 hover:shadow-xl">
        <a href="#" className="">
          <div src="" alt="Product" className="flex text-2xl items-center justify-center h-40 lg:h-48 bg-gray-200 w-full rounded-t-xl animate-pulse">
            <FileImageFilled />
          </div>
          <div className="px-4 py-3 animate-pulse">
            <div className="bg-gray-200 mr-3 h-4 w-44 "></div>
            <div className="bg-gray-300 h-5 w-44 mt-1">
              
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="bg-gray-200 h-5 w-20"></div>
              </div>
              <div className="ml-16 mb-2 mt-2 h-7 w-7 bg-gray-300"></div>
            </div>
          </div>
        </a>
      </div>
    );
  };
  
  export default SkeletonCard;
  