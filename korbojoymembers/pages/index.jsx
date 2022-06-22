import { checkCookies, setCookies } from "cookies-next";
import { useEffect } from "react";

function Index(props) {
  const token1 = props.token;
  useEffect(() => {
    const checkToken = checkCookies("token");
    setCookies("token", token1);
    const API_USER = process.env.API_USER
    const API_MAIN = process.env.API_USER
    if (checkToken == true) {
      window.location.href = API_USER + "/home";
    } else {
      window.location.href = API_MAIN;
    }
  }, []);
  return <div>index</div>;
}

export default Index;
