import React from "react";

function Blog() {
  return (
    <div className="container">
      <div className="post-wrapper appear-animate mb-4">
        <div className="title-link-wrapper pb-1 mb-4">
          <h2 className="title ls-normal mb-0">From Our Blog</h2>
          <a href="blog-listing.html" className="font-weight-bold font-size-normal">
            View All Articles
          </a>
        </div>
        <div className="swiper">
          <div
            className="swiper-container swiper-theme"
            data-swiper-options="{
                      'slidesPerView': 1,
                      'spaceBetween': 20,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 4
                          }
                      }
                  }"
          >
            <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
              {users.map((user, index) => (
                <div key={index} className="swiper-slide post text-center overlay-zoom" width={85} height={48}>
                  <figure className="brand">
                    <img src={"https://baybridgebd.com/upload/" + user.img} alt="Brand" />
                  </figure>
                  <div className="post-details">
                    <div className="post-meta">
                      by <a href="#" className="post-author"></a>-{" "}
                      <a href="#" className="post-date mr-0">
                        03.05.2021
                      </a>
                    </div>
                    <h4 className="post-title">
                      <a href="title">{user.tittle}</a>
                    </h4>
                    <h4 className="post-description">
                      <a href="description">{user.shortDis}</a>
                    </h4>
                    <a href="post-single.html" className="btn btn-link btn-dark btn-underline">
                      Read More
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
