import React, {Component} from 'react';
import SubList from '../SubList/SubList';
import RightIcon from './RightIcon.svg';
import './ListItem.css';


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
      <div className={'list_item_title-wrapper'} onClick={this._onClick}>
        <div className="list-item_expander">
          {this._getExpander()}
        </div>
        <div className="list-item_title">
          {this.state.item.title}
        </div>
      </div>
      <div className={this._getWrapperClass()}>
        {this.state.item.subItems.length > 0 ? <SubList items={this.state.item.subItems}/> : ''}
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

  _showExpander = () => this.state.item.subItems.length > 0;

  _getWrapperClass() {
    return 'list-item_wrapper list-item_wrapper' + (this.state.isOpen ? '--open' : '--closed');
  }
}

