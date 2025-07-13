import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Edit3, TrendingUp, TrendingDown, Clock, CheckCircle, AlertCircle } from 'lucide-react';
type TabType = 'positions' | 'orders' | 'fills';
interface Position {
  symbol: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
}
interface Order {
  id: string;
  symbol: string;
  side: 'BUY' | 'SELL';
  quantity: number;
  orderType: string;
  price?: number;
  status: 'PENDING' | 'PARTIAL' | 'FILLED' | 'CANCELLED';
  timestamp: Date;
}
interface Fill {
  id: string;
  symbol: string;
  side: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  timestamp: Date;
}
const mockPositions: Position[] = [{
  symbol: 'ES',
  quantity: 5,
  avgPrice: 5294.75,
  currentPrice: 5298.25,
  pnl: 875.00,
  pnlPercent: 0.66
}, {
  symbol: 'NQ',
  quantity: -2,
  avgPrice: 18245.50,
  currentPrice: 18198.75,
  pnl: 935.00,
  pnlPercent: 1.28
}, {
  symbol: 'YM',
  quantity: 3,
  avgPrice: 42850.00,
  currentPrice: 42798.00,
  pnl: -156.00,
  pnlPercent: -0.12
}, {
  symbol: 'RTY',
  quantity: 1,
  avgPrice: 2245.80,
  currentPrice: 2251.40,
  pnl: 280.00,
  pnlPercent: 0.25
}];
const mockOrders: Order[] = [{
  id: '1',
  symbol: 'ES',
  side: 'BUY',
  quantity: 2,
  orderType: 'LMT',
  price: 5290.00,
  status: 'PENDING',
  timestamp: new Date()
}, {
  id: '2',
  symbol: 'NQ',
  side: 'SELL',
  quantity: 1,
  orderType: 'LMT',
  price: 18250.00,
  status: 'PARTIAL',
  timestamp: new Date()
}];
const mockFills: Fill[] = [{
  id: '1',
  symbol: 'ES',
  side: 'BUY',
  quantity: 5,
  price: 5294.75,
  timestamp: new Date(Date.now() - 3600000)
}, {
  id: '2',
  symbol: 'NQ',
  side: 'SELL',
  quantity: 2,
  price: 18245.50,
  timestamp: new Date(Date.now() - 7200000)
}];
const TabbedGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('positions');
  const tabs = [{
    id: 'positions',
    label: 'Positions',
    count: mockPositions.length
  }, {
    id: 'orders',
    label: 'Orders',
    count: mockOrders.length
  }, {
    id: 'fills',
    label: 'Fills',
    count: mockFills.length
  }] as any[];
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'PENDING':
        return <Clock size={10} className="text-yellow-500" />;
      case 'PARTIAL':
        return <AlertCircle size={10} className="text-orange-500" />;
      case 'FILLED':
        return <CheckCircle size={10} className="text-green-500" />;
      case 'CANCELLED':
        return <X size={10} className="text-gray-500" />;
    }
  };
  const renderPositions = () => <div className="space-y-1.5">
      {mockPositions.map(position => <motion.div key={position.symbol} initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} className="p-2 bg-muted rounded border border-border">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground text-xs">
                {position.symbol}
              </span>
              <span className="text-xs text-muted-foreground">
                {position.quantity > 0 ? '+' : ''}{position.quantity}
              </span>
            </div>
            <div className="text-right">
              <div className={`text-xs font-semibold ${position.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {position.pnl >= 0 ? '+' : ''}${position.pnl.toFixed(0)}
              </div>
              <div className={`text-xs ${position.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {position.pnlPercent >= 0 ? '+' : ''}{position.pnlPercent.toFixed(2)}%
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              Avg: ${position.avgPrice.toFixed(2)}
            </span>
            <span>
              Now: ${position.currentPrice.toFixed(2)}
            </span>
          </div>
        </motion.div>)}
    </div>;
  const renderOrders = () => <div className="space-y-1.5">
      {mockOrders.map(order => <motion.div key={order.id} initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} className="p-2 bg-muted rounded border border-border">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              {getStatusIcon(order.status)}
              <span className="font-semibold text-foreground text-xs">
                {order.symbol}
              </span>
              <span className={`text-xs px-1.5 py-0.5 rounded ${order.side === 'BUY' ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-700'}`}>
                {order.side}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-0.5 hover:bg-muted rounded">
                <Edit3 size={10} className="text-muted-foreground" />
              </button>
              <button className="p-0.5 hover:bg-muted rounded">
                <X size={10} className="text-muted-foreground" />
              </button>
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              {order.quantity} @ {order.orderType}
            </span>
            {order.price && <span>
                ${order.price.toFixed(2)}
              </span>}
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {order.timestamp.toLocaleTimeString()}
          </div>
        </motion.div>)}
    </div>;
  const renderFills = () => <div className="space-y-1.5">
      {mockFills.map(fill => <motion.div key={fill.id} initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} className="p-2 bg-muted rounded border border-border">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              {fill.side === 'BUY' ? <TrendingUp size={10} className="text-teal-500" /> : <TrendingDown size={10} className="text-red-500" />}
              <span className="font-semibold text-foreground text-xs">
                {fill.symbol}
              </span>
              <span className={`text-xs px-1.5 py-0.5 rounded ${fill.side === 'BUY' ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-700'}`}>
                {fill.side}
              </span>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-foreground">
                ${fill.price.toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground">
                {fill.quantity} contracts
              </div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {fill.timestamp.toLocaleString()}
          </div>
        </motion.div>)}
    </div>;
  const renderContent = () => {
    switch (activeTab) {
      case 'positions':
        return renderPositions();
      case 'orders':
        return renderOrders();
      case 'fills':
        return renderFills();
    }
  };
  return <div className="flex flex-col h-full">
      {/* Tab Headers - Compact */}
      <div className="flex border-b border-border bg-background">
        {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as TabType)} className={`
              flex-1 px-2 py-2 text-xs font-medium transition-colors relative
              ${activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}
            `}>
            <span>
              {tab.label}
            </span>
            {tab.count > 0 && <span className={`
                  ml-1 px-1.5 py-0.5 text-xs rounded-full
                  ${activeTab === tab.id ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}
                `}>
                {tab.count}
              </span>}
          </button>)}
      </div>

      {/* Tab Content - Compact */}
      <div className="flex-1 overflow-auto p-2">
        <motion.div key={activeTab} initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.2
      }}>
          {renderContent()}
        </motion.div>
      </div>
    </div>;
};
export default TabbedGrid;