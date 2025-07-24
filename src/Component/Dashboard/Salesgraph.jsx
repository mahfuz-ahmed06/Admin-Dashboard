import React from 'react'
import { IoIosMore } from "react-icons/io";
import { PieChart, Pie, ResponsiveContainer, Sector, Cell } from 'recharts';

const data = [
  { name: 'March', value: 400 },
  { name: 'April', value: 300 },
  { name: 'May', value: 300 },
  { name: 'June', value: 200 },
];

// Define different colors for each slice
const COLORS = ['#029E60', '#00C49F', '#8884d8', '#FF8042'];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default function Salesgraph() {
  return (
    <div className='sales'>

        <div className="top flex">
            <p>Sales</p>
            <button type="button"><IoIosMore/></button>
        </div>

        <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
            <PieChart width={400} height={400}>
            <Pie
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            </PieChart>
        </ResponsiveContainer>
        </div>

        <div className="details flex">
            <div className="left">
                <span className='circle1'></span><p>March</p>
                <span className='circle1'></span><p>April</p>
                <span className='circle1'></span><p>May</p>
                <span className='circle1'></span><p>June</p>
            </div>
            <div className="middle">
                <p>2500</p>
                <p>1500</p>
                <p>2250</p>
                <p>1900</p>
            </div>
            <div className="right">
                <span></span><p style={{color: 'green'}}>8.3%</p>
                <span></span><p style={{color: 'red'}}>6.2%</p>
                <span></span><p style={{color: 'green'}}>5.1%</p>
                <span></span><p style={{color: 'green'}}>3.7%</p>
            </div>
        </div>
    </div>
  )
}





// import React from 'react'
// import { IoIosMore } from "react-icons/io";
// import { PieChart, Pie, ResponsiveContainer, Sector } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const renderActiveShape = (props) => {
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;

//   const RADIAN = Math.PI / 180;
//   const sin = Math.sin(-RADIAN * (midAngle ?? 1));
//   const cos = Math.cos(-RADIAN * (midAngle ?? 1));
//   const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
//   const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
//   const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
//   const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';
//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={(outerRadius ?? 0) + 6}
//         outerRadius={(outerRadius ?? 0) + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// export default function Salesgraph() {
//   return (
//     <div className='sales'>

//         <div className="top flex">
//             <p>Sales</p>
//             <button type="button"><IoIosMore/></button>
//         </div>

//         <div style={{ width: '100%', height: 260 }}>
//             <ResponsiveContainer>
//                 <PieChart width={400} height={400}>
//                 <Pie
//                     activeShape={renderActiveShape}
//                     data={data}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={80}
//                     fill="#029E60
// "
//                     dataKey="value"
//                 />
//                 </PieChart>
//             </ResponsiveContainer>
//         </div>

//     </div>
//   )
// }






