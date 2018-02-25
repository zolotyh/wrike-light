const {wrikeAPIRequest} = require('./api');
const {makeExecutableSchema} = require('graphql-tools');
const Dataloader = require('dataloader');
const logger = require('logger');


const getOneTask = async ({taskId}) => {
  const query = `/tasks/${taskId}`;
  logger.log(query);
  return await wrikeAPIRequest({query: query});
};

const taskLoader = new Dataloader(async (keys) => {
  // TODO-add batch support for batch task loading
  logger.log('START BATCH ');
  const result = await Promise.all(keys.map(taskId => {
    return getOneTask({taskId});
  }));
  logger.log('END BATCH ');
  return result;
});


const getTasksFromFolder = async ({folderId}) => {
  const taskList = await wrikeAPIRequest(
    {query: `/folders/${folderId}/tasks?fields=["sharedIds","dependencyIds","briefDescription","parentIds","superParentIds","subTaskIds","responsibleIds","description","recurrent","authorIds","attachmentCount","hasAttachments","customFields","superTaskIds","metadata"]`})


  return taskList.map(async task => {
    task.subItemList = [];

    for (let subTaskId of task.subTaskIds) {
      taskLoader.load(subTaskId).then(subTask => {
        if (subTask.length) {
          return task.subItemList.push(subTask[0]);
        }
      });
    }

    if (task.subTaskIds && task.subTaskIds.length) {
      await taskLoader.load(task.subTaskIds.slice(-1).pop());
    }

    return task;
  });

};



const resolvers = {
  Query: {
    getSubTaskList: async (context, {taskId}) => {
      const task = await getOneTask({taskId});

      const subItemList = [];

      if (task.length) {
        for (let subTaskId of task[0].subTaskIds) {
          taskLoader.load(subTaskId).then(subTask => {
            if (subTask.length) {
              const s =  subTask[0];
              s.subItemList = s.subTaskIds.map(i => {
                return {'id': i};
              });
              return subItemList.push(s);
            }
          });
        }

        if (task[0].subTaskIds && task[0].subTaskIds.length) {
          await taskLoader.load(task[0].subTaskIds.slice(-1).pop());
        }

      }

      return subItemList;
    },
    getFolderTaskList: async (context, {folderId}) => await getTasksFromFolder({folderId})
  },
};


const typeDefinitions = `
enum TaskStatus {
  Active 
  Completed, 
  Deferred, 
  Cancelled
}

enum TaskImportance {
  High
  Normal
  Low
}

type Task {
  id: ID!
  title: String 
  status: TaskStatus
  importance: TaskImportance
  description: String
  subItemList: [Task]
}



type Query {
  getSubTaskList(taskId: String!): [Task]
  getFolderTaskList(folderId: String!): [Task]
}
`;

const schema = makeExecutableSchema({typeDefs: typeDefinitions, resolvers});
module.exports = {schema};
