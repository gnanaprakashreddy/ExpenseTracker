import React,{useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'

const  Expenses = (props) => {

    const [year, setYear] = useState('2020')

    const onYearSelectHandler = (recievedYear) => {
        // console.log(expenses[0].date.getFullYear)
        setYear(recievedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString()===year)

    

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter year={year} onYearSelect = {onYearSelectHandler}/>
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;