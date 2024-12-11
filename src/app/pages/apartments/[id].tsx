import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { Apartment } from '../../types';
import ApartmentForm from '../../components/ApartmentForm';

const ApartmentDetailsPage: React.FC = () => {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      api.get(`/Apartment/${id}`)
        .then((response) => setApartment(response.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleUpdateApartment = async (updatedData: Apartment) => {
    try {
      await api.put(`/Apartment/${id}`, updatedData);
      alert('Apartamento actualizado');
      router.push('/apartments');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteApartment = async () => {
    try {
      await api.delete(`/Apartment/${id}`);
      alert('Apartamento eliminado');
      router.push('/apartments');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Detalles del Apartamento</h1>
      {apartment ? (
        <>
          <ApartmentForm onSubmit={handleUpdateApartment} />
          <button onClick={handleDeleteApartment}>Eliminar Apartamento</button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ApartmentDetailsPage;
