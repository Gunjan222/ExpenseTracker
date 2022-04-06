import React from 'react';
import {Text, FlatList} from 'react-native';
import {GlobalStyles} from '../../constant/styles';
import ExpensesItem from './ExpensesItem';

const renderExpenseItem = itemData => {
  return <ExpensesItem {...itemData.item} />;
};

function ExpensesList({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
}

export default ExpensesList;
