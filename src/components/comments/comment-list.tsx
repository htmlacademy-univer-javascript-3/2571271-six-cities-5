import { Comment } from '../../types/comment.ts';
import { CommentComponent } from './comment-component.tsx';

type CommentListProps = {
  comments: Comment[];
}

export function CommentList({comments}: CommentListProps) {
  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.toSorted((f, s) =>
          new Date(f.date).getTime() - new Date(s.date).getTime())
          .map((c) => (
            <CommentComponent {...c} key={c.id}/>
          ))}
      </ul>
    </>
  );
}
