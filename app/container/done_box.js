import React from 'react';
import {connect} from 'react-redux';
import DoneList from '../components/done_list';
import todolist from "../reducers/todos";
import { deleteTodo, changeDoneToDoing } from '../actions';

class DoneBox extends React.Component{
    render(){
        const { dispatch, todolist } = this.props;
        return (
            <DoneList
                todolist={todolist}
                onDelete={index=>dispatch(deleteTodo(index))}
                onDoneToDoing={index => dispatch(changeDoneToDoing(index))}
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
export default connect(mapStateToProps)(DoneBox);