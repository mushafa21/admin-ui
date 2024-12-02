import { expensesStatistics } from "../../../data/expense";
import Card from "../../Elements/Card";
import BarsDataset from "../../Elements/BarChart";
const CardStatistic = () => {
  return (
    <Card
      variant="lg:col-span-2 min-h-max"
      title="Statistics"
      description={
        <div className="h-72">
            <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
                <option>Weekly Comparison</option>
            </select>
            <BarsDataset desc={expensesStatistics}/>
        </div>
      }
    />
  );
};

export default CardStatistic;
