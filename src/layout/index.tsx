import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <Outlet />
      <Toaster position="top-center" />
    </>
  )
}
