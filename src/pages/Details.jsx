import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { searchByCountry } from '../config';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => {
      setCountry(data[0]);
    });
  }, [name]);

  const goBack = () => navigate(-1);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack />
        Go Back
      </Button>
      {country && <Info {...country} />}
    </div>
  );
};
