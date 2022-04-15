// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        mage: String
        link: String
        title: String!
     }

    input bookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        title: String!
    }

    type Query {
        users: [User]
        
    }    

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: bookInput!): User
        removeBook(bookId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`


// export the typeDefs
module.exports = typeDefs;