import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DoingList from '../components/doing_list';
import todolist from "../reducers/todos";
import { deleteTodo, changeDoingToDone, changeDoingToTodo } from '../actions';

class DoingBox extends React.Component{
    render(){
        const { dispatch, todolist } = this.props;
        return (
            <DoingList
                todolist={todolist}
                onDelete={index=>dispatch(deleteTodo(index))}
                onDoingToDone={index => dispatch(changeDoingToDone(index))}
                onDoingToTodo={index => dispatch(changeDoingToTodo(index))}
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
export default connect(mapStateToProps)(DoingBox);