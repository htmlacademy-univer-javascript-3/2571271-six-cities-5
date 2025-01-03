import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AppRoutes } from '../../constants/constants.ts';

const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

type TabsProps = {
  selectedCity: string;
  onClick: (city: string) => void;
}

export function Tabs({ selectedCity, onClick }: TabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <Link
                to={AppRoutes.Root}
                className={cn('locations__item-link', 'tabs__item', {
                  ['tabs__item--active']: city === selectedCity,
                })}
                onClick={() => onClick(city)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
