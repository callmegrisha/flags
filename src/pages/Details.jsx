import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selectors';
import { loadCountryByName } from '../store/details/details-actions.js';

export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(loadCountryByName(name));
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack />
        Go Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info {...currentCountry} />}
    </div>
  );
};
