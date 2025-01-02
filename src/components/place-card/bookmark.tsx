import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FavouriteData } from '../../types/favourite-data.ts';
import { useAppDispatch } from '../../store/hooks';
import { changeFavoriteStatusAction } from '../../store/api-actions.ts';
import { AppRoutes } from '../../constants/constants.ts';

type BookmarkProps = FavouriteData & {
  type: string;
};

function Bookmark({offerId, isFavorite, type}: BookmarkProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addToFavorites = () => {
    dispatch(changeFavoriteStatusAction({offerId, isFavorite: !isFavorite}))
      .unwrap()
      .catch(() => navigate(AppRoutes.Login));
  };
  const buttonDesc = isFavorite ? 'In bookmarks' : 'To bookmarks';
  return (
    <button
      className={cn('button', `${type}__bookmark-button`, {
        [`${type}__bookmark-button--active`]: isFavorite,
      })}
      type="button"
      onClick={addToFavorites}
    >
      <svg className={`${type}__bookmark-icon`} width={18} height={19}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{buttonDesc}</span>
    </button>
  );
}

export const CardBookmark = (
  props: Omit<BookmarkProps, 'type'>
) => <Bookmark {...props} type="place-card"/>;

export const OfferBookmark = (
  props: Omit<BookmarkProps, 'type'>
) => <Bookmark {...props} type="offer"/>;
