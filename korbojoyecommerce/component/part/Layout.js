import Footer from "./Footer";
import QuickView from "./QuickView";
import TopHeader from "./TopHeader";
export default function Layout({ children }) {
  return (
    <>
      <div className="page-wrapper">
        <TopHeader />
        <main className="main">{children}</main>

        <Footer />
      </div>
      <QuickView />
    </>
  )
}