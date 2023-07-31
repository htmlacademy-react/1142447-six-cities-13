import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { OfferType } from '../../types/offer-type';

const useMap = (mapRef: MutableRefObject<HTMLElement | null>, currentOffers: OfferType[]): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const location = currentOffers[0].city.location;

  useEffect(() => {

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom,
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
  }, [mapRef, location]);

  return map;
};

export default useMap;
