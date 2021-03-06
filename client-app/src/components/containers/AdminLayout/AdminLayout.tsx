import { Outlet } from "react-router";
import Header from './Header';

const AdminLayout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}

export default AdminLayout;