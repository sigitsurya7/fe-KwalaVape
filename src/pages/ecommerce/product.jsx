import { useParams } from "react-router-dom"
import EcommerceLayout from "../../layout/ecommerceLayout"
import CardProduct from "../../component/card/productCard";

const AllProduct = () => {
    const {params} = useParams()

    const formattedParams = params.replace("-", "");
    const title = params.replace("-", " ")

    return(
        <EcommerceLayout>
            <div className="container dark:bg-slate-800 py-3 lg:px-44 px-2 mx-auto">
                <h1 className="text-xl font-bold uppercase underline underline-offset-4 ml-2">{title}</h1>
                <div className="container mt-4">
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                        
                        <CardProduct
                            image={`https://kurio-img.kurioapps.com/21/06/22/6c8221eb-f08d-4309-9e3c-8c1319a9b411.jpe`}
                            brand={`Blognes`}
                            category={`Food`}
                            productName={`Spageti`}
                            price={`20.000`}
                            afterPrice={`10.000`}
                        />

                        <CardProduct
                            image={`https://kurio-img.kurioapps.com/21/06/22/6c8221eb-f08d-4309-9e3c-8c1319a9b411.jpe`}
                            brand={`Blognes`}
                            category={`Food`}
                            productName={`Spageti`}
                            price={`20.000`}
                            afterPrice={`10.000`}
                        />
                        
                    </div>
                </div>
            </div>
        </EcommerceLayout>
    )
}

export default AllProduct