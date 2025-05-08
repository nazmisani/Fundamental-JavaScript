import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function BaseLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.token) {
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
