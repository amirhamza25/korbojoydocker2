import axios from "axios";
import React from "react";
import { useRecoilState } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";
import useScript from "../../commonFunction/ReloadJs";

function vendorAllProduct(props) {
  useScript("/assets/js/main.min.js");
  const [cart, setCart] = useRecoilState(cartState);
  const [productCartInfo, updateProductCartInfo] = useRecoilState(addToCartProductInfo);

  const cartUpdate = async (item) => {
    setCart({ ...cart, [item.id]: (cart[item.id] || 0) + 1 });
    const dsfsd = JSON.parse(item.img);
    const img = dsfsd[0];
    updateProductCartInfo({ ...productCartInfo, [item.id]: [item.id, item.name, item.buyPrice, img] });
  };

  const cartRemove = async (item) => {
    const copy = { ...cart };
    if (copy[item.id] === 1) {
      delete copy[item.id];
      setCart(copy);
    } else {
      setCart({ ...copy, [item.id]: copy[item.id] - 1 });
    }
  };
  return (
    <div>
      {/* Start of Main */}
      <main className="main">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="#">Vendor</a>
              </li>
              <li>
                <a href="#">WCFM</a>
              </li>
              <li>Store</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Pgae Contetn */}
        {props.outlet.map((item) => (
          <div className="page-content mb-8">
            <div className="container">
              <div className="store store-wcfm-banner">
                <figure className="store-media">
                  <a>
                    <img src={"https://baybridgebd.com/upload/" + item.img} alt="Brand" width={285} height={248} />
                  </a>
                </figure>
                <div className="store-content">
                  <div className="store-content-left mr-auto">
                    <div className="personal-info">
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: "100%" }} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                      </div>
                    </div>
                    <div className="address-info">
                      <h4 className="store-title">Vendor 1</h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i className="w-icon-map-marker" />
                          Street1, Street2, Great Area, California, United States (US), 92090El Carjon,
                        </li>
                        <li className="store-phone">
                          <a href="tel:123456789">
                            <i className="w-icon-phone" />
                            0(800)123-456
                          </a>
                        </li>
                        <li className="store-email">
                          <a href="email:#">
                            <i className="far fa-envelope" />
                            wc@vendor.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="store-content-right">
                    <div className="btn btn-white btn-rounded btn-icon-left btn-inquiry">
                      <i className="far fa-question-circle" />
                      Inquiry
                    </div>
                    <div className="social-icons social-icons-colored border-thin">
                      <a href="#" className="social-icon social-facebook w-icon-facebook" />
                      <a href="#" className="social-icon social-twitter w-icon-twitter" />
                      <a href="#" className="social-icon social-linkedin fab fa-linkedin" />
                      <a href="#" className="social-icon social-youtube w-icon-youtube" />
                      <a href="#" className="social-icon social-instagram w-icon-instagram" />
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Store WCMP Banner */}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");

  const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");

  const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");
  const { data: outlet } = await axios.get(process.env.API_URL + "/api/ev1/AllOutlet");
  return {
    props: { data, outlet, getCatagory, getAllBrand, getCatagoryWisieProduct },
  };
}

export default vendorAllProduct;
