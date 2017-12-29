import Vue from 'vue'
import { apolloClient }  from './apollo'
import { store } from './store'
import { router } from './router'
import gql from 'graphql-tag'

/*******************
 *   My Graphql query
*******************/

// Users query
import { CREATE_USER_MUTATION } from './constants/UsersCreate.gql'
import { ALL_USER_QUERY } from './constants/UsersAll.gql'

// Stundents query
import { CREATE_STUDENT_MUTATION } from './constants/StudentsCreate.gql'
import { ALL_STUDENT_QUERY } from './constants/StudentsAll.gql'

export const Bus = new Vue();


/*******************
 *  Create User
*******************/
Bus.$on('createUser', payload => {
    let { email, password, name, company, isAdmin, softDelete } = payload;

    apolloClient.mutate({
        mutation: CREATE_USER_MUTATION,
        variables: {
            email,
            password,
            name,
            company,
            isAdmin,
            softDelete
        },
        refetchQueries: [
            {
                query: ALL_USER_QUERY,
            }
        ]
    });
})
/*******************
 *  Create Student
*******************/
Bus.$on('createStudent', payload => {
    let { email, name, softDelete } = payload;

    apolloClient.mutate({
        mutation: CREATE_STUDENT_MUTATION,
        variables: {
            email,
            name,
            softDelete
        },
        refetchQueries: [
            {
                query: ALL_STUDENT_QUERY,
            }
        ]
    });
})