import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function BaseLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.token && location.pathname != "/") {
      toast.error("please Login first");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
