import { useRouter } from 'next/router';
import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import Layout from "../component/Layout";
export default function MyApp({ Component, pageProps }) {
  const { asPath, pathname } = useRouter();

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
