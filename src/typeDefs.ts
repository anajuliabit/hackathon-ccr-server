import { gql } from 'apollo-server';

export const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    name: String
    email: String
    password: String
  }
  type Authentication {
    token: String
    email: String
  }
  type Journey {
    id: ID!
    jumpingoff: String
    destination: String
    inputtime: Date
    outputtime: Date
  }
  type Query {
    user(id: ID!): User!
    login(email: String!, password: String!): Authentication!
  }
  type Mutation {
    registerUser(name: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): LoginResponse!
    startJourney(
      jumpingoff: String!
      destination: String!
      outputtime: Date!
    ): Journey!
  }
  type LoginResponse {
    token: String
    user: User
  }
`;
