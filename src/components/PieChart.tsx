import { FC } from 'react';

import { Chart } from 'react-google-charts';

// export const data: ChartData<'pie', number[], string> = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

type PieChartDatasets = [string, string | number];

export type PieChartProps = {
  data: Array<PieChartDatasets>;
};

// export const data2 = [
//   ['Task', 'Hours per Day'],
//   ['Work', 11],
//   ['Eat', 2],
//   ['Commute', 2],
//   ['Watch TV', 2],
//   ['Sleep', 7],
// ];

export const options = {
  title: 'My Daily Activities',
};

export const PieChart: FC<PieChartProps> = ({ data }) => {
  return (
    <Chart chartType='PieChart' data={data} width={'100%'} height={'400px'} />
  );
};
