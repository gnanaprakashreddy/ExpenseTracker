import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveDataHandler = (recievedExpenseData) => {
       const expenseData =  {
           ...recievedExpenseData,
            id: Math.random().toString()
       }
      props.addExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveData={saveDataHandler}/>
    </div>
}

export default NewExpense