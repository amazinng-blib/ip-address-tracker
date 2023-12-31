import React, { useEffect, useMemo } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import icon from './icon';

const Markerposition = ({ address }) => {
  const map = useMap();
  const position = useMemo(() => {
    return [address?.latitude, address?.longitude];
  }, [address?.latitude, address?.longitude]);
  console.log(position);

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);
  return (
    <>
      {' '}
      <Marker icon={icon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

export default Markerposition;
