import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    password: String
  }
  type Query {
    user(id: ID!): User!
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
