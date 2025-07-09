// components/TopCard.tsx

import React from 'react';
import { View } from 'react-native';
import InfoCard from './InfoCard';

const TopCard = () => {
  return (
    <View style={{ padding: 16 }}>
      <View className='flex-row justify-between items-center'>
        <InfoCard
          count="86"
          label="Total Properties"
          iconType="Feather"
          iconName="home"
        />
        <InfoCard
          count="210"
          label="Registered Users"
          iconType="Feather"
          iconName="users"
        />
      </View>

      <View className='flex-row justify-between items-center mt-2'>
        <InfoCard
          count="07"
          label="Pending Cleanings"
          iconType="Feather"
          iconName="droplet"
        />
        <InfoCard
          count="03"
          label="Open Issues"
          iconType="Feather"
          iconName="alert-triangle"
        />
      </View>
    </View>
  );
};

export default TopCard;
