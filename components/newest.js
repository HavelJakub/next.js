import SwiperProducts from '../components/product-swiper';

const newestSwiper = () => {
  return (
    <>
      <section id="nejnej">
        <h2>Nejnovější</h2>
      </section>
      <hr />
      <SwiperProducts />
      <hr className="spodek" />
    </>
  );
};

export default newestSwiper;