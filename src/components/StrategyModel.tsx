import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data structure for the strategy model
const strategyData: Record<string, any> = {
  one: {
    title: 'TWOGHOSTS Strategic Growth Model',
    children: [
      { id: 'context', title: 'Context', angle: 0, color: '#375CDC' },
      { id: 'market', title: 'Market', angle: 50, color: '#375CDC' },
      { id: 'brand', title: 'Brand', angle: 100, color: '#375CDC' },
      { id: 'techstack', title: 'Tech Stack', angle: 150, color: '#375CDC' },
      { id: 'growth', title: 'Growth', angle: 200, color: '#375CDC' },
      { id: 'action', title: 'Action', angle: 250, color: '#375CDC' },
    ],
  },
  context: {
    title: 'Context',
    description: 'Understanding the foundation and current state',
    children: [
      { id: 'vision', title: 'Vision', angle: 0, description: 'A vision serves as your company\'s north star.' },
      { id: 'mission', title: 'Mission', angle: 50, description: 'A mission statement is what you are doing today to get to tomorrow.' },
      { id: 'history', title: 'History', angle: 100 },
      { id: 'constraints', title: 'Constraints', angle: 150 },
      { id: 'roots', title: 'Roots', angle: 200 },
      { id: 'roadblocks', title: 'Roadblocks', angle: 250 },
    ],
  },
  market: {
    title: 'Market',
    description: 'Deep understanding of your market landscape',
    children: [
      { id: 'industry', title: 'Industry Analysis', angle: 90 },
      { id: 'personas', title: 'Personas', angle: 135 },
      { id: 'buyers', title: 'Buyer Base', angle: 180 },
      { id: 'research', title: 'Research Surveys', angle: 225 },
    ],
  },
  brand: {
    title: 'Brand',
    description: 'Crafting your unique identity',
    children: [
      { id: 'perception', title: 'Perception', angle: 90 },
      { id: 'messaging', title: 'Messaging Framework', angle: 135 },
      { id: 'voice', title: 'Voice', angle: 180 },
      { id: 'visuals', title: 'Visuals', angle: 225 },
    ],
  },
  techstack: {
    title: 'Tech Stack',
    description: 'The tools and platforms that power growth',
    children: [
      { id: 'tracking', title: 'Tracking & CRM', angle: 0 },
      { id: 'website', title: 'Website', angle: 60 },
      { id: 'martech', title: 'Martech', angle: 135 },
    ],
  },
  growth: {
    title: 'Growth',
    description: 'Strategies to scale and accelerate',
    children: [
      { id: 'traditional', title: 'Traditional Campaigns', angle: 180 },
      { id: 'digital', title: 'Digital Campaigns', angle: 225 },
    ],
  },
  action: {
    title: 'Action',
    description: 'Execution and implementation',
    children: [
      { id: 'demolition', title: 'Demolition', angle: 0 },
      { id: 'roadmap', title: 'Roadmap', angle: 60 },
    ],
  },
};

// Circular positioning helper
const getCircularPosition = (angle: number, radius: number) => {
  const radian = (angle - 90) * (Math.PI / 180);
  return {
    x: Math.cos(radian) * radius,
    y: Math.sin(radian) * radius,
  };
};

const CircleNode = ({ node, radius, onClick, isChild = false }: any) => {
  const position = getCircularPosition(node.angle || 0, radius);
  const size = isChild ? 80 : 100;

  return (
    <motion.button
      className="absolute"
      style={{
        left: `calc(50% + ${position.x}px - ${size / 2}px)`,
        top: `calc(50% + ${position.y}px - ${size / 2}px)`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={onClick}
    >
      <div
        className="flex items-center justify-center w-full h-full text-sm font-semibold text-white transition-all border rounded-full cursor-pointer"
        style={{
          borderColor: node.color || '#ffffff',
          borderWidth: '1px',
          backgroundImage: 'linear-gradient(90deg, #292929 2.11%, #000000 104.85%)',
          fontSize: isChild ? '12px' : '13px',
        }}
      >
        <span className="text-center">{node.title}</span>
      </div>
    </motion.button>
  );
};

const StrategyModel = () => {
  const [currentView, setCurrentView] = useState('one');
  const [history, setHistory] = useState<string[]>([]);

  const handleNodeClick = (nodeId: string) => {
    if (strategyData[nodeId]) {
      setHistory([...history, currentView]);
      setCurrentView(nodeId);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousView = newHistory.pop();
      setHistory(newHistory);
      setCurrentView(previousView || 'one');
    }
  };

  const currentData = strategyData[currentView];
  const isRoot = currentView === 'one';

  return (
    <div className="relative w-full" style={{ minHeight: '600px', height: '80vh', maxHeight: '800px' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(143, 106, 250, 0.1) 0%, transparent 70%)'
      }} />

      {/* Main container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Center circle */}
          <motion.div
            className="relative flex items-center justify-center text-white border rounded-full"
            style={{
              width: isRoot ? '200px' : '180px',
              height: isRoot ? '200px' : '180px',
              borderColor: '#8F6AFA',
              borderWidth: '2px',
              backgroundImage: 'linear-gradient(90deg, #292929 2.11%, #000000 104.85%)',
              fontFamily: isRoot ? "'Raleway', sans-serif" : "'Raleway', sans-serif",
              fontSize: isRoot ? '18px' : '24px',
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <div className="text-center">
              <div className="font-bold">{currentData.title}</div>
              {currentData.description && (
                <div className="mt-2 text-xs opacity-75">{currentData.description}</div>
              )}
            </div>
          </motion.div>

          {/* Orbital circles */}
          {currentData.children && currentData.children.map((child: any) => (
            <CircleNode
              key={child.id}
              node={child}
              radius={isRoot ? 180 : 160}
              onClick={() => handleNodeClick(child.id)}
              isChild={!isRoot}
            />
          ))}

          {/* Back button */}
          {!isRoot && (
            <motion.button
              className="absolute px-6 py-2 text-sm font-semibold text-white transition-all border rounded-full bottom-8"
              style={{
                borderColor: '#8F6AFA',
                borderWidth: '1px',
                backgroundImage: 'linear-gradient(90deg, #292929 2.11%, #000000 104.85%)',
              }}
              onClick={handleBack}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Instructions */}
      {isRoot && (
        <motion.div
          className="absolute text-sm text-center text-white opacity-75 bottom-8"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.8 }}
        >
          Click any circle to dive in
        </motion.div>
      )}
    </div>
  );
};

export default StrategyModel;
