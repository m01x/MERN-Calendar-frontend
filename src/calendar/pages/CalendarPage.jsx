import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { NavBar } from "../"
import { addHours } from 'date-fns';
import { localizer, getMessagesES } from '../../helpers';




const events = [{
  title: 'Cumpleaños del jefe',
  notes:'Hay que comprar pastel',
  start:new Date(),
  end: addHours( new Date(), 1 ), //Suma una hora...
  bgColor:'#fafafa',
  user: {
    _id:'123',
    name:'Flavio'
  }
}]


export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {
   console.log(event, start, end, isSelected) ;

   const style = {
    backgroundColor: '#347CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white'
   }

   return {style};
  }

  return (
    <>
      <NavBar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter } //Esto para empezar a registrar eventos. similar a un onClick
        
    />
    </>
  )
}
