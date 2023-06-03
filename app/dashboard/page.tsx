import {
  Card,
  Text,
  Metric,
  Flex,
  ProgressBar,
  BadgeDelta,
} from "@tremor/react";
import { Waveform } from "@uiball/loaders";

const DashComponent = () => {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
      <Card className="max-w-sm">
        <Flex justifyContent="between" alignItems="center">
          <Text>Teachers</Text>
          <BadgeDelta
            deltaType="moderateIncrease"
            isIncreasePositive={true}
            size="xs"
          >
            +12.3%
          </BadgeDelta>
        </Flex>
        <Metric>$ 23,456</Metric>
      </Card>
      <Card className="max-w-sm">
        <Text>Students</Text>
        <Metric>$ 71,465</Metric>
        <Flex className="mt-4">
          <Text>32% of annual target</Text>
          <Text>$ 225,000</Text>
        </Flex>
        <ProgressBar percentageValue={32} className="mt-2" />
      </Card>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="my-4 flex h-screen flex-col">
      <DashComponent />
      <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
    </div>
  );
};

export default DashboardPage;
