import { PieChart, Pie, Tooltip } from 'recharts';

const UserPieChart = () => {
    const users = [
        { name: 'subscribed', users: 3000 },
        { name: 'unsubscribed', users: 931 }
    ];

    return (
        <div>
            <div>
                <PieChart width={500} height={300}>
                    <Pie dataKey="users" isAnimationActive={false} data={users} cx={120} cy={120} outerRadius={90} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default UserPieChart;
