import { create } from "zustand";

const initialValues = {
  category: null,
  specialty: null,
  client: null,
  employee: null,
  date: null,
  time: null,
};

const scheduleStore = create((set) => ({
  appointment: initialValues,
  handleChangeValue: (key, value) =>
    set((prevState) => ({
      appointment: { ...prevState.appointment, [key]: value },
    })),
  clearAppointment: () => set({ appointment: initialValues }),
}));

export function useScheduleStore() {
  const appointment = scheduleStore((state) => state.appointment);
  const handleChangeValue = scheduleStore((state) => state.handleChangeValue);
  const clearAppointment = scheduleStore((state) => state.clearAppointment);

  return { appointment, handleChangeValue, clearAppointment };
}
