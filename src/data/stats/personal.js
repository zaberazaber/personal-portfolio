import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1995-03-24T08:12:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'My Minds Age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Places Explored',
    value: 4,
    link: 'https://www.google.com/maps/d/u/0/edit?mid=1oMptKsgn-wqszYnw633t3WudSYl2-VxO&usp=sharing',
  },
  {
    key: 'location',
    label: 'I am right now in',
    value: 'New Delhi',
  },
];

export default data;
