import React from 'react';
import { Row, Col } from 'antd';
import { Collapse, Checkbox, Button, Icon } from 'antd';
const Panel = Collapse.Panel;

export default class DoingList extends React.Component{
    constructor(props) {
        super(props);
    }
    handleToTodo(e){
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onDoingToTodo(changeIndex);
    }
    handleToDone(e){
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onDoingToDone(changeIndex);
    }
    handleDelete(e){
        const delindex = e.target.getAttribute('data-key');
        this.props.onDelete(delindex);
    }
    render(){
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.doing) {
                number += 1;
            }
            return true;
        });
        const doingList = this.props.todolist.map((item,i) => {
            if(item.doing){
                return (
                    <li  key={i} style={{margin: 5,borderBottom: `1px solid #ccc`}}>
                        <Row>
                            <Col span={1}>
                                <Checkbox  onClick={this.handleToTodo.bind(this)} data-key={i} checked={item.doing}></Checkbox>
                            </Col>
                            <Col span={22}>
                                <p data-key={i} onClick={this.handleToDone.bind(this)} style={{cursor: `pointer`}}>{item.todo}</p>
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
                                        <h3>正在做</h3>
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
                                    {doingList}
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
