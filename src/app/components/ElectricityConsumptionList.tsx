import { ElectricityConsumption } from '../types';

interface ElectricityConsumptionListProps {
  consumptions: ElectricityConsumption[];
}

const ElectricityConsumptionList: React.FC<ElectricityConsumptionListProps> = ({ consumptions }) => (
  <ul>
    {consumptions.map((consumption) => (
      <li key={consumption.id}>
        Apartamento ID: {consumption.apartmentId} - {consumption.quantityKw} kW -{' '}
        {new Date(consumption.date).toLocaleDateString()}
      </li>
    ))}
  </ul>
);

export default ElectricityConsumptionList;
