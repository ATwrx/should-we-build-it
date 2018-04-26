import gql from 'graphql-tag';

export const USER_QUERY = gql`
  query findUser($id: ID!) {
    user(id: $id) {
      name
      email
      projects {
        id
        createdAt
        title
        isPublished
        text
        description
        upVotes
        downVotes
      }
    }
  }
`;

export const ME_QUERY = gql`
  query meQuery {
    me {
      name
      email
      projects {
        id
        createdAt
        title
        isPublished
        text
        description
        upVotes
        downVotes
      }
    }
  }
`;

export const DRAFTS_QUERY = gql`
  query draftQuery($owner: User!) {
    drafts(owner: $owner) {
      id
      text
      title
      description
      isPublished
    }
  }
`;

export const FEED_QUERY = gql`
  query projectQuery {
    feed {
      id
      createdAt
      updatedAt
      isPublished
      title
      description
      text
      upVotes
      downVotes
      owner {
        id
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        projects {
          id
          createdAt
          title
          isPublished
          text
          description
          upVotes
          downVotes
        }
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      token
      user {
        name
        email
      }
    }
  }
`;

export const CREATE_DRAFT = gql`
  mutation createDraft($title: String!, $text: String!, $description: String!) {
    createDraft(title: $title, text: $text, description: $description){
      id 
      title
      text
      description
      createdAt
    }
  }
`;
