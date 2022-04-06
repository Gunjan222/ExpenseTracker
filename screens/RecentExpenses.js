import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ExpensesContext} from '../store/expenses-context';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {getDateMinusDays} from '../util/date';
import {fetchExpenses} from '../util/http';

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesCtx.setExpense(expenses);
      // setFetchedExpenses(expenses);
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for last 7 days."
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
