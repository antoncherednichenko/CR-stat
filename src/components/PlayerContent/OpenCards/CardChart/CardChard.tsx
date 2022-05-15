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
            '#db724c',
            '#98e182',
        ],
        borderColor: [
            '#db724c',
            '#98e182',
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