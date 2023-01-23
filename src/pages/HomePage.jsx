import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import {
  selectAllCountries,
  selectCountriesInfo,
} from '../store/countries/countries-selectors';
import { loadCounries } from '../store/countries/countries-actions';

export const HomePage = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
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
