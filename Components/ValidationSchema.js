import * as yup from 'yup';

export const formSchema = yup.object({
  // patient_id: yup.string().required('PatientId is Required'),
  patient_name: yup
    .string()
    .required("Patient'sName is Required")
    .min(3, 'Minimum 3 Characters '),
  father_name: yup
    .string()
    .required('FatherName is Required')
    .min(3, 'Minimum 3 Characters'),
  date_of_birth: yup.string().required('DateOfBirth is Required'),
  age: yup.number().required('Age is Required'),
  address: yup
    .string()
    .required('Address is Required')
    .min(10, 'Enter Valid Address'),
  phone_number: yup
    .number()
    .required('PhoneNumber is Required')
    .min(10, 'Invalid PhoneNumber'),
  blood_group: yup
    .string()
    .oneOf(
      ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      'Invalid Blood Group',
    )
    .required('Blood Group is required'),
});

export const addMedicineScehema = yup.object({
  unique_id: yup.number().required('UniqueId is Required'),
  brand_name: yup.string().required('BrandName is Required'),
  medicine_name: yup.string().required('MedicineName is Required'),
  medicine_dose: yup.number().required('MedicineDose is Required'),
  quantity: yup.number().required('Quantity is Required'),
  expiry_date: yup.string().required('ExpiryDate is Required'),
  purchased_date: yup.string().required('PurchasedDate is Required'),
  stocked_date: yup.string().required('StockedDate is Required'),
  price: yup.number().required('Price is Required'),
});

export const addCodeSchema = yup.object({
  medicine_id: yup.number().required('Medicine Id is Required'),
  medicine_name: yup.string().required('Medicine Name is Required'),
  medicine_brand: yup.string().required('Medicine Brand is Required'),
  minimum_quantity: yup.number().required('Minimum Quantity is Required'),
});

export const signUpSchema = yup.object({
  username: yup.string().required('UserName is Required'),
  email: yup.string().email('Enter Valid Email').required('Email is Required'),
  password: yup.string().required('password is Required').min(6),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], "Password Doesn't match").
    required('UserName is Required')
});

export const LoginSchema=yup.object({
  email: yup.string().email('Enter Valid Email').required(),
  password: yup.string().required().min(6)
})
