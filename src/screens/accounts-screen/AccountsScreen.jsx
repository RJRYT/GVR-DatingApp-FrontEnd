import React from 'react';
import ExpenseForm from '../../components/Admin/expense/ExpenseForm';
import ExpenseListTable from '../../components/Admin/expense/ExpenseListTable';

function AccountsScreen() {
  return (
    <div className="min-h-screen w-screen pl-[100px] flex mb-5">
      <div className="w-[500px]">
        <ExpenseForm />
      </div>
      <div className="w-screen ml-6">
        <ExpenseListTable />
      </div>
    </div>
  );
}

export default AccountsScreen;