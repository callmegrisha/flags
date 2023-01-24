import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import {
  selectVisibleCountries,
  selectCountriesInfo,
} from '../store/countries/countries-selectors';
import { loadCounries } from '../store/countries/countries-actions';
import { selectControls } from '../store/controls/controls-selectors';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCounries());
    }
  }, [qty, dispatch]);

  return (
    <>
      <Controls />
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading</h2>}
      {status === 'received' && (
        <List>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.svg,
              name: country.name,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: country.region,
                },
                {
                  title: 'Capital',
                  description: country.capital,
                },
              ],
            };

            return (
              <Card
                key={country.name}
                {...countryInfo}
                href={`/country/${country.name}`}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
