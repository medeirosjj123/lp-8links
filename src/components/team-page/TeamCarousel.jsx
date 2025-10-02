import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../assets/images/team/bruno1.jpeg";
import image2 from "../../assets/images/team/bruno2.jpg";
import image3 from "../../assets/images/team/bruno3.jpg";
import image4 from "../../assets/images/team/bruno4.jpg";

const images = [
    {
        id: 1,
        src: image1,
        alt: "Bruno Medeiros em evento de SEO"
    },
    {
        id: 2,
        src: image2,
        alt: "Bruno Medeiros palestrando"
    },
    {
        id: 3,
        src: image3,
        alt: "Bruno Medeiros em Chiang Mai"
    },
    {
        id: 4,
        src: image4,
        alt: "Bruno Medeiros em evento de SEO"
    }
];

function TeamCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="team-carousel">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="team-swiper"
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="team-image-container">
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                className="team-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
                .team-carousel {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .team-image-container {
                    position: relative;
                    padding-top: 75%;
                    overflow: hidden;
                    border-radius: 12px;
                }
                .team-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .team-swiper {
                    padding-bottom: 40px;
                }
                .team-swiper :global(.swiper-button-next),
                .team-swiper :global(.swiper-button-prev) {
                    color: var(--primary-color);
                }
                .team-swiper :global(.swiper-pagination-bullet-active) {
                    background: var(--primary-color);
                }
            `}</style>
        </div>
    );
}

export default TeamCarousel; 