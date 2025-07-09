import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import IconContainer from '../buttons/IconContainer';
import FilterModal from '../modals/FilterModal';

interface AppHeaderProps {
  title: string;
  search?: boolean;
  showBack?: boolean;
  showNotification?: boolean;
  titleSize?: 'text-xl' | 'text-2xl' | 'text-lg'; 
  filterFields?: Array<'status' | 'property' | 'startDate' | 'endDate' | 'sortBy'>;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  search = false,
  showBack = true,
  showNotification = false,
  titleSize = 'text-lg',
  filterFields,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleClear = () => {
    console.log('Clear filters');
    setModalVisible(false);
  };

  const handleApply = () => {
    console.log('Apply filters');
    setModalVisible(false);
  };

  return (
    <View className="bg-transparent p-4 mt-4">
      {/* Title Row */}
      <View className="flex-row items-center justify-between mb-3">
        {showBack ? (
          <View className="flex-row items-center">
            <IconContainer
              type="MaterialIcons"
              name="arrow-back"
              color="#fff"
              size={20}
            />
            <Text className={`ml-3 font-medium ${titleSize} text-white`}>
              {title}
            </Text>
          </View>
        ) : (
          <>
            <Text className={`font-semibold ${titleSize} text-white`}>
              {title}
            </Text>
            {showNotification && (
              <IconContainer
                type="Ionicons"
                name="notifications-outline"
                color="#fff"
                size={22}
                padding={12}
              />
            )}
          </>
        )}
      </View>

      {/* Search Row */}
      {search && (
        <View className="flex-row items-center">
          {/* Search Bar */}
          <View
            style={{ backgroundColor: 'rgba(59, 85, 115, 0.9)' }}
            className="flex-1 rounded-full px-3 flex-row items-center"
          >
            <IconContainer
              type="Feather"
              name="search"
              color="#fff"
              size={20}
              padding={6}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#ccc"
              className="text-sm text-white flex-1"
            />
          </View>

          {/* Filter Icon */}
          <View className="ml-3">
            <IconContainer
              type="Ionicons"
              name="filter"
              color="#fff"
              size={20}
              padding={14}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      )}

      <FilterModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onClear={handleClear}
        onApply={handleApply}
        fields={filterFields || ['status', 'property', 'startDate', 'endDate','sortBy']} 
        
      />
    </View>
  );
};

export default AppHeader;
