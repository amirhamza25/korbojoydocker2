import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import Layout from "../component/Layout";



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { asPath, pathname } = useRouter();
  ;
  return (

    <SessionProvider session={session} refetchInterval={5 * 60}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SessionProvider>

  )
}
