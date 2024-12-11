import { api } from '../../utils/api';
import ApartmentForm from '../../components/ApartmentForm';
import { Apartment } from '../../types';

const AddApartmentPage: React.FC = () => {
  const handleAddApartment = async (data: Apartment) => {
    try {
      await api.post('/Apartment', data);
      alert('Apartamento agregado');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Agregar Apartamento</h1>
      <ApartmentForm onSubmit={handleAddApartment} />
    </div>
  );
};

export default AddApartmentPage;
