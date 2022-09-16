import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from './ExpensesList'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filterExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={filterExpense} />
            <ExpensesList items={filterExpense}/>
        </Card>
    );
}
export default Expenses;