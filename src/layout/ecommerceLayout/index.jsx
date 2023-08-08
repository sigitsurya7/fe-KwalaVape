import FooterEcommerce from "./component/footer"
import NavbarEcommerce from "./component/navEcommerce"

const EcommerceLayout = ({children}) => {
    return(
        <>
            
            <NavbarEcommerce />

            <div className='app'>
                {children}
            </div>

            <FooterEcommerce />

        </>
    )
}

export default EcommerceLayout