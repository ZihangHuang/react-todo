import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/header';
import TodoBox from './todo_box';
import DoingBox from './doing_box';
import DoneBox from './done_box';
import {
    deleteTodo,
    changeTodoToDoing,
    changeDoingToDone,
    changeDoingToTodo,
    changeDoneToDoing,
} from '../actions';

 class IndexBox extends React.Component{
    render(){
        const { dispatch, todolist } = this.props;
        return (
            <div>
                <TodoBox
                    todolist={todolist}
                    onDelete={index => dispatch(deleteTodo(index))}
                    onTodoToDoing={index => dispatch(changeTodoToDoing(index))}
                />
                <DoingBox
                    todolist={todolist}
                    onDelete={index => dispatch(deleteTodo(index))}
                    onDoingToDone={index => dispatch(changeDoingToDone(index))}
                    onDoingToTodo={index => dispatch(changeDoingToTodo(index))}
                />
                <DoneBox
                    todolist={todolist}
                    onDelete={index => dispatch(deleteTodo(index))}
                    onDoneToDoing={index => dispatch(changeDoneToDoing(index))}
                />
            </div>
        );
    }
}
IndexBox.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
};
const mapStateToProps = (state) => {
    return { todolist: state.todolist };
};
export default connect(mapStateToProps)(IndexBox);
