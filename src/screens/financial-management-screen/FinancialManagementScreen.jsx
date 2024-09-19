import React from 'react';
import TopStats from '../../components/Admin/financial-management/TopStats';
import BalanceAnalytics from '../../components/Admin/financial-management/BalanceAnalytics';
import UnpaidUsers from '../../components/Admin/financial-management/UnpaidUsers';
import Expenses from '../../components/Admin/financial-management/Expenses';

const FinancialManagementScreen = () => {
  return (
    <div className="w-[calc(100vw-4rem)] h-full   overflow-auto ">
      
    <h1 className="text-2xl text-blue-900 font-bold pl-10">Finance</h1>
      
    <div className="p-6 space-y-6">
      {/* Top Stats Section */}
      <TopStats />

      {/* Balance Analytics */}
      <BalanceAnalytics />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Unpaid Users */}
        <UnpaidUsers />

        {/* Expense Section */}
        <Expenses />
      </div>
    </div>
    </div>
  );
};

export default FinancialManagementScreen;