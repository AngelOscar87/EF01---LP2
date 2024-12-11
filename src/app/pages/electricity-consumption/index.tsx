import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { ElectricityConsumption } from '../../types';

const ElectricityConsumptionPage: React.FC = () => {
  const [consumptions, setConsumptions] = useState<ElectricityConsumption[]>([]);

  useEffect(() => {
    api.get('/ElectricityConsumption')
      .then((response) => setConsumptions(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Consumo Eléctrico</h1>
      <ul>
        {consumptions.map((consumption) => (
          <li key={consumption.id}>
            {consumption.quantityKw} kW - {new Date(consumption.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectricityConsumptionPage;
