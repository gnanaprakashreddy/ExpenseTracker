import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveDataHandler = (recievedExpenseData) => {
       const expenseData =  {
           ...recievedExpenseData,
            id: Math.random().toString()
       }
      props.addExpense(expenseData);
      setShowForm(false)
    }

    const [showForm, setShowForm] = useState(false)

   const setEditing =() => {
       setShowForm(true)
   }

   const cancelEditing = () => {
       setShowForm(false)
   }
    return <div className="new-expense">
        
            {!showForm && <button onClick={setEditing}>Add Item</button>}
            {showForm && <ExpenseForm showForm={cancelEditing} onSaveData={saveDataHandler}/>}
        
    </div>
}

export default NewExpense