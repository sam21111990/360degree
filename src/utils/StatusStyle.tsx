// utils/statusStyles.ts

export type StatusType = 'Open' | 'Resolved' | 'In Progress' | string;

export interface StatusStyle {
  textColor: string;
  borderColor: string;
  bgColor: string;
  dotColor: string;
  clickable: boolean;
}

const statusStylesMap: Record<string, StatusStyle> = {
  Open: {
    textColor: 'text-red-700',
    borderColor: 'border-red-300',
    bgColor: 'bg-red-50',
    dotColor: 'bg-red-600',
    clickable: true,
  },
  rejected: {
    textColor: 'text-red-700',
    borderColor: 'border-red-300',
    bgColor: 'bg-red-50',
    dotColor: 'bg-red-600',
    clickable: true,
  },
  Resolved: {
    textColor: 'text-green-700',
    borderColor: 'border-green-300',
    bgColor: 'bg-green-50',
    dotColor: 'bg-green-600',
    clickable: false,
  },
  validated: {
    textColor: 'text-green-700',
    borderColor: 'border-green-300',
    bgColor: 'bg-green-50',
    dotColor: 'bg-green-600',
    clickable: false,
  },
  Active: {
    textColor: 'text-green-700',
    borderColor: 'border-green-300',
    bgColor: 'bg-green-50',
    dotColor: 'bg-green-600',
    clickable: false,
  },
  Upcoming: {
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-300',
    bgColor: 'bg-yellow-50',
    dotColor: 'bg-yellow-500',
    clickable: false,
  },
  'to review': {
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-300',
    bgColor: 'bg-yellow-50',
    dotColor: 'bg-yellow-500',
    clickable: false,
  },
  'In Progress': {
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-300',
    bgColor: 'bg-yellow-50',
    dotColor: 'bg-yellow-500',
    clickable: true,
  },
  default: {
    textColor: 'text-gray-700',
    borderColor: 'border-gray-300',
    bgColor: 'bg-gray-50',
    dotColor: 'bg-gray-500',
    clickable: true,
  },
};

export const getStatusStyles = (status: StatusType): StatusStyle => {
  return statusStylesMap[status] || statusStylesMap['default'];
};
