import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/business_logo.webp';
import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from 'react-icons/fa';

const AdminSidebar = () => {
    const navigate = useNavigate ();
    const handleLogout = () => {
        navigate("/")
    };

    return (
        <div className="p-6">
            <div className="mb-6 justify-items-center bg-amber-50">
                <img src={logo} alt="business_logo" className='w-25 h-10 ' />
            </div>
            <h2 className="text-xl font-medium mb-6 text-center">Admin Dashbord</h2>
            <nav className="flex flex-col space-y-2">
                <NavLink to="/admin/users"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaUser />
                    <span>Users</span>
                </NavLink>
                <NavLink to="/admin/products"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaBoxOpen />
                    <span>Products</span>
                </NavLink>
                <NavLink to="/admin/orders"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaClipboardList />
                    <span>Orders</span>
                </NavLink>
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaStore />
                    <span>Shop</span>
                </NavLink>
            </nav>

            <div className="mt-6 ">
                <button onClick={handleLogout} className='w-full py-3 px-4 flex items-center justify-center space-x-2 rounded bg-red-500 hover:bg-red-600 text-white'>
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>

        </div>
    );
};
export default AdminSidebar;