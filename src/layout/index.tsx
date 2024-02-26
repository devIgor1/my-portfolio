import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="font-pally">
      <Outlet />
      <Toaster position="top-center" />
    </div>
  )
}
