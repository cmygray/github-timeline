export interface UserRepositoriesData {
  user: {
    login: string;
    repositories: {
      nodes: Repository[];
    } /* & Pagination */;
  };
}

export interface UserRepositoriesVariable {
  userId: string;
}

// export interface Pagination {
//   totalCount: number;
//   pageInfo: {
//     endCursor: string;
//     hasNextPage: boolean;
//   };
// }

export interface Repository {
  id: string;
  name: string;
  description: string | null;
  isFork: boolean;
  createdAt: string;
  updatedAt: string;
  stargazers: {
    totalCount: number;
  };
}
