import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <img
            src="https://uploads-ssl.webflow.com/5e72757e442fcb191b4823c0/5ea8b5ddeffbba465d0d010f_nike-lunar3.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-full"
            src="https://www.propstudios.co.uk/wp-content/uploads/2018/10/Adidass-banner.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="w-full h-full"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_400/https://assets.designhill.com/design-blog/wp-content/uploads/2019/01/1-6.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
