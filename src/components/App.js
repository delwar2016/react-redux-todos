/**
 * Created by delwar on 8/22/16.
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
<div>
<AddTodo />
<VisibleTodoList />
<Footer />
</div>
)

export default App
