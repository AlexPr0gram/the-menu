import { Link } from "react-router-dom";
import "./Meals.css";
import { motion } from "framer-motion";
import { GoChevronLeft } from "react-icons/go";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemTable from "../timeTable/ItemTable/ItemTable.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import getMenuConfig from "../../common.js";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function Meals() {
  const { initialDate } = useParams();
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [slideIndex, setSlideIndex] = useState(1);
  const menuConfig = getMenuConfig();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + "</div>";
    },
  };

  useEffect(() => {
    const firstSlide =
      menuConfig.find((item) => item.date === initialDate).id - 1;
    setSlideIndex(firstSlide);
  }, [initialDate, menuConfig]);

  return (
    <div className="detailPage">
      <div className="header">
        <motion.div
          initial={{ y: -50, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="dateTitle"
        >
          {currentDate}
        </motion.div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiper.slideTo(slideIndex);
        }}
        modules={[Pagination]}
        pagination={pagination}
        className="swiperContainer"
        // initialSlide={getNewInitialSlide}
        initialSlide={slideIndex}
        onSlideChange={(swiper) => {
          const date = menuConfig.find(
            (item) => item.id === swiper.activeIndex + 1
          ).date;
          setCurrentDate(date);
        }}
      >
        {menuConfig.map((date) => {
          return (
            <SwiperSlide className="swiperSlide" key={date.date}>
              {date.timeTableData.map((item) => {
                return <ItemTable item={item} key={item.id} />;
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Link className="link" to="/detail">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="backButton"
        >
          <GoChevronLeft />
          На главную
        </motion.div>
      </Link>
    </div>
  );
}

export default Meals;