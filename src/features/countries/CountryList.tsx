
import { List } from 'components/List';
import { useCountries } from './use-countries';
import { CountryInfo } from 'types';
import { Card } from 'components/Card';

export const CountryList = () => {
  const [countries, { status, error }] = useCountries();

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading</h2>}
      {status === 'received' && (
        <List>
          {countries.map((country) => {
            const countryInfo: CountryInfo = {
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
