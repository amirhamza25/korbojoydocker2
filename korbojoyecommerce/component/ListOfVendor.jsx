import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { listOfVendorAtom } from "../atom/ListOfVendorAtom";
function ListOfVendor() {
  const [vendor, updateVendor] = useRecoilState(listOfVendorAtom);
  useEffect(() => {
    const data = axios.get(process.env.API_URL + "/GetVendorInfo").then((res) => {
      updateVendor(res.data);
    });
  }, [updateVendor]);

  const vendorList = useRecoilValue(listOfVendorAtom);
  // console.log(vendorList);
  return (
    <div>
      <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
        <div className="container pb-2">
          <h2 className="title justify-content-center pt-1 ls-normal mb-5">List of vendor</h2>
          <div className="swiper">
            <div
              className="swiper-container swiper-theme pg-show"
              data-swiper-options="{
              'spaceBetween': 20,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 5
                  },
                  '992': {
                      'slidesPerView': 6
                  }
              }
          }"
            >
              <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
                {vendorList.map((item, index) => (
                  <div key={index} className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                    <Link href="/vendor-all-product/[vendorId]" as={`/vendor-all-product/${item.id}`}>
                      <img src="assets/images/demos/demo1/categories/2-1.jpg" alt="Category" style={{ width: "300px" }} />
                    </Link>
                    <div className="category-content">
                      <h4 className="category-name">{item.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListOfVendor;
