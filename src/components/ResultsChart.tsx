import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip } from
'recharts';
import { motion } from 'framer-motion';
interface ResultsChartProps {
  score: number;
  zoneColor: string;
  categoryScores: {
    name: string;
    score: number;
  }[];
}
export function ResultsChart({
  score,
  zoneColor,
  categoryScores
}: ResultsChartProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  useEffect(() => {
    // Animate the score number counting up
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedScore(
        Math.min(Math.round(score / steps * currentStep), score)
      );
      if (currentStep >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [score]);
  const pieData = [
  {
    name: 'Score',
    value: score
  },
  {
    name: 'Remaining',
    value: 100 - score
  }];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-64 h-64 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              animationDuration={1500}>
              
              <Cell key="cell-0" fill={zoneColor} />
              <Cell key="cell-1" fill="var(--color-border)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.span
            initial={{
              scale: 0.5,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              delay: 0.5,
              type: 'spring'
            }}
            className="text-5xl font-bold text-textPrimary">
            
            {animatedScore}
          </motion.span>
          <span className="text-sm text-textSecondary font-medium uppercase tracking-wider mt-1">
            Score
          </span>
        </div>
      </div>

      <div className="w-full max-w-sm bg-surface rounded-xl p-5 border border-border shadow-sm">
        <h3 className="text-sm font-bold text-textSecondary uppercase tracking-wider mb-4">
          Category Breakdown
        </h3>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryScores}
              layout="vertical"
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
              }}>
              
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis
                dataKey="name"
                type="category"
                width={100}
                tick={{
                  fontSize: 12,
                  fill: 'var(--color-text-secondary)'
                }}
                axisLine={false}
                tickLine={false} />
              
              <Tooltip
                cursor={{
                  fill: 'transparent'
                }}
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} />
              
              <Bar
                dataKey="score"
                fill={zoneColor}
                radius={[0, 4, 4, 0]}
                barSize={16}
                animationDuration={1500} />
              
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>);

}