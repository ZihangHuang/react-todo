import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoList from '../components/todo_list';
import todolist from "../reducers/todos";
import { deleteTodo, changeTodoToDoing } from '../actions';

class TodoBox extends React.Component{
    render(){
        const { dispatch, todolist } = this.props;
        return (
            <TodoList
                todolist={todolist}
                onDelete={index=>dispatch(deleteTodo(index))}  onTodoToDoing={index=>dispatch(changeTodoToDoing(index))}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    todolist: state.todolist
});
// const mapDispatchToProps = (dispatch) => {
//
// }
export default connect(mapStateToProps)(TodoBox);