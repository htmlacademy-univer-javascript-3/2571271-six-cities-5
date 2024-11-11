import {RatingClasses} from '../../constants/constants.ts';

type RatingStarsProps = {
  rating: number;
  ratingClass: RatingClasses;
  isValueHidden: boolean;
};

export function Stars({rating, ratingClass, isValueHidden}: RatingStarsProps) {
  // eslint-disable-next-line no-nested-ternary
  const page = ratingClass !== RatingClasses.Comment ?
    ratingClass === RatingClasses.Offer ? 'offer' : 'place-card' : 'reviews';

  return (
    <div className={`${page}__rating rating`}>
      <div className={`${page}__stars rating__stars`}>
        <span style={{width: `${(rating * 100) / 5}%`}}/>
        <span className="visually-hidden">Rating</span>
      </div>
      {!isValueHidden && <span className={`${page}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}
