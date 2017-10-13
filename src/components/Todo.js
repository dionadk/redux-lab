import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {removeTodo, addTodo} from '../actions'
import Shelf from './Shelf'

const Todo = (props) => {
  let todoItems = props.todo.map((item, id) => {
    return (
      <li key={id}>
        {item}
        <button onClick={() => props.dispatch(removeTodo(item))}>-</button>
      </li>
    )
  })
  return (
    <div>
      <Shelf addItem={(item) => props.dispatch(addTodo(item))} />
      <h2>Todo</h2>
      <ol>
        {todoItems}
      </ol>
    </div>
  )
}

function mapStateToProps (state, props) {
  return {
    todo: state
  }
}

export default connect(mapStateToProps)(Todo)
