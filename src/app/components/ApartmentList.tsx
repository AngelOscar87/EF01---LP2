import { Apartment } from '../types';

interface ApartmentListProps {
  apartments: Apartment[];
}

const ApartmentList: React.FC<ApartmentListProps> = ({ apartments }) => (
  <ul>
    {apartments.map((apt) => (
      <li key={apt.id}>
        {apt.name} - {apt.phone} - Piso {apt.floor}, Bloque {apt.block}
      </li>
    ))}
  </ul>
);

export default ApartmentList;
