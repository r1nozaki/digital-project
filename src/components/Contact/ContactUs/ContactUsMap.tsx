import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from '@/components/UI/map';

interface Location {
  id: number;
  name: string;
  lng: number;
  lat: number;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Bob Bullock Texas State History Museum',
    lng: -97.7475897,
    lat: 30.277096,
  },
  {
    id: 2,
    name: 'Texas State Capitol',
    lng: -97.7564506,
    lat: 30.2772795,
  },
];

const ContactUsMap = () => {
  return (
    <div className='w-full h-100' data-lenis-prevent>
      <Map center={[-97.7458661, 30.2661331]} zoom={12}>
        <MapControls
          position='bottom-right'
          showZoom
          showCompass
          showLocate
          showFullscreen
        />
        {locations.map(location => (
          <MapMarker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
          >
            <MarkerContent>
              <div className='border-2 border-white rounded-full shadow-lg size-4 bg-primary' />
            </MarkerContent>
            <MarkerTooltip>{location.name}</MarkerTooltip>
            <MarkerPopup>
              <div className='space-y-1'>
                <p className='font-medium text-foreground'>{location.name}</p>
                <p className='text-xs text-muted-foreground'>
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default ContactUsMap;
