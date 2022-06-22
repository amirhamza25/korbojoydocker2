import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import React from "react";
import { RecoilRoot } from "recoil";
import Layout from "../component/Layout";



export default function MyApp({ Component, pageProps }) {
  const { asPath, pathname } = useRouter();
  React.useEffect(() => {
    const getLocalState = localStorage.getItem("token");
    if (getLocalState != null) {
      let decodedToken = jwtDecode(getLocalState);
      let currentDate = new Date();
      // JWT exp is in seconds
      if (asPath != "/") {
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          console.log("Token expired.");
          window.location.href = "http://localhost:3001";
        }
      }
    }
  }, []);
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
