import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import icon from './icon';

const Markerposition = ({ address }) => {
  const map = useMap();
  const position = [address.location.lat, address.location.lng];
  console.log({ mark: position });

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
