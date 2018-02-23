import React, {Component} from 'react';
import RightIcon from './RightIcon.svg';
import './ListItem.css';
import {Paper} from 'material-ui';
import GraphQLSubTaskList from '../SubList/GraphQLSubTaskList';


export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
      isOpen: false
    };
  }


  render() {
    return <li className={'list-item'}>
      <Paper className={'list-item_title-wrapper'}
        style={{'cursor': this._showExpander() ? 'pointer' : 'default'}}
        onClick={this._onClick}>

        <div className="list-item_expander">
          {this._getExpander()}
        </div>
        <div className="list-item_title">
          {this.state.item.title}
        </div>
      </Paper>
      <div className={this._getWrapperClass()}>
        {this.state.item.subItemList && this.state.item.subItemList.length &&  this.state.isOpen > 0 ? <GraphQLSubTaskList taskId={this.state.item.id}/> : ''}
      </div>

    </li>;
  }

  _getExpander() {
    return this._showExpander() ? <img className={this._getExpanderClassName()} src={RightIcon} alt="Right icon"/> : '';
  }

  _onClick = (e) => {
    return this._showExpander() && this.setState({isOpen: !this.state.isOpen});
  };

  _getExpanderClassName = () => this.state.isOpen ? 'list-item_img list-item_img--open' : 'list-item_img list-item_img--closed';

  _showExpander = () => this.state.item.subItemList && this.state.item.subItemList.length > 0;

  _getWrapperClass() {
    return 'list-item_wrapper list-item_wrapper' + (this.state.isOpen ? '--open' : '--closed');
  }
}

