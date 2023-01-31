import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { CountryDetails } from '../features/details/CountryDetails';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack />
        Go Back
      </Button>
      <CountryDetails name={name} />
    </div>
  );
};
