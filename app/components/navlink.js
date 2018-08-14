import React from 'react';
import { Link } from 'react-router';
import {Row,Col} from 'antd';

export default class NavLink extends React.Component{
    render(){
        return (
            <Row className="navlink">
                <Col span={7}>
                </Col>
                <Col span={10}>
                    <Row>
                        <Col span={6}>
                            <Link to="/">全部&nbsp;{this.props.allNumber}</Link>
                        </Col>
                        <Col span={6}>
                            <Link to="/todo">新建事件&nbsp;{this.props.todoNumber}</Link>
                        </Col>
                        <Col span={6}>
                            <Link to="/doing">正在进行&nbsp;{this.props.doingNumber}</Link>
                        </Col>
                        <Col span={6}>
                            <Link to="/done">已完成&nbsp;{this.props.doneNumber}</Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={7}></Col>
            </Row>
        );
    }
}
