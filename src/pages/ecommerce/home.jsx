import React, { useEffect, useState } from "react"

// Import Carousel Css
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Import Icon
import { AppleOutlined, CoffeeOutlined, FileImageFilled, LoadingOutlined } from '@ant-design/icons'

// Image Import
import BannerImage1 from '../../assets/banner/foodBanner.png'
import BannerImage2 from '../../assets/banner/1.png'
import BannerImage3 from '../../assets/banner/2.png'

// Load Layout
import EcommerceLayout from "../../layout/ecommerceLayout";

// Load Component
import CardProduct from "../../component/card/productCard"
import SkeletonCard from "../../component/card/skeltonCard"

const HomeEcommerce = () => {

  const [isLoading, setIsLoading] = useState({
    banner: true,
    product: true
  })

  useEffect(() => {
    // Cek apakah halaman sudah dimuat sebelumnya
    const pageLoadedBefore = sessionStorage.getItem('pageLoadedBefore');

    if (!pageLoadedBefore) {
      setTimeout(() => {
        setIsLoading(prevState => ({ ...prevState, banner: false, product: false }));
        sessionStorage.setItem('pageLoadedBefore', 'true');
      }, 2000);
    } else {
      setIsLoading({
        banner: false,
        product: false
      });
    }
  }, []);

  return (
    <EcommerceLayout>
      <div className="container dark:bg-slate-700 py-4 h-min-screen lg:px-44 px-2 mx-auto">
        {/* Carousel */}
        <div className="relative">
          
            {isLoading.banner ? (
              <>
                <div className="flex items-center justify-center h-44 lg:h-96 bg-slate-200 rounded-lg shadow-md animate-pulse">
                  <FileImageFilled />
                </div>
              </>
            ) : (
              <Carousel
                autoPlay
                interval={5000}
                infiniteLoop
                swipeable
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
              >
                <img
                  className="object-cover lg:h-96 w-full rounded-lg shadow-md"
                  src={BannerImage1}
                  alt="banner"
                  loading="lazy"
                />

                <img
                  className="object-cover lg:h-96 w-full rounded-lg shadow-md"
                  src={BannerImage2}
                  alt="banner"
                  loading="lazy"
                />

                <img
                  className="object-cover lg:h-96 w-full rounded-lg shadow-md"
                  src={BannerImage3}
                  alt="banner"
                  loading="lazy"
                />
              </Carousel>
            )}
          
        </div>
      </div>

      <div className="container dark:bg-slate-800 py-3 lg:px-44 px-2 mx-auto">
        {/* Kategori */}
        <div className="carousel gap-2 mb-4">
          {isLoading.banner ? (
            <>
              <div className="w-32 rounded-lg h-full bg-gray-200 animate-pulse">
                <div className="h-8"></div>
              </div>
              <div className="w-32 rounded-lg h-full bg-gray-200 animate-pulse">
                <div className="h-8"></div>
              </div>
              <div className="w-32 rounded-lg h-full bg-gray-200 animate-pulse">
                <div className="h-8"></div>
              </div>
              <div className="w-32 rounded-lg h-full bg-gray-200 animate-pulse">
                <div className="h-8"></div>
              </div>
            </>
          ):(
            <>
              <div className="carousel-item">
                <div className="flex justify-between w-32 h-full px-4 py-1 dark:text-slate-800 dark:bg-white border-2 border-black rounded-2xl px-auto hover:bg-slate-800 hover:text-white">
                  <span className="mb-2 mr-2">
                    <AppleOutlined className="w-2 h-2" />
                  </span>
                  <div className="mx-auto mt-1">
                    <span>Makanan</span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="flex justify-between w-32 h-full px-4 py-1 dark:text-slate-800 dark:bg-white border-2 border-black rounded-2xl px-auto hover:bg-slate-800 hover:text-white">
                  <span className="mb-2 mr-2">
                    <CoffeeOutlined className="w-2 h-2" />
                  </span>
                  <div className="mx-auto mt-1">
                    <span>Minuman</span>
                  </div>
                </div>
              </div>
            </>
          )}
          
        </div>

        {/* Product */}
        <div className="flex justify-between">
          <p className="font-sans my-2 mx-2 dark:text-white font-bold text-xl">
            Best Seller
          </p>

          <a href="" className="font-sans my-2 mx-2 text-blue-500 dark:text-white font-bold text-md">
            Lihat Semua
          </a>
        </div>

        <div className="container my-4">
          <div className="carousel gap-4 lg:gap-8">
            {isLoading.product ? (
              <>
                <div className="carousel-item">
                  <SkeletonCard />
                </div>

                <div className="carousel-item">
                  <SkeletonCard />
                </div>

                <div className="carousel-item">
                  <SkeletonCard />
                </div>
              </>
            ) : (
              <>
                <div className="carousel-item">
                  <CardProduct
                    image={`https://kurio-img.kurioapps.com/21/06/22/6c8221eb-f08d-4309-9e3c-8c1319a9b411.jpe`}
                    brand={`Blognes`}
                    category={`Food`}
                    productName={`Spageti`}
                    price={`20.000`}
                    afterPrice={`10.000`}
                  />
                </div>

                <div className="carousel-item">
                  <CardProduct
                    image={`https://storage.googleapis.com/bakingworld-web-production/uploads/media/content_banner/banner-croffle-1668763306611.jpg`}
                    brand={`Croffle Enak`}
                    category={`Food`}
                    productName={`Croffle`}
                    price={`25.000`}
                    afterPrice={`15.000`}
                  />
                </div>

                <div className="carousel-item">
                  <CardProduct
                    image={`https://www.cubesnjuliennes.com/wp-content/uploads/2022/09/Strawberry-Juice-Recipe.jpg`}
                    brand={`Minuman`}
                    category={`Minuman`}
                    productName={`Strawberry Juice`}
                    price={`15.000`}
                    afterPrice={`10.000`}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-sans my-2 mx-2 dark:text-white font-bold text-xl">
            Promo
          </p>

          <a href="" className="font-sans my-2 mx-2 text-blue-500 dark:text-white font-bold text-md">
            Lihat Semua
          </a>
        </div>

        <div className="container">
          <div className="">

            <div className="w-44 h-80 lg:h-[22rem] absolute justify-start py-2 px-4 rounded-lg shadow-md bg-blue-200 dark:bg-blue-200" />
            
            <div className="py-3 pl-4">
              <div className="carousel gap-4 lg:gap-8">
                {isLoading.product ? (
                  <>
                    <div className="carousel-item">
                      <SkeletonCard />
                    </div>

                    <div className="carousel-item">
                      <SkeletonCard />
                    </div>

                    <div className="carousel-item">
                      <SkeletonCard />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="carousel-item">
                      <CardProduct
                        image={`https://kurio-img.kurioapps.com/21/06/22/6c8221eb-f08d-4309-9e3c-8c1319a9b411.jpe`}
                        brand={`Blognes`}
                        category={`Food`}
                        productName={`Spageti`}
                        price={`20.000`}
                        afterPrice={`10.000`}
                      />
                    </div>

                    <div className="carousel-item">
                      <CardProduct
                        image={`https://storage.googleapis.com/bakingworld-web-production/uploads/media/content_banner/banner-croffle-1668763306611.jpg`}
                        brand={`Croffle Enak`}
                        category={`Food`}
                        productName={`Croffle`}
                        price={`25.000`}
                        afterPrice={`15.000`}
                      />
                    </div>

                    <div className="carousel-item">
                      <CardProduct
                        image={`https://www.cubesnjuliennes.com/wp-content/uploads/2022/09/Strawberry-Juice-Recipe.jpg`}
                        brand={`Minuman`}
                        category={`Minuman`}
                        productName={`Strawberry Juice`}
                        price={`15.000`}
                        afterPrice={`10.000`}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>

        <div className="my-8">
          <div className="bg-blue-200 px-4 py-4 rounded-lg">
            <div className="flex justify-between">
              <p className="font-sans my-2 mx-2 dark:text-white font-bold text-xl">
                New Stock
              </p>

              <a href="" className="font-sans my-2 mx-2 dark:text-white font-bold text-md">
                Lihat Semua
              </a>
            </div>
            <div className="carousel gap-4 lg:gap-8">
              <div className="carousel-item">
                <SkeletonCard />
              </div>

              <div className="carousel-item">
                <SkeletonCard />
              </div>

              <div className="carousel-item">
                <SkeletonCard />
              </div>
            </div>
          </div>
        </div>

      </div>
    </EcommerceLayout>
  );
};

export default HomeEcommerce;
