import gql from 'graphql-tag';
import SubList from './SubList';
import {graphql} from 'react-apollo';

const subTaskListQuery = gql`
  query SubTaskListQuery($taskId: String!) {
    getSubTaskList(taskId: $taskId){
      id
      title
      subItemList {
        id
      }
    }
  }
`;

export default graphql(subTaskListQuery)(SubList);
