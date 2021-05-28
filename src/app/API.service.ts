/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type Post = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type DeletePostInput = {
  id: string;
};

export type ModelPostConditionInput = {
  type?: ModelStringInput | null;
  content?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type CreateFollowRelationshipInput = {
  followeeId: string;
  followerId: string;
  timestamp: number;
};

export type ModelFollowRelationshipConditionInput = {
  timestamp?: ModelIntInput | null;
  and?: Array<ModelFollowRelationshipConditionInput | null> | null;
  or?: Array<ModelFollowRelationshipConditionInput | null> | null;
  not?: ModelFollowRelationshipConditionInput | null;
};

export type FollowRelationship = {
  __typename: "FollowRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
};

export type DeleteFollowRelationshipInput = {
  followeeId: string;
  followerId: string;
};

export type CreatePostInput = {
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type CreateTimelineInput = {
  userId: string;
  timestamp: number;
  postId: string;
};

export type ModelTimelineConditionInput = {
  postId?: ModelIDInput | null;
  and?: Array<ModelTimelineConditionInput | null> | null;
  or?: Array<ModelTimelineConditionInput | null> | null;
  not?: ModelTimelineConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Timeline = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  postId: string;
  post?: Post | null;
};

export type ModelPostFilterInput = {
  type?: ModelStringInput | null;
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null> | null;
  nextToken?: string | null;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelTimelineFilterInput = {
  userId?: ModelIDInput | null;
  timestamp?: ModelIntInput | null;
  postId?: ModelIDInput | null;
  and?: Array<ModelTimelineFilterInput | null> | null;
  or?: Array<ModelTimelineFilterInput | null> | null;
  not?: ModelTimelineFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelTimelineConnection = {
  __typename: "ModelTimelineConnection";
  items?: Array<Timeline | null> | null;
  nextToken?: string | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelFollowRelationshipFilterInput = {
  followeeId?: ModelIDInput | null;
  followerId?: ModelIDInput | null;
  timestamp?: ModelIntInput | null;
  and?: Array<ModelFollowRelationshipFilterInput | null> | null;
  or?: Array<ModelFollowRelationshipFilterInput | null> | null;
  not?: ModelFollowRelationshipFilterInput | null;
};

export type ModelFollowRelationshipConnection = {
  __typename: "ModelFollowRelationshipConnection";
  items?: Array<FollowRelationship | null> | null;
  nextToken?: string | null;
};

export type CreatePostAndTimelineMutation = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type DeletePostMutation = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type CreateFollowRelationshipMutation = {
  __typename: "FollowRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
};

export type DeleteFollowRelationshipMutation = {
  __typename: "FollowRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
};

export type CreatePostMutation = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type CreateTimelineMutation = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  postId: string;
  post?: {
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null;
};

export type GetPostQuery = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null> | null;
  nextToken?: string | null;
};

export type GetTimelineQuery = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  postId: string;
  post?: {
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null;
};

export type ListTimelinesQuery = {
  __typename: "ModelTimelineConnection";
  items?: Array<{
    __typename: "Timeline";
    userId: string;
    timestamp: number;
    postId: string;
    post?: {
      __typename: "Post";
      type: string;
      id?: string | null;
      content: string;
      owner?: string | null;
      timestamp: number;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListPostsSortedByTimestampQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null> | null;
  nextToken?: string | null;
};

export type ListPostsBySpecificOwnerQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null> | null;
  nextToken?: string | null;
};

export type GetFollowRelationshipQuery = {
  __typename: "FollowRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
};

export type ListFollowRelationshipsQuery = {
  __typename: "ModelFollowRelationshipConnection";
  items?: Array<{
    __typename: "FollowRelationship";
    followeeId: string;
    followerId: string;
    timestamp: number;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  type: string;
  id?: string | null;
  content: string;
  owner?: string | null;
  timestamp: number;
};

export type OnCreateTimelineSubscription = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  postId: string;
  post?: {
    __typename: "Post";
    type: string;
    id?: string | null;
    content: string;
    owner?: string | null;
    timestamp: number;
  } | null;
};

export type OnCreateFollowRelationshipSubscription = {
  __typename: "FollowRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
};

export type OnDeleteFollowRelationshipSubscription = {
  __typename: "FollowRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePostAndTimeline(
    content: string
  ): Promise<CreatePostAndTimelineMutation> {
    const statement = `mutation CreatePostAndTimeline($content: String!) {
        createPostAndTimeline(content: $content) {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      content
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostAndTimelineMutation>response.data.createPostAndTimeline;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateFollowRelationship(
    input: CreateFollowRelationshipInput,
    condition?: ModelFollowRelationshipConditionInput
  ): Promise<CreateFollowRelationshipMutation> {
    const statement = `mutation CreateFollowRelationship($input: CreateFollowRelationshipInput!, $condition: ModelFollowRelationshipConditionInput) {
        createFollowRelationship(input: $input, condition: $condition) {
          __typename
          followeeId
          followerId
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFollowRelationshipMutation>(
      response.data.createFollowRelationship
    );
  }
  async DeleteFollowRelationship(
    input: DeleteFollowRelationshipInput,
    condition?: ModelFollowRelationshipConditionInput
  ): Promise<DeleteFollowRelationshipMutation> {
    const statement = `mutation DeleteFollowRelationship($input: DeleteFollowRelationshipInput!, $condition: ModelFollowRelationshipConditionInput) {
        deleteFollowRelationship(input: $input, condition: $condition) {
          __typename
          followeeId
          followerId
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFollowRelationshipMutation>(
      response.data.deleteFollowRelationship
    );
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async CreateTimeline(
    input: CreateTimelineInput,
    condition?: ModelTimelineConditionInput
  ): Promise<CreateTimelineMutation> {
    const statement = `mutation CreateTimeline($input: CreateTimelineInput!, $condition: ModelTimelineConditionInput) {
        createTimeline(input: $input, condition: $condition) {
          __typename
          userId
          timestamp
          postId
          post {
            __typename
            type
            id
            content
            owner
            timestamp
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTimelineMutation>response.data.createTimeline;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            type
            id
            content
            owner
            timestamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetTimeline(
    userId: string,
    timestamp: number
  ): Promise<GetTimelineQuery> {
    const statement = `query GetTimeline($userId: ID!, $timestamp: Int!) {
        getTimeline(userId: $userId, timestamp: $timestamp) {
          __typename
          userId
          timestamp
          postId
          post {
            __typename
            type
            id
            content
            owner
            timestamp
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId,
      timestamp
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTimelineQuery>response.data.getTimeline;
  }
  async ListTimelines(
    userId?: string,
    timestamp?: ModelIntKeyConditionInput,
    filter?: ModelTimelineFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListTimelinesQuery> {
    const statement = `query ListTimelines($userId: ID, $timestamp: ModelIntKeyConditionInput, $filter: ModelTimelineFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listTimelines(userId: $userId, timestamp: $timestamp, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            userId
            timestamp
            postId
            post {
              __typename
              type
              id
              content
              owner
              timestamp
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTimelinesQuery>response.data.listTimelines;
  }
  async ListPostsSortedByTimestamp(
    type?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsSortedByTimestampQuery> {
    const statement = `query ListPostsSortedByTimestamp($type: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPostsSortedByTimestamp(type: $type, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            type
            id
            content
            owner
            timestamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (type) {
      gqlAPIServiceArguments.type = type;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsSortedByTimestampQuery>(
      response.data.listPostsSortedByTimestamp
    );
  }
  async ListPostsBySpecificOwner(
    owner?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsBySpecificOwnerQuery> {
    const statement = `query ListPostsBySpecificOwner($owner: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPostsBySpecificOwner(owner: $owner, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            type
            id
            content
            owner
            timestamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsBySpecificOwnerQuery>(
      response.data.listPostsBySpecificOwner
    );
  }
  async GetFollowRelationship(
    followeeId: string,
    followerId: string
  ): Promise<GetFollowRelationshipQuery> {
    const statement = `query GetFollowRelationship($followeeId: ID!, $followerId: ID!) {
        getFollowRelationship(followeeId: $followeeId, followerId: $followerId) {
          __typename
          followeeId
          followerId
          timestamp
        }
      }`;
    const gqlAPIServiceArguments: any = {
      followeeId,
      followerId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFollowRelationshipQuery>response.data.getFollowRelationship;
  }
  async ListFollowRelationships(
    followeeId?: string,
    followerId?: ModelIDKeyConditionInput,
    filter?: ModelFollowRelationshipFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListFollowRelationshipsQuery> {
    const statement = `query ListFollowRelationships($followeeId: ID, $followerId: ModelIDKeyConditionInput, $filter: ModelFollowRelationshipFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listFollowRelationships(followeeId: $followeeId, followerId: $followerId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            followeeId
            followerId
            timestamp
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (followeeId) {
      gqlAPIServiceArguments.followeeId = followeeId;
    }
    if (followerId) {
      gqlAPIServiceArguments.followerId = followerId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFollowRelationshipsQuery>response.data.listFollowRelationships;
  }
  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          type
          id
          content
          owner
          timestamp
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateTimelineListener(
    userId: string
  ): Observable<SubscriptionResponse<OnCreateTimelineSubscription>> {
    const statement = `subscription OnCreateTimeline($userId: String!) {
        onCreateTimeline(userId: $userId) {
          __typename
          userId
          timestamp
          postId
          post {
            __typename
            type
            id
            content
            owner
            timestamp
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateTimelineSubscription>>;
  }

  OnCreateFollowRelationshipListener: Observable<
    SubscriptionResponse<OnCreateFollowRelationshipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFollowRelationship {
        onCreateFollowRelationship {
          __typename
          followeeId
          followerId
          timestamp
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFollowRelationshipSubscription>>;

  OnDeleteFollowRelationshipListener: Observable<
    SubscriptionResponse<OnDeleteFollowRelationshipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFollowRelationship {
        onDeleteFollowRelationship {
          __typename
          followeeId
          followerId
          timestamp
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFollowRelationshipSubscription>>;
}
