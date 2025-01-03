import { Comment } from '../../types/comment.ts';
import { RatingClasses, MONTH_NAMES } from '../../constants/constants.ts';
import { Stars } from '../stars/stars.tsx';

type CommentComponentProps = Comment;

function ConvertStringDate(stringDate: string): string{
  const date = new Date(stringDate);

  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

export function CommentComponent({user, rating, comment, date}:CommentComponentProps){
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Stars rating={rating} ratingClass={RatingClasses.Comment} isValueHidden/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{ConvertStringDate(date)}</time>
      </div>
    </li>
  );
}
