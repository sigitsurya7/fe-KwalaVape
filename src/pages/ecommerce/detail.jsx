import { useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { ShoppingOutlined } from "@ant-design/icons";

import EcommerceLayout from "../../layout/ecommerceLayout";
import { formatCurrency } from "../../config/config";
import SkeletonCard from "../../component/card/skeltonCard";

const DetailProduct = () => {
  const { category, nameProduct } = useParams();
  const stok = "10";
  const price = "10000";
  const [count, setCount] = useState(1);

  const allPrice = price * count;

  const increment = () => {
    if (count < stok) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <EcommerceLayout>
        <div className="container dark:bg-slate-800 py-3 lg:px-44 px-2 mx-auto">
          {/* Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="">
              <Carousel showStatus={false} infiniteLoop>
                <img
                  src="https://asset.kompas.com/crops/oS693LHobxbClbJpljPs9TS0ES4=/103x104:903x637/750x500/data/photo/2022/09/16/6323cb33ef229.jpg"
                  alt=""
                  className="object-cover rounded-lg shadow"
                />

                <img
                  src="https://nibble-images.b-cdn.net/nibble/original_images/saus_spaghetti_01_5b6da8338d.jpg"
                  alt=""
                  className="object-cover rounded-lg shadow"
                />
              </Carousel>
            </div>
            <div className="w-full h-full px-4 py-2">
              <div className="border-b-2 mb-4">
                <div className="flex gap-4 mb-4">
                  <div className="py-1">
                    <p className="font-semibold text-xl dark:text-white">
                      {nameProduct}
                    </p>
                  </div>
                  <div className="bg-blue-200 px-3 py-1 rounded-lg max-w-max">
                    <span className="text-sm font-bold text-black">
                      {category}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <p className="text-xl font-semibold text-black dark:text-white cursor-auto">
                    {formatCurrency(price)}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto  mt-1">
                      {formatCurrency("20000")}
                    </p>
                  </del>
                </div>
              </div>

              <div className="flex justify-between">
                {/* Stock */}
                <div className="flex mb-2 text-red">
                  <p className="font-bold text-black">Terjual : </p>
                  <p className="ml-2 font-semibold">10</p>
                </div>

                {/* Stock */}
                <div className="flex mb-2">
                  <p className="font-bold text-black">Stock : </p>
                  <p className="ml-2 font-semibold">10</p>
                </div>
              </div>

              {/* Variant */}
              <div className="my-2">
                <p className="text-sm">Pilih Variant</p>
                <div className="carousel gap-3">
                  <div className="carousel-item">
                    <div className="bg-blue-200 px-3 py-1 my-2 rounded-lg max-w-max">
                      <span className="text-sm font-bold text-black">
                        Variant 1
                      </span>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="bg-blue-200 px-3 py-1 my-2 rounded-lg max-w-max">
                      <span className="text-sm font-bold text-black">
                        Variant 2
                      </span>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="bg-blue-200 px-3 py-1 my-2 rounded-lg max-w-max">
                      <span className="text-sm font-bold text-black">
                        Variant 3
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jumlah */}
              <div className="">
                <p className="font-semibold dark:text-white my-2">Jumlah</p>
                <div className="flex justify-between">
                  <div className="">
                    <button
                      onClick={decrement}
                      className="bg-blue-400 text-white px-2 py-2 w-10 h-10 rounded-lg font-bold"
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <p className="my-2">{count}</p>
                  </div>
                  <div>
                    <button
                      onClick={increment}
                      className="bg-blue-400 text-white px-2 py-2 w-10 h-10 rounded-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Product */}
          <div>
            <div className="my-4 border-t-2 border-b-2">
                <div className="px-2 py-2">
                    <h3 className="text-xl font-bold dark:text-white">
                        Informasi Produk
                    </h3>
                    <div className="flex my-2 justify-between">
                        <p className="font-bold">Berat</p>
                        <p>10 Gram</p>
                    </div>
                    <div className="flex my-2 justify-between">
                        <p className="font-bold">Kondisi</p>
                        <p>Baru</p>
                    </div>
                    <div className="flex my-2 justify-between">
                        <p className="font-bold">Minimum Pembelian</p>
                        <p>1</p>
                    </div>
                </div>
            </div>

            <div className="my-4 border-b-2 pb-4 mx-2">
              <h1 className="text-xl font-bold mb-2">Deskripsi Produk</h1>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel metus congue, molestie eros sed, convallis turpis. Nulla sit
                amet diam euismod, vehicula magna ut, lobortis ipsum. Nullam
                consectetur sagittis metus, nec vulputate risus tincidunt non.
                Vivamus fermentum urna ut quam elementum ullamcorper. Curabitur
                suscipit nisl nec ex volutpat, non euismod massa pellentesque.
                Fusce malesuada efficitur dui, ac feugiat sem commodo eu. Sed
                vitae ultrices enim. In rutrum vel ante quis blandit.
                Suspendisse hendrerit sapien a ipsum maximus, quis sollicitudin
                nibh cursus. Sed vestibulum nulla eget est imperdiet tempor.
              </article>
            </div>
          </div>

          {/* Related Product */}
          <h1 className="font-bold my-4 mx-2 text-xl">Related Product</h1>
          <div className="container mx-2 carousel gap-2">
            <div className="carousel-item">
              <SkeletonCard />
            </div>
            <div className="carousel-item">
              <SkeletonCard />
            </div>
          </div>

        </div>
      </EcommerceLayout>
      <div className="sticky bottom-1 z-50 w-full h-20 px-2 py-2">
        <div className="grid grid-cols-2 w-full h-full rounded-xl bg-slate-800 dark:bg-white">
          <div className="px-4 py-5">
            <p className="font-semibold text-center text-white dark:text-black">
              {formatCurrency(allPrice)}
            </p>
          </div>
          <div className="">
            <button className="bg-blue-400 justify-center text-white font-bold rounded-tr-xl rounded-br-xl w-full h-full px-4 py-2 flex items-center">
                Buy <ShoppingOutlined className="ml-2" />
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
