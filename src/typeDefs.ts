import { gql } from 'apollo-server';

export const typeDefs = gql`
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
  type Query {
    user(id: ID!): User!
    login(email: String!, password: String!): Authentication!
  }
  type Mutation {
    registerUser(name: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): LoginResponse!
  }
  type LoginResponse {
    token: String
    user: User
  }
`;
