import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const OwnerDashboard = () => {
  const { fetchOwnerData } = useContext(AppContext);

  useEffect(() => {
    fetchOwnerData();
  }, []);

  return (
    <div>
      This is Owner Dashboard
    </div>
  );
};

export default OwnerDashboard;