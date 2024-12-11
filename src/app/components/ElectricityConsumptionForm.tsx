import { useState } from 'react';
import { ElectricityConsumption } from '../types';

interface ElectricityConsumptionFormProps {
  onSubmit: (data: ElectricityConsumption) => void;
}

const ElectricityConsumptionForm: React.FC<ElectricityConsumptionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ElectricityConsumption>({
    apartmentId: 0,
    date: '',
    quantityKw: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'quantityKw' || name === 'apartmentId' ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="apartmentId" placeholder="ID Apartamento" type="number" onChange={handleChange} required />
      <input name="date" placeholder="Fecha" type="date" onChange={handleChange} required />
      <input name="quantityKw" placeholder="Cantidad kW" type="number" onChange={handleChange} required />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default ElectricityConsumptionForm;
