import React from 'react';
import './Statistics.css'
import { ComposedChart, Line, XAxis, YAxis,Area,Bar, CartesianGrid, Tooltip, Legend} from 'recharts';

const Statistics = () => {
    const assignmentMarks = [
        { name: 'assignment 1', topic: 'HTML', score: 60 },
        { name: 'assignment 2', topic: 'CSS', score: 57 },
        { name: 'assignment 3', topic: 'BOOTSTRAP', score: 50},
        { name: 'assignment 4', topic: 'JAVASCRIPT', score: 60 },
        { name: 'assignment 5', topic: 'REACT', score: 55 },
        { name: 'assignment 6', topic: 'REACT-ROUTER', score: 58},
        { name: 'assignment 7', topic: 'NODE', score: 55 },
        { name: 'assignment 8', topic: 'EXPRESS', score: 59 }
    ]


    return (
        <div className='comChart'>
    <ComposedChart width={900} height={450} data={assignmentMarks}>
      <XAxis dataKey="name" />
      <YAxis />
     <Tooltip />
     <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="topic" fill="#8884d8" stroke="#8884d8" /> 
     <Bar dataKey="score" barSize={20} fill="#413ea0" />
     <Line type="monotone" dataKey="score" stroke="#ff7300" />
</ComposedChart>

        </div>
    );
};

export default Statistics;