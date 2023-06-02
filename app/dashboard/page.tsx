import { Card, Title, AreaChart, Text, Button } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const ChartComponent = () => (
  <Card decoration="top" decorationColor="blue">
    <Title>Welcome to our dashboard page bro</Title>
    <Button>Hello</Button>
  </Card>
);

const DashboardPage = () => {
  return (
    <div className="h-screen my-4">
      <ChartComponent />
    </div>
  )
}

export default DashboardPage