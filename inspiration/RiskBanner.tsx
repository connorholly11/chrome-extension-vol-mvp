import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Shield } from 'lucide-react';
interface RiskBannerProps {
  className?: string;
}
const RiskBanner: React.FC<RiskBannerProps> = ({
  className = ''
}) => {
  const [dailyLoss, setDailyLoss] = useState(-1250.75);
  const [dailyLimit] = useState(5000);
  const [isNearLimit, setIsNearLimit] = useState(false);
  useEffect(() => {
    const lossPercentage = Math.abs(dailyLoss) / dailyLimit;
    setIsNearLimit(lossPercentage > 0.8);
  }, [dailyLoss, dailyLimit]);
  const remaining = dailyLimit - Math.abs(dailyLoss);
  const lossPercentage = Math.abs(dailyLoss) / dailyLimit;
  const getBannerColor = () => {
    if (lossPercentage > 0.9) return 'bg-red-50 border-red-200 text-red-800';
    if (lossPercentage > 0.7) return 'bg-orange-50 border-orange-200 text-orange-800';
    if (lossPercentage > 0.5) return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    return 'bg-green-50 border-green-200 text-green-800';
  };
  const getIcon = () => {
    if (lossPercentage > 0.8) return <AlertTriangle size={16} className="text-red-500" />;
    if (lossPercentage > 0.5) return <TrendingDown size={16} className="text-orange-500" />;
    return <Shield size={16} className="text-green-500" />;
  };
  return <motion.div initial={{
    opacity: 0,
    y: -10
  }} animate={{
    opacity: 1,
    y: 0
  }} className={`
        px-4 py-3 border-t border-b ${getBannerColor()}
        ${className}
      `}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-sm font-medium">
            Daily Risk Monitor
          </span>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold">
            ${remaining.toLocaleString('en-US', {
            minimumFractionDigits: 2
          })} remaining
          </div>
          <div className="text-xs opacity-75">
            Loss: ${Math.abs(dailyLoss).toLocaleString('en-US', {
            minimumFractionDigits: 2
          })} / ${dailyLimit.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-2">
        <div className="w-full bg-white/50 rounded-full h-1.5 overflow-hidden">
          <motion.div initial={{
          width: 0
        }} animate={{
          width: `${Math.min(lossPercentage * 100, 100)}%`
        }} transition={{
          duration: 0.5,
          ease: 'easeOut'
        }} className={`
              h-full transition-colors duration-300
              ${lossPercentage > 0.9 ? 'bg-red-500' : lossPercentage > 0.7 ? 'bg-orange-500' : lossPercentage > 0.5 ? 'bg-yellow-500' : 'bg-green-500'}
            `} />
        </div>
      </div>

      {/* Warning Message */}
      {isNearLimit && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} className="mt-2 text-xs font-medium">
          ⚠️ Approaching daily loss limit. Trade with caution.
        </motion.div>}
    </motion.div>;
};
export default RiskBanner;