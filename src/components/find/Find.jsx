import React from 'react';
import styles from "./Find.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Card } from './Card';


export const Find = () => {
  return (
    <div className={styles.find}>
        <div className={styles.heading}>
            <h1>Find Your Drive</h1>
            <div className={styles.text_bg}>
                <p>
                    <span>Explore the world's largest car sharing marketplace</span>   
                </p>    
            </div>    
        </div>
        <div className={styles.slider_container}>
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerview={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                breakpoints={{
                    340: {
                        width: 200,
                        slidesPerview: 1,
                    },
                    768: {
                        with: 200,
                        slidesPerview: 4,
                    },
                    1040: {
                        width: 200,
                        slidesPerview: 4,
                    },
                }}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                >
                
                <SwiperSlide>
                    <Card image="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" title="Porshe"/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' title="Tesla"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' title="Ford"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' title="Jeep"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' title="Toyota"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' title='Nissan'/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' title="Mercedes Benz"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' title='Shevrolet'/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' title='BMW'/>
                </SwiperSlide>

                <SwiperSlide>
                    <Card image='https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' title="Audi"/>
                </SwiperSlide>


            </Swiper>
        </div>    
    </div>
  )
}
