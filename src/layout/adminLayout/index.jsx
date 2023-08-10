const AdminLayout = ({children}) => {
    return(
        <>
            <div>
                Navbar
            </div>
            <div>
                sidebar

                {children}
            </div>
        </>
    )
}

export default AdminLayout