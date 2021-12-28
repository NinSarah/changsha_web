const getDict = {
  state: {
    equipmentStatus: [],
    taskStatus: [],
    handleWays: []
  },
  mutations: {
    SET_EQUIPMENTSTATUS: (state, equipmentStatus) => {
      state.equipmentStatus = equipmentStatus
    },
    SET_TASKSTATUS: (state, taskStatus) => {
      state.taskStatus = taskStatus
    },
    SET_HANDLEWAYS: (state, handleWays) => {
      state.handleWays = handleWays
    }
  },
  getters: {
    equipmentStatus: state => state.equipmentStatus,
    taskStatus: state => state.taskStatus,
    handleWays: state => state.handleWays,
  }
}

export default getDict;