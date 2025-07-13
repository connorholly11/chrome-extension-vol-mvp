import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import AccountSelector from './AccountSelector';
import OrderTicket from './OrderTicket';
import TabbedGrid from './TabbedGrid';
import ThemeToggle from './ThemeToggle';
interface TradingSidePanelProps {
  className?: string;
}
const TradingSidePanel: React.FC<TradingSidePanelProps> = ({
  className = ''
}) => {
  const [isPopoutMode, setIsPopoutMode] = useState(false);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const handlePopout = () => {
    setIsPopoutMode(!isPopoutMode);
  };
  return <motion.div initial={{
    opacity: 0,
    x: 20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.3
  }} className={`
        flex flex-col h-screen bg-background border-l border-border
        ${isPopoutMode ? 'w-full max-w-md mx-auto' : 'w-full max-w-[380px]'}
        ${className}
      `}>
      {/* Collapsible Header */}
      <motion.header animate={{
      height: isHeaderCollapsed ? 'auto' : 'auto'
    }} className="border-b border-border bg-muted/30">
        <div className="flex items-center justify-between px-2 py-1.5">
          <h1 className="text-sm font-medium text-foreground">
            Trading Portal
          </h1>
          <div className="flex items-center gap-1">
            <ThemeToggle className="mr-1" />
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={handlePopout} className="flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors" title="Pop out to window">
              <ExternalLink size={12} />
              <span className="hidden sm:inline">Pop out</span>
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={() => setIsHeaderCollapsed(!isHeaderCollapsed)} className="p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors" title={isHeaderCollapsed ? "Expand header" : "Collapse header"}>
              {isHeaderCollapsed ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
            </motion.button>
          </div>
        </div>

        {/* Account Selector - Collapsible */}
        <motion.div animate={{
        height: isHeaderCollapsed ? 0 : 'auto',
        opacity: isHeaderCollapsed ? 0 : 1,
        overflow: 'hidden'
      }} transition={{
        duration: 0.2
      }} className="px-2 pb-1.5 border-b border-border">
          <AccountSelector />
        </motion.div>
      </motion.header>

      {/* Compact Order Ticket */}
      <div className="bg-background border-b border-border">
        <div className="p-2">
          <OrderTicket />
        </div>
      </div>

      {/* Scrollable Tabbed Grid */}
      <div className="flex-1 overflow-hidden">
        <TabbedGrid />
      </div>
    </motion.div>;
};
export default TradingSidePanel;