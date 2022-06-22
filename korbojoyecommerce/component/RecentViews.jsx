import React, { useEffect, useState } from "react";

function RecentViews() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://baybridgebd.com/api/ev1/RecentProduct")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container">
      <h2 className="title title-underline mb-4 ls-normal appear-animate">Your Recent Views</h2>
      <div
        className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8"
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
        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2" style={{ width: 200 }}>
          {users.map((user, index) => (
            <div key={index} className="swiper-slide product-wrap mb-0">
              <div className="product text-center product-absolute">
                <figure className="brand">
                  <img src={"https://baybridgebd.com/upload/" + JSON.parse(user.img)} alt="Brand" width={85} height={48} />
                </figure>
                <h4 className="product-name">
                  <a>{user.name}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
}

export default RecentViews;
