import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {View} from 'react-native';

export const CarouseComp = ({
  carouselImage,
  dotcolor,
  inactivedotcolor,
  autoplay,
  autoplayinterval,
  circleLoop,
}) => {
  return (
    <View>
      <SliderBox
        images={carouselImage}
        dotColor={dotcolor}
        inactiveDotColor={inactivedotcolor}
        autoplay={autoplay}
        autoplayInterval={autoplayinterval}
        circleLoop={circleLoop}
      />
    </View>
  );
};
