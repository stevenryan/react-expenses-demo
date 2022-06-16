import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: '294.67', date: new Date(2022, 2, 28)},
    {id: 'e2', title: 'Phone Bill', amount: '73.87', date: new Date(2022, 2, 21)},
    {id: 'e3', title: 'Netflix', amount: '14.99', date: new Date(2022, 2, 1)},
    {id: 'e4', title: 'Electric', amount: '89.34', date: new Date(2022, 2, 15)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
