import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';
interface Account {
  id: string;
  name: string;
  balance: number;
  isLive: boolean;
}
const mockAccounts: Account[] = [{
  id: 'acc-001',
  name: 'Trading Account',
  balance: 125430.50,
  isLive: true
}, {
  id: 'acc-002',
  name: 'Paper Trading',
  balance: 100000.00,
  isLive: false
}];
const AccountSelector: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account>(mockAccounts[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleAccountSelect = (account: Account) => {
    setSelectedAccount(account);
    setIsOpen(false);
  };
  return <div className="relative">
      <motion.button whileHover={{
      scale: 1.01
    }} whileTap={{
      scale: 0.99
    }} onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-2 bg-muted hover:bg-muted/80 rounded border border-border transition-colors focus:outline-none focus:ring-1 focus:ring-ring">
        <div className="flex items-center gap-2">
          <div className="relative">
            <motion.div animate={{
            scale: selectedAccount.isLive ? [1, 1.2, 1] : 1,
            opacity: selectedAccount.isLive ? [1, 0.7, 1] : 0.5
          }} transition={{
            duration: 2,
            repeat: selectedAccount.isLive ? Infinity : 0
          }} className={`w-1.5 h-1.5 rounded-full ${selectedAccount.isLive ? 'bg-green-500' : 'bg-muted-foreground'}`} />
            {selectedAccount.isLive && <Zap size={6} className="absolute -top-0.5 -right-0.5 text-green-500 fill-current" />}
          </div>
          <div className="text-left">
            <p className="font-medium text-foreground text-xs">
              {selectedAccount.name}
            </p>
            <p className="text-xs text-muted-foreground">
              ${selectedAccount.balance.toLocaleString('en-US', {
              minimumFractionDigits: 0
            })}
            </p>
          </div>
        </div>
        <ChevronDown size={12} className={`text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* Dropdown - Compact */}
      {isOpen && <motion.div initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -10
    }} className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded shadow-lg z-20">
          {mockAccounts.map(account => <button key={account.id} onClick={() => handleAccountSelect(account)} className="w-full flex items-center gap-2 p-2 text-left hover:bg-muted first:rounded-t last:rounded-b transition-colors">
              <div className="relative">
                <div className={`w-1.5 h-1.5 rounded-full ${account.isLive ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                {account.isLive && <Zap size={6} className="absolute -top-0.5 -right-0.5 text-green-500 fill-current" />}
              </div>
              <div>
                <p className="font-medium text-foreground text-xs">
                  {account.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  ${account.balance.toLocaleString('en-US', {
              minimumFractionDigits: 0
            })}
                </p>
              </div>
            </button>)}
        </motion.div>}
    </div>;
};
export default AccountSelector;