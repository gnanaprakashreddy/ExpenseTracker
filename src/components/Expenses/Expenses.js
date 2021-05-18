import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

const  Expenses = (props) => {

    const [year, setYear] = useState('2020')

    const onYearSelectHandler = (recievedYear) => {
        setYear(recievedYear)
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter year={year} onYearSelect = {onYearSelectHandler}/>
                {
                props.expenses.map(expense => 
                    <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>
                )
                }
            </Card>
        </div>
    )
}

export default Expenses;