import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../../types/offer-type';

const useMap = (mapRef: MutableRefObject<HTMLElement | null>, center : Location): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  //const location = currentOffers[0].city.location;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: center.latitude,
          lng: center.longitude
        },
        zoom: center.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      );
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
    map?.setView([center.latitude, center.longitude], center.zoom);
  }, [mapRef, center, map]);

  return map;
};

export default useMap;
