import Goals from './goals'

export default {
  Mutation: {
    createGoal(obj, {name, resolutionId}) {
      const GoalId = Goals.insert({
        name,
        resolutionId,
        completed: false
      })
      return Goals.findOne(goalId)
    }
  }
}
