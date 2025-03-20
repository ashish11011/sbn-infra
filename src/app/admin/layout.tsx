import AdminNavBar from '@/components/admin/adminNavBar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNavBar />
      {children}
    </div>
  );
};

export default Layout;
