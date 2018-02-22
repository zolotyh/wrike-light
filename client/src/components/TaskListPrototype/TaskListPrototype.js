import React from 'react';
import MainContent from '../MainContent/MainContent';
import './TaskListPrototype.css';
import SubList from '../Tree/SubList/SubList';

const structure = [
  {id: '1', title: '1', subItems: []},
  {
    id: '2', title: '2', subItems: [
      {
        id: '3', title: '3', subItems: [
          {id: '5', title: '5', subItems: []},
          {id: '6', title: '6', subItems: []},
          {id: '7', title: '7', subItems: []},
          {id: '8', title: '8', subItems: []},
          {
            id: '9', title: '9', subItems: [
              {id: '10', title: '10', subItems: []},
              {id: '11', title: '11', subItems: []},
              {id: '12', title: '12', subItems: []},
              {id: '13', title: '13', subItems: []},
            ]
          },
        ]
      },
      {id: '4', title: '4', subItems: []},
    ]
  },
];

export default () => (
  <MainContent>
    <SubList items={structure}/>
  </MainContent>
);


// export default class TaskListPrototype extends Component {
//
//   constructor(props) {
//     super(props);
//     this.props = props;
//
//     let {match: {params: {folderId}}} = this.props;
//
//     this.state = {
//       folderId: folderId
//     };
//   }
//
//   _onSubmit = (value) => {
//     this.props.history.push(`/folder/${value}`);
//     this.setState({
//       folderId: value
//     });
//   };
//
//
//   render() {
//     return (
//       <MainContent>
//       </MainContent>
//     );
//   };
//
// }

