import { NavLink } from "react-router-dom";

export default function Sidebar({ title, menus }) {
  return (
    <aside className="w-full md:w-56 shrink-0 bg-[#1b2a49] text-white md:min-h-screen p-5">
      <h2 className="text-xl font-bold mb-4 md:mb-6">{title}</h2>
      <ul className="flex flex-wrap md:flex-col gap-2">
        {menus.map((m) => (
          <li key={m.to}>
            <NavLink
              to={m.to}
              end={m.end}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-2 font-semibold ${isActive ? "bg-[#ffc93c] text-[#1b2a49]" : ""}`
              }
            >
              {m.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
