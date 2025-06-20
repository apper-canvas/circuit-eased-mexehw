import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ViewToggle = ({ currentView, onViewChange }) => {
  const views = [
    { id: 'grid', icon: 'Grid3X3', label: 'Grid' },
    { id: 'list', icon: 'List', label: 'List' },
    { id: 'map', icon: 'Map', label: 'Map' }
  ]

  return (
    <div className="flex bg-surface-100 rounded-lg p-1">
      {views.map(view => (
        <motion.button
          key={view.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onViewChange(view.id)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
            currentView === view.id
              ? 'bg-white text-primary shadow-sm'
              : 'text-surface-600 hover:text-primary hover:bg-white/50'
          }`}
        >
          <ApperIcon name={view.icon} className="w-4 h-4" />
          <span className="hidden sm:inline">{view.label}</span>
        </motion.button>
      ))}
    </div>
  )
}

export default ViewToggle