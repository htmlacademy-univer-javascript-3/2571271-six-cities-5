import { useState, memo } from 'react';
import cn from 'classnames';
import { SortingOrder, sorting } from '../../types/sortings.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSortingOrder } from '../../slices/offers-slice.ts';


function SortingInternal(){
  const [isOpen, setIsOpen] = useState(false);
  const selectedOrder = useAppSelector((state) => state.offers.sortingOrder);
  const dispatch = useAppDispatch();
  const open = () => setIsOpen(!isOpen);
  const changeOrder = (order: SortingOrder) => {
    dispatch(changeSortingOrder(order));
    open();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={open}>
        {selectedOrder}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpen,
        })}
      >
        {Object.keys(sorting).map((order) => (
          <li
            key={order}
            className={cn('places__option', {
              'places__option--active': order === selectedOrder,
            })}
            tabIndex={0}
            onClick={() => changeOrder(order as SortingOrder)}
          >
            {order}
          </li>
        ))}
      </ul>
    </form>
  );
}


export const Sorting = memo(SortingInternal);
