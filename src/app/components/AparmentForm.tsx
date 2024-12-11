import { useState } from 'react';
import { Apartment } from '../types';

interface ApartmentFormProps {
  onSubmit: (data: Apartment) => void;
}

const ApartmentForm: React.FC<ApartmentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Apartment>({
    name: '',
    phone: '',
    floor: 0,
    block: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'floor' ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" onChange={handleChange} required />
      <input name="floor" placeholder="Piso" type="number" onChange={handleChange} required />
      <input name="block" placeholder="Bloque" onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ApartmentForm;
