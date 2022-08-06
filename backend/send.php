<?php
$items = array_slice(scandir("../src/Fragments/assets/img/servicios/alojamiento_rural/"), 2);

foreach ($items as $key => $value) {
    print("
    <SwiperSlide>
    <img
      className='slider'
      src={require('./assets/img/servicios/alojamiento_rural/" . $value . "') }
      alt=''
    />
  </SwiperSlide>
    ");
}
?>