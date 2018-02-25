import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import SubList from './SubList';

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
