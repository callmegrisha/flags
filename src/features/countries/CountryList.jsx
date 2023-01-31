import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { useCountries } from './use-countries';

export const CountryList = () => {
  const [countries, { status, error }] = useCountries();

  return (
    <>
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
