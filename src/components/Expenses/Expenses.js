import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const  Expenses = (props) => {

    const [expenses, setExpenses] = useState(props.expenses)
    const [year, setYear] = useState('2020')

    const onYearSelectHandler = (recievedYear) => {
        const initialExpenses = props.expenses
        // console.log(expenses[0].date.getFullYear)
        const updatedExpenses = initialExpenses.filter(expense => 
                expense.date.getFullYear() == recievedYear)
        // console.log(updatedExpenses);
        setExpenses(updatedExpenses)
        setYear(recievedYear);
        
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter year={year} onYearSelect = {onYearSelectHandler}/>
                {
                    expenses.map(expense => 
                    <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
                )
                }
            </Card>
        </div>
    )
}

export default Expenses;