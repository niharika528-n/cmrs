import React from 'react';
import { motion } from 'framer-motion';
import MaterialCard from './MaterialCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const RecommendationList = ({ recommendations }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {recommendations.map((material, index) => (
        <motion.div key={material.id} variants={item}>
          <MaterialCard material={material} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RecommendationList;
