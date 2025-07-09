import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Modal } from 'react-native';
import MediumButton from '../buttons/MediumButton';
import AppColors from '../../assets/colors/AppColors';
import DateTimePicker from '@react-native-community/datetimepicker';import { Platform } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onClear: () => void;
  onApply: () => void;
  
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, onClear, onApply }) => {
    const [status, setStatus] = useState(null);
  const [property, setProperty] = useState(null);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

    const statusOptions = [
    { label: 'All Status', value: 'all' },
    { label: 'Open', value: 'open' },
    { label: 'Closed', value: 'closed' },
    { label: 'Pending', value: 'pending' },
  ];

  const propertyOptions = [
    { label: 'All Properties', value: 'all' },
    { label: 'Property A', value: 'a' },
    { label: 'Property B', value: 'b' },
    { label: 'Property C', value: 'c' },
  ];
  const formatDate = (date: Date | undefined) => {
    if (!date) return 'dd/mm/yyyy';
    return date.toLocaleDateString();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-[#00000080]">
        <View className="bg-white p-6 rounded-t-2xl">
          <Text className="text-[#1E293B] text-lg font-bold mb-4">Filter Issues</Text>

{/* Status Dropdown */}
          <View className="mb-4">
            <Text className="text-sm mb-2" style={{ color: AppColors.black }}>Status</Text>
            <Dropdown
              data={statusOptions}
              labelField="label"
              valueField="value"
              placeholder="Select Status"
              value={status}
              onChange={(item) => setStatus(item.value)}
              style={{ borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, paddingHorizontal: 12, height: 50 }}
              placeholderStyle={{ color: '#94A3B8' }}
              selectedTextStyle={{ color: '#1E293B' }}
              iconStyle={{ width: 20, height: 20 }}
            />
          </View>

          {/* Property Dropdown */}
          <View className="mb-4">
            <Text className="text-sm mb-2" style={{ color: AppColors.black }}>Property</Text>
            <Dropdown
              data={propertyOptions}
              labelField="label"
              valueField="value"
              placeholder="Select Property"
              value={property}
              onChange={(item) => setProperty(item.value)}
              style={{ borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, paddingHorizontal: 12, height: 50 }}
              placeholderStyle={{ color: '#94A3B8' }}
              selectedTextStyle={{ color: '#1E293B' }}
              iconStyle={{ width: 20, height: 20 }}
            />
          </View>
          {/* Status Filter
          <View className="mb-4">
            <Text style={{color:AppColors.black}} className=" text-sm mb-2">Status</Text>
            <TouchableOpacity className="bg-white border border-[#CBD5E1] p-3 rounded-lg">
              <Text className="text-[#1E293B] text-sm">All Status</Text>
            </TouchableOpacity>
          </View>

          
          <View className="mb-4">
            <Text style={{color:AppColors.black}} className=" text-sm mb-2">Property</Text>
            <TouchableOpacity className="bg-white border border-[#CBD5E1] p-3 rounded-lg">
              <Text className="text-[#1E293B] text-sm">All Properties</Text>
            </TouchableOpacity>
          </View> */}

{/* Start Date */}
          <View className="mb-4">
            <Text style={{ color: AppColors.black }} className=" text-sm mb-2">Start Date</Text>
            <TouchableOpacity
              onPress={() => setShowStartPicker(true)}
              className="bg-white border border-[#CBD5E1] p-3 rounded-lg flex-row items-center justify-between"
            >
              <Text className="text-[#1E293B] text-sm">
                {formatDate(startDate)}
              </Text>
              <Icon name="calendar" size={18} color={AppColors.black} />
            </TouchableOpacity>
            {showStartPicker && (
              <DateTimePicker
                value={startDate || new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowStartPicker(Platform.OS === 'ios');
                  if (selectedDate) setStartDate(selectedDate);
                }}
              />
            )}
          </View>

          {/* End Date */}
          <View className="mb-6">
            <Text style={{ color: AppColors.black }} className=" text-sm mb-2">End Date</Text>
            <TouchableOpacity
              onPress={() => setShowEndPicker(true)}
              className="bg-white border border-[#CBD5E1] p-3 rounded-lg flex-row items-center justify-between"
            >
              <Text className="text-[#1E293B] text-sm">
                {formatDate(endDate)}
              </Text>
              <Icon name="calendar" size={18} color={AppColors.black} />
            </TouchableOpacity>
            {showEndPicker && (
              <DateTimePicker
                value={endDate || new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowEndPicker(Platform.OS === 'ios');
                  if (selectedDate) setEndDate(selectedDate);
                }}
              />
            )}
          </View>

          {/* Start Date
          <View className="mb-4">
            <Text style={{color:AppColors.black}} className=" text-sm mb-2">Start Date</Text>
            <TextInput
              placeholder="dd/mm/yyyy"
              className="bg-white border border-[#CBD5E1] p-3 rounded-lg text-[#1E293B] text-sm"
              placeholderTextColor="#94A3B8"
            />
          </View>

          
          <View className="mb-6">
            <Text style={{color:AppColors.black}} className=" text-sm mb-2">End Date</Text>
            <TextInput
              placeholder="dd/mm/yyyy"
              className="bg-white border border-[#CBD5E1] p-3 rounded-lg text-[#1E293B] text-sm"
              placeholderTextColor="#94A3B8"
            />
          </View> */}

          {/* Buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <View style={{ flex: 1, marginLeft: -5 }}>
    <MediumButton onPress={onClear} title="Clear" outlined borderColor={AppColors.primary} textColor={AppColors.primary} />
  </View>
  <View style={{ flex: 1, marginLeft: 12 }}>
    <MediumButton onPress={onApply} title="Apply" backgroundColor={AppColors.primary} textColor={AppColors.white} />
  </View>

            {/* <TouchableOpacity
              onPress={onClear}
              className="bg-[#E5E7EB] p-3 rounded-full w-[48%]"
            >
              <Text className="text-[#1E293B] text-center text-sm font-bold">Clear</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={onApply}
              className="bg-[#1E40AF] p-3 rounded-full w-[48%]"
            >
              <Text className="text-white text-center text-sm font-bold">Apply</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;