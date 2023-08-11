import React, { useEffect, useState } from 'react';
import NavbarAdmin from './component/navbarAdmin';
import SidebarNav from './component/sidenav';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const closeSidebarOnOutsideClick = (event) => {
      const sidebar = document.getElementById('default-sidebar');
      const toggleButton = document.getElementById('sidebar-toggle-button');
  
      if (sidebar && !sidebar.contains(event.target) && toggleButton && !toggleButton.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
  
    if (sidebarOpen) {
      document.addEventListener('click', closeSidebarOnOutsideClick);
    }
  
    return () => {
      document.removeEventListener('click', closeSidebarOnOutsideClick);
    };
  }, [sidebarOpen]);
  

  return (
    <div className="flex dark:bg-slate-800">
      <SidebarNav open={sidebarOpen} />
      <div className="lg:pl-64 flex flex-col w-full">
        <div className='sticky top-0 z-30 '>
        <NavbarAdmin toggleSidebar={toggleSidebar} />
        </div>
        <div className="min-h-screen p-4 z-0 dark:bg-slate-800">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
