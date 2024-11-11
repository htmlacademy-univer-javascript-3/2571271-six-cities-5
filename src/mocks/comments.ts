import { Comment } from '../types/comment.ts';
import { MockUsers } from './users.ts';

export const MockComments: Comment[] = [
  {
    id: 'comment1',
    date: '2023-11-02',
    user: MockUsers[0],
    comment: 'Great!',
    rating: 5
  },
  {
    id: 'comment2',
    date: '2023-06-15',
    user: MockUsers[1],
    comment: 'Good',
    rating: 4
  },
  {
    id: 'comment3',
    date: '2023-07-23',
    user: MockUsers[2],
    comment: 'Excellent',
    rating: 5
  },
  {
    id: 'comment4',
    date: '2023-02-01',
    user: MockUsers[3],
    comment: 'Bad',
    rating: 2
  },
  {
    id: 'comment5',
    date: '2023-09-17',
    user: MockUsers[4],
    comment: 'Cool',
    rating: 5
  },
  {
    id: 'comment6',
    date: '2023-12-12',
    user: MockUsers[5],
    comment: 'Average',
    rating: 3
  }
];
