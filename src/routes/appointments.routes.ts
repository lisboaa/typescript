import { Router, Request, Response, request } from 'express';
import { uuid } from 'uuidv4';
import {startOfHour, parseISO, isEqual } from 'date-fns';


const appointmentsRouter = Router();


appointmentsRouter.post('/', (request: Request, response: Response) => {

  interface Appointment {
    id: string;
    provider: string;
    date: Date;
  }

  const appointments: Appointment[] = [];

  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointments.find(appointment => {
    isEqual(parsedDate, appointment.date),
  });

  if(findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is a already booked' });
  }
  const appointment = {
    id: uuid(),
    provider,
    date
  };

appointments.push(appointment);

  return response.json({ message: 'Oiiieee' })
});


export default appointmentsRouter;