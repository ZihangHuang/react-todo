import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import NavLink from '../components/navlink';
import {addTodo,search} from "../actions/index";

class HeaderBox extends React.Component{
    constructor(){
        super();
    }
    render(){
        const { todolist, searchText, addTodos } = this.props;
        const allNumber = todolist.length;
        let [todoNumber, doingNumber, doneNumber] = [0, 0, 0];
        todolist.forEach((item) => {
            if(item.istodo){
                todoNumber += 1;
            }else if(item.doing){
                doingNumber +=1;
            }else {
                doneNumber +=1;
            }
        })
        return (
            <div>
                <Header
                    onAdd={text => addTodos(text)}
                    onSearch={text => searchText(text)}
                />
                <NavLink
                    allNumber={allNumber}
                    todoNumber={todoNumber}
                    doingNumber={doingNumber}
                    doneNumber={doneNumber}
                />
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todolist: state.todolist
});

const mapDispatchToProps = (dispatch) => ({
    addTodos: (text) => {
        dispatch(addTodo(text));
    },
    searchText: (text) => {
        dispatch(search(text));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderBox);