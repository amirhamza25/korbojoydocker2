import Link from "next/link";
import React, { useEffect, useState } from "react";

function FlashSales() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + "/api/ev1/getFlashSalesProduct")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container pt-3 shadow" style={{ border: "2px solid #FBB959", borderRadius: "25px", marginTop: "120px" }}>
      <h2 className="title title-underline mb-4 ls-normal appear-animate">FlashSales</h2>
      <div
        className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-2"
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
            },
            '1200': {
                'slidesPerView': 8
            }
        }
    }"
      >
        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
          {users.map((item, index) => (
            <div key={index} className="swiper-slide product-wrap mb-0">
              <div className="product text-center product-absolute">
                <div className="shadow">
                  <>
                    <figure className="brand">
                      <img src={process.env.API_URL + "/upload/" + JSON.parse(item.img)} alt="Product" style={{ height: "160px", objectFit: "fill" }} />
                    </figure>
                    <Link href={"/product-details/[productId]"} as={`/product-details/${item.id}`}>
                      <a>
                        <h4 className="product-name">{item.name}</h4>
                      </a>
                    </Link>
                    <h4 className="product-name mt-5">
                      <ins className="new-price">{item.realPrice}</ins>
                    </h4>

                    <div className="product-price"></div>
                  </>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashSales;
