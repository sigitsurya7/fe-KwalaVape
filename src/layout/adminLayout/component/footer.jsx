import { BugOutlined, ShoppingOutlined } from "@ant-design/icons"

const FooterAdmin = () => {
    return(
        <>
            <div className=''>
                <footer className="footer items-center p-4 bg-white dark:bg-slate-800 dark:text-white dark:shadow dark:shadow-green-400 text-slate-800">
                    <div className="items-center grid-flow-col">
                        <ShoppingOutlined className="text-xl"/>
                        <p>Copyright © 2023 - All right reserved</p>
                    </div> 
                </footer>
            </div>
        </>
    )
}

export default FooterAdmin