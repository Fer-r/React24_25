import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-1 bg-gray-100">
      <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
