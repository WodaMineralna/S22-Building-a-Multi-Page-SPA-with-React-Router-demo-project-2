import { Outlet } from "react-router-dom";

import MainNavigationPage from "../components/MainNavigation";

export default function RootPage() {
  return (
    <>
      <MainNavigationPage />
      <Outlet />
    </>
  );
}
