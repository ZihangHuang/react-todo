import React from 'react';
import { Row, Col } from 'antd';
import { Collapse, Checkbox, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
const Panel = Collapse.Panel;

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }
    handleToDoing(e){
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onTodoToDoing(changeIndex);
    }
    handleDelete(e){
        const delindex = e.target.getAttribute('data-key');
        this.props.onDelete(delindex);
    }
    render(){
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.istodo) {
                number += 1;
            }
            return true;
        });
        const todoList = this.props.todolist.map((item,i) => {
            if(item.istodo){
                return (
                    <li  key={i} style={{margin: 5,borderBottom: `1px solid #ccc`}}>
                        <Row>
                            <Col span={1}>
                                <Checkbox  onClick={this.handleToDoing.bind(this)} data-key={i} checked={!item.istodo}></Checkbox>
                            </Col>
                            <Col span={22}>
                                <p>{item.todo}</p>
                            </Col>
                            <Col span={1}>
                                <Icon type="close-circle" data-key={i} onClick={this.handleDelete.bind(this)} style={{fontSize: 16}}/>
                            </Col>
                        </Row>
                    </li>
                );
            }
        });
        return (
            <div>
                <Row>
                    <Col span={7}></Col>
                    <Col span={10}>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header={
                                <Row>
                                    <Col span={22}>
                                        <h3>要去做</h3>
                                    </Col>
                                    <Col span={2}>
                                        <Button
                                            size="small"
                                            shape="circle"
                                        >{number}</Button>
                                    </Col>
                                </Row>
                            } key="1">
                                <ul>
                                    {todoList}
                                </ul>
                            </Panel>

                        </Collapse>
                    </Col>
                    <Col span={7}></Col>
                </Row>
            </div>
        );
    }
}
