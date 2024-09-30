import { useLocation } from "react-router-dom";

export default function useCheckMenuItemActiveNav() {
  const { pathname } = useLocation();

  const checkActiveNav = (nav: string) => {
    const pathArray = pathname.split("/").filter((item) => item !== "");
    console.log("pathArray", pathArray);
    if (nav === "/" && pathArray.length < 1) return true;

    return pathArray.includes(nav.replace(/^\//, ""));
  };

  return { checkActiveNav };
}
