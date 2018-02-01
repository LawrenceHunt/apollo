import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

import GoalsSchema from '../../api/goals/Goals.graphql'
import GoalsResolvers from '../../api/goals/resolvers'

import MutationsSchema from '../../api/resolutions/Resolutions.graphql'

import UsersSchema from '../../api/users/User.graphql'
import UsersResolvers from '../../api/users/resolvers'

import {createApolloServer} from 'meteor/apollo'
import {makeExecutableSchema} from 'graphql-tools'
import merge from 'lodash/merge'
// Poop

const typeDefs = [GoalsSchema, ResolutionsSchema, UsersSchema]

const resolvers = merge(GoalsResolvers, ResolutionsResolvers, UsersResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({schema})
