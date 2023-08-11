// Icon
import { AppstoreFilled, OrderedListOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons"
// Component
import StatusCard from "../../component/card/statusCard"

// Layout
import AdminLayout from "../../layout/adminLayout"

const Dashboard = () => {
    return(
        <AdminLayout>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-4">
                    <div className="lg:col-span-1">
                        <StatusCard icon={<ShoppingOutlined />} name={`product`} total={`100`} />
                    </div>
                    <div className="lg:col-span-1">
                        <StatusCard icon={<AppstoreFilled />} name={`kategori`} total={`6`} />
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <StatusCard icon={<UserOutlined />} name={`User`} total={`1022`} />
                    </div>
                    <div className="lg:col-span-1">
                        <StatusCard icon={<OrderedListOutlined />} name={`order`} total={`12`} />
                    </div>
                </div>
                <div className="bg-blue-200">

                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard