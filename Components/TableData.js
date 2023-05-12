import {COL_TYPES} from 'react-native-datatable-component'

export const data = [
  {
    name: 'Muhammad Rafeh',
    age: 21,
    gender: 'male',
    address: 'kanyakumari',
    phone_no: 9092959201,

  },
  {
    name: 'Muhammad Akif',
    age: 22,
    gender: 'male',
    address: 'kanyakumari',
    phone_no: 9092959201,

  },
  {
    name: 'Muhammad Umar',
    age: 21,
    gender: 'male',
    address: 'kanyakumari',
    phone_no: 9092959201,
    
  },
  {
    name: 'Amna Shakeel',
    age: 22,
    gender: 'female',
    address: 'kanyakumari',
    phone_no: 9092959201,
    
  },
  {
    name: 'Muhammad Ammar',
    age: 20,
    gender: 'male',
    address: 'kanyakumari',
    phone_no: 9092959201,
    
  },
  {
    name: 'Muhammad Moiz',
    age: 13,
    gender: 'male',
    address: 'kanyakumari',
    phone_no: 9092959201,
  
  },
];

export const colSettings = [
  {name: 'Id', type: COL_TYPES.INT, width: '20%'},
  {name: 'Name', type: COL_TYPES.STRING, width: '20%'},
  {name: 'Brand', type: COL_TYPES.INT, width: '20%'},
  {name: 'Min-Quantity', type: COL_TYPES.INT, width: '20%'},
  {name: 'Action', type: COL_TYPES.STRING, width: '20%'},

];

export const colNames = ['Id', 'Name','Brand','Min-Quantity','Action'];
