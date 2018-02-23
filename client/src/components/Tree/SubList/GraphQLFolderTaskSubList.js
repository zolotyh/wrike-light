import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import SubList from './SubList2';


const folderTaskListQuery = gql`
  query FolderSubTaskListQuery($folderId: String!) {
  
    getFolderTaskList(folderId: $folderId){
      id
      title
      subItemList {
        id
      }
    }
  }
`;

export default graphql(folderTaskListQuery)(SubList);
