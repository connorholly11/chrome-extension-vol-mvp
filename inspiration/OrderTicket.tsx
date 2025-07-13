import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Lock, Unlock, Search, X, AlertTriangle, Shield } from 'lucide-react';
interface OrderTicketProps {
  className?: string;
}
type OrderType = 'MKT' | 'LMT';
type TimeInForce = 'DAY';
const OrderTicket: React.FC<OrderTicketProps> = ({
  className = ''
}) => {
  const [symbol, setSymbol] = useState('ES');
  const [quantity, setQuantity] = useState(1);
  const [orderType, setOrderType] = useState<OrderType>('MKT');
  const [price, setPrice] = useState('');
  const [timeInForce, setTimeInForce] = useState<TimeInForce>('DAY');
  const [isPriceLocked, setIsPriceLocked] = useState(false);
  const [isValidOrder, setIsValidOrder] = useState(true);

  // Risk monitoring
  const [dailyLoss] = useState(-1250.75);
  const [dailyLimit] = useState(5000);
  const remaining = dailyLimit - Math.abs(dailyLoss);
  const lossPercentage = Math.abs(dailyLoss) / dailyLimit;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'b') {
        e.preventDefault();
        handleBuy();
      } else if (e.altKey && e.key === 's') {
        e.preventDefault();
        handleSell();
      } else if (e.metaKey && e.key === 'Enter') {
        e.preventDefault();
        // Submit current order
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };
  const handleBuy = () => {
    if (isValidOrder) {
      console.log('BUY order submitted:', {
        symbol,
        quantity,
        orderType,
        price,
        timeInForce
      });
    }
  };
  const handleSell = () => {
    if (isValidOrder) {
      console.log('SELL order submitted:', {
        symbol,
        quantity,
        orderType,
        price,
        timeInForce
      });
    }
  };
  const handleClose = () => {
    console.log('Close position for:', symbol);
  };
  const showPriceField = orderType === 'LMT';
  const getRiskColor = () => {
    if (lossPercentage > 0.8) return 'text-red-600';
    if (lossPercentage > 0.5) return 'text-orange-600';
    return 'text-green-600';
  };
  const getRiskIcon = () => {
    if (lossPercentage > 0.8) return <AlertTriangle size={12} className="text-red-500" />;
    return <Shield size={12} className="text-green-500" />;
  };
  return <div className={`space-y-2 ${className}`}>
      {/* Inline Risk Indicator */}
      <div className="flex items-center justify-between px-2 py-1 bg-muted rounded text-xs border border-border">
        <div className="flex items-center gap-1">
          {getRiskIcon()}
          <span className="font-medium text-foreground">Risk</span>
        </div>
        <div className={`font-semibold ${getRiskColor()}`}>
          ${remaining.toLocaleString('en-US', {
          minimumFractionDigits: 0
        })} left
        </div>
      </div>

      {/* Symbol Input - Compact */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-foreground">Symbol</label>
        <div className="relative">
          <input type="text" value={symbol} onChange={e => setSymbol(e.target.value.toUpperCase())} className="w-full px-2 py-1.5 pr-8 border-2 border-border/60 dark:border-border/80 rounded text-xs font-mono uppercase bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring hover:border-border transition-colors" placeholder="Symbol" />
          <Search size={12} className="absolute right-2 top-2 text-muted-foreground" />
        </div>
      </div>

      {/* Quantity Input - Compact */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-foreground">Contracts</label>
        <div className="flex items-center gap-1">
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => handleQuantityChange(-1)} className="p-1.5 border-2 border-border/60 dark:border-border/80 rounded hover:bg-muted hover:border-border focus:outline-none focus:ring-1 focus:ring-ring transition-colors">
            <Minus size={10} />
          </motion.button>
          <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="flex-1 px-2 py-1.5 border-2 border-border/60 dark:border-border/80 rounded text-center text-xs font-mono bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring hover:border-border transition-colors" min="1" />
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => handleQuantityChange(1)} className="p-1.5 border-2 border-border/60 dark:border-border/80 rounded hover:bg-muted hover:border-border focus:outline-none focus:ring-1 focus:ring-ring transition-colors">
            <Plus size={10} />
          </motion.button>
        </div>
      </div>

      {/* Order Type & Price Row - Compact Grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-foreground">Type</label>
          <select value={orderType} onChange={e => setOrderType(e.target.value as OrderType)} className="w-full px-2 py-1.5 border-2 border-border/60 dark:border-border/80 rounded text-xs bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring hover:border-border transition-colors">
            <option value="MKT">Market</option>
            <option value="LMT">Limit</option>
          </select>
        </div>

        {showPriceField && <div className="space-y-1">
            <label className="block text-xs font-medium text-foreground">Price</label>
            <div className="relative">
              <input type="number" value={price} onChange={e => setPrice(e.target.value)} disabled={isPriceLocked} className="w-full px-2 py-1.5 pr-8 border-2 border-border/60 dark:border-border/80 rounded text-xs font-mono disabled:bg-muted disabled:text-muted-foreground bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring hover:border-border transition-colors" placeholder="0.00" step="0.25" />
              <button onClick={() => setIsPriceLocked(!isPriceLocked)} className="absolute right-1.5 top-1.5 p-0.5 hover:bg-muted rounded">
                {isPriceLocked ? <Lock size={10} className="text-muted-foreground" /> : <Unlock size={10} className="text-muted-foreground" />}
              </button>
            </div>
          </div>}
      </div>

      {/* Time in Force - Compact */}
      <div className="space-y-1">
        <label className="block text-xs font-medium text-foreground">TIF</label>
        <button className="w-full px-2 py-1.5 text-xs rounded border bg-primary text-primary-foreground border-primary" disabled>
          DAY
        </button>
      </div>

      {/* Action Buttons - Compact */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} onClick={handleBuy} disabled={!isValidOrder} className="px-3 py-2 bg-teal-500 hover:bg-teal-600 disabled:bg-muted disabled:text-muted-foreground text-white font-semibold rounded text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-teal-500">
          BUY
        </motion.button>
        <motion.button whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }} onClick={handleSell} disabled={!isValidOrder} className="px-3 py-2 bg-red-400 hover:bg-red-500 disabled:bg-muted disabled:text-muted-foreground text-white font-semibold rounded text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-red-400">
          SELL
        </motion.button>
      </div>

      {/* Quick Actions - Compact */}
      <div className="pt-1">
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={handleClose} className="flex items-center justify-center gap-1 w-full px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
          <X size={10} />
          Close Position
        </motion.button>
      </div>
    </div>;
};
export default OrderTicket;