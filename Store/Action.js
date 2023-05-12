import {
  UPDATE_LOGIN,
  UPDATE_SIGNUP,
  SELECTED_SYMPTOMS,
  CONFIRM_APPOINTMENT,
  PATIENT_DETAILS,
  APPOINTMENT_CONDITION,
  DOCTOR_CONFIRMATION,
  DOCTOR_CANCELLATION,
  REASON_FOR_CANCEL,
  CHECK_CONFIRM_APPOINTMENT

} from './Types';

export const updateSignup = signup => {
  return {
    type: UPDATE_SIGNUP,
    data: signup,
  };
};

export const updateLogin = login => {
  return {
    type: UPDATE_LOGIN,
    data: login,
  };
};

export const selectedSymptoms = selectedSymps => {
  return {
    type: SELECTED_SYMPTOMS,
    data: selectedSymps,
  };
};
export const confirmAppointment = appointmentDatails => {
  console.log(appointmentDatails, 'redux data');
  return {
    type: CONFIRM_APPOINTMENT,
    data: appointmentDatails,
  };
};
export const updatePatientDetails = patientDetails => {
  return {
    type: PATIENT_DETAILS,
    data: patientDetails,
  };
};

export const appointmentCheck = appointment => {
  return {
    type: APPOINTMENT_CONDITION,
    ckeck: appointment,
  };
};

export const doctorConfirmation = confirmation => {
  return {
    type: DOCTOR_CONFIRMATION,
    status: confirmation,
  };
};

export const doctorCancellation = cancel => {
  return {
    type: DOCTOR_CANCELLATION,
    status: cancel,
  };
};

export const reasonForCancellation = (reasontocancel) => {
return{
  type: REASON_FOR_CANCEL,
  reason:reasontocancel
}
};

export const checkConfirmAppointment = (check)=>{
  return{
    type:CHECK_CONFIRM_APPOINTMENT,
    data:check
  }
}
