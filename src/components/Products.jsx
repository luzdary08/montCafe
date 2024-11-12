import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/products.css'
import Subtitle from './Subtitle'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react'
export default function Products() {

    const swiperRef = useRef(); // obtiene el elemento HTML de swiper

    return (
        <div className="products section section--2">
            <div className="container">
                <div className="products__body">
                    <div className="products__heading">
                        <div>
                            <Subtitle>nuestos productos</Subtitle>
                            <p>We come with a choice of coffee for coffee lovers. With coffee taken from the best place and mixed by the owner.</p>
                        </div>
                        <div className="products__navegation">
                            <button onClick={() => swiperRef.current?.slidePrev()} className='prev'> <ChevronLeft /> </button>
                            <button onClick={() => swiperRef.current?.slideNext()} className='next'> <ChevronRight /> </button>
                        </div>
                    </div>
                    <div className='products__cards'>
                        <div className='products__pagination'>
                                <div className="swiper-pagination"></div>
                            </div>
                        <Swiper
                            pagination={{
                                el: ".swiper-pagination",
                                type: "bullets",
                                clickable:true,
                                bulletClass: "swiper-custom-bullet",
                                bulletActiveClass: "swiper-custom-bullet-active",
                            }
                            }
                            modules={[Pagination,Navigation]}
                            className='products__swiper mySwiper'
                            spaceBetween={18}
                            breakpoints={{
                                320: {
                                  slidesPerView: 1,
                                },
                                768: {
                                  slidesPerView: 2,
                                },
                                1024: {
                                  slidesPerView: 3,
                                },
                              }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                              }}
                        >
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                        </Swiper>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}
