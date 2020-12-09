import { gql } from "@apollo/client";

export const GET_MY_CLIPS = gql`
  query GET_MY_CLIPS {
    clips {
      id
      data
      updated_at
    }
  }
`;

export const CREATE_CLIP = gql`
  mutation CREATE_CLIP($data: String!) {
    createClip(input: { data: { data: $data } }) {
      clip {
        id
        data
        updated_at
      }
    }
  }
`;

export const DELETE_CLIP = gql`
  mutation DELETE_CLIP($id: ID!) {
    deleteClip(input: { where: { id: $id } }) {
      clip {
        id
      }
    }
  }
`;
export const UPDATE_CLIP = gql`
  mutation UPDATE_CLIP($data: String!, $id: ID!) {
    updateClip(input: { where: { id: $id }, data: { data: $data } }) {
      clip {
        id
        data
        updated_at
      }
    }
  }
`;
