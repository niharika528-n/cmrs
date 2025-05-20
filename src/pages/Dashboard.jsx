import React from 'react'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const stats = [
    { label: 'Total Projects', value: '12' },
    { label: 'Active Recommendations', value: '24' },
    { label: 'Materials Analyzed', value: '143' },
    { label: 'Cost Savings', value: '$45,678' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to your Construction Material Recommendation System dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-white p-6 shadow-lg"
          >
            <dt className="text-sm font-medium text-gray-500">{stat.label}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stat.value}
            </dd>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <li key={item} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-blue-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      New recommendation generated
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      Recommendation for Project XYZ has been generated based on the specified requirements.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="text-lg font-medium text-gray-900">Popular Materials</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <li key={item} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-blue-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      High-Strength Concrete
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      Most recommended for infrastructure projects with high durability requirements.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
