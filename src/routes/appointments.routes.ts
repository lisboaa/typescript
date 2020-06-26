import { Router } from 'express';
import {startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

const appointmentRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {

  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentRepository.findByDate(parsedDate);

  if(findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is a already booked' });
  }

  const appointment = appointmentRepository.create(provider, parsedDate);

  return response.json({ message: 'Oiiieee' })
});

export default appointmentsRouter;