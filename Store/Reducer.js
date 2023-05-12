import {
  UPDATE_SIGNUP,
  SELECTED_SYMPTOMS,
  CONFIRM_APPOINTMENT,
  PATIENT_DETAILS,
  APPOINTMENT_CONDITION,
  DOCTOR_CONFIRMATION,
  DOCTOR_CANCELLATION,
  REASON_FOR_CANCEL,
  CHECK_CONFIRM_APPOINTMENT,
} from './Types';

const InitialState = {
  UserDetail: [], //user signin details
  UserSymptoms: [], //user selected symptoms
  ConfirmAppointment: [], //user selected appointment date,selected doctor
  ConfirmAppointment1: [],
  PatientDetails: [], //patient details
  AppointmentCondition: false,
  AppointmentStatus: '0', //status of appointment 0 for pending , -1 for cancelled, 1 for sucess
  ReasonToCancel: [], //Doctors reason to cancel the appointment
  CheckConfirmAppointment: [
    {key: 1, name: 'colin'},
    {key: 2, name: 'brighton'},
  ],
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNUP:
      return {
        ...state,
        UserDetail: action.data,
      };
    case SELECTED_SYMPTOMS:
      return {
        ...state,
        UserSymptoms: action.data,
      };

    case CONFIRM_APPOINTMENT:
      return {
        ...state,
        ConfirmAppointment: [...state.ConfirmAppointment, action.data],
        ConfirmAppointment1: [action.data],
      };
    case PATIENT_DETAILS:
      return {
        ...state,
        PatientDetails: action.data,
      };
    case APPOINTMENT_CONDITION:
      return {
        ...state,
        AppointmentCondition: action.check,
      };
    case DOCTOR_CONFIRMATION:
      return {
        ...state,
        AppointmentStatus: action.status,
      };
    case DOCTOR_CANCELLATION:
      return {
        ...state,
        AppointmentStatus: action.status,
      };
    case REASON_FOR_CANCEL:
      return {
        ...state,
        ReasonToCancel: action.reason,
      };
    case CHECK_CONFIRM_APPOINTMENT:
      return {
        ...state,
        CheckConfirmAppointment: [
          ...state.CheckConfirmAppointment,
          action.data,
        ],
      };
    default:
      return state;
  }
};

export {reducer};
