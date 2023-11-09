import { ProtectedRoutes } from "@/redux/store/ProtectedRoutes";
import { Navbar } from "@/components/Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoutes>
      <Navbar />
      {children}
    </ProtectedRoutes>
  );
};

export default Layout;
