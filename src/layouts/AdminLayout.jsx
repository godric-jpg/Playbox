import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const adminMenus = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/about", label: "Tentang" },
  { to: "/", label: "Lihat Toko" },
];

export default function AdminLayout() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar title="Admin Toko" menus={adminMenus} />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
