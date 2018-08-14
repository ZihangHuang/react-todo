import React from 'react';
import { findDOMNode } from 'react-dom';
import {Row,Col,Input,Button,message} from 'antd';
const Search = Input.Search;

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    handleClick(e){
        e.preventDefault();
        const input =  findDOMNode(this.refs.inputs);
        const text = input.value.trim();
        if(text.length > 20){
            message.warning('内容不得多于20字！',1);
        }else if(text !== ''){
            this.props.onAdd(text);
        }else {
            message.warning('请输入内容！',1);
        }
        input.value = '';
    }
    handleSearch(e){
        e.preventDefault();
        const input =  findDOMNode(this.refs.inputs);
        const text = input.value.trim();
        this.props.onSearch(text);
        input.value = '';
    }
    render(){
        return (
            <header className="header">
                <Row>
                    <Col span={6}></Col>
                    <Col span={11}>
                        <form onSubmit={this.handleClick.bind(this)}>
                            <label style={{fontSize: 20,fontWeight: `bold`,marginRight: 10}}>我的备忘录</label>
                            <Input
                                placeholder="请输入要做的事(20字以内)"
                                ref="inputs"
                                style={{width: 300,marginRight: 10}}
                            />
                            <Button type="primary" htmlType="submit" style={{marginRight: 10}}>提交</Button>
                            <Button type="primary" onClick={this.handleSearch.bind(this)}>搜索</Button>
                        </form>
                    </Col>
                    <Col span={7}></Col>
                </Row>
            </header>
        );
    }
}
