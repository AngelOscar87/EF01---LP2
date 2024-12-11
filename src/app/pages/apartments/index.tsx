import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { Apartment } from '../../types';
import ApartmentList from '../../components/ApartmentList';

const ApartmentsPage: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    api.get('/Apartment')
      .then((response) => setApartments(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Apartamentos</h1>
      <ApartmentList apartments={apartments} />
    </div>
  );
};

export default ApartmentsPage;
