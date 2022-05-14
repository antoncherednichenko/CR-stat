import style from './CardChart.module.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { FC } from 'react';

interface CardChartProps {
    values: number[],
    labels: string[]
}

export const CardChart: FC<CardChartProps> = ({ values, labels }) => {
    ChartJS.register(ArcElement, Tooltip, Legend)
    const data = {
        labels,
    datasets: [
        {
        label: '# of Votes',
        data: values,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        },
    ],
    }
    return (
        <>
            <div className={style.chart}>
                <Pie data={data} />
            </div>
        </>
    )
}

export default CardChart