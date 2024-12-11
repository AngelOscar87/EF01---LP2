import { api } from '../../utils/api';
import ElectricityConsumptionForm from '../../components/ElectricityConsumptionForm';
import { ElectricityConsumption } from '../../types';

const AddElectricityConsumptionPage: React.FC = () => {
  const handleAddConsumption = async (data: ElectricityConsumption) => {
    try {
      await api.post('/ElectricityConsumption', data);
      alert('Consumo registrado');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Registrar Consumo</h1>
      <ElectricityConsumptionForm onSubmit={handleAddConsumption} />
    </div>
  );
};

export default AddElectricityConsumptionPage;
