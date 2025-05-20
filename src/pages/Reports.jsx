import React from 'react'
import { motion } from 'framer-motion'

export default function Reports() {
  const reports = [
    {
      id: 1,
      name: 'Q1 2023 Material Usage Report',
      date: 'March 31, 2023',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Sustainability Analysis',
      date: 'April 15, 2023',
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'Cost Comparison Report',
      date: 'April 10, 2023',
      status: 'Completed'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="mt-2 text-gray-600">
          View and manage your material analysis reports.
        </p>
      </div>

      <div className="rounded-lg bg-white shadow-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {reports.map((report) => (
                <motion.li
                  key={report.id}
                  whileHover={{ scale: 1.01 }}
                  className="py-5"
                >
                  <div className="flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">
                        {report.name}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        Generated on {report.date}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          report.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {report.status}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50"
                    >
                      View
                    </motion.button>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
