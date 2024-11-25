import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ));
    }

    //Esto lo enseñan como una alternativa sincrona a los thunks (acciones async de las clases anteriores)
    const startSavingEvent = async( calendarEvent ) => {
      //TODO: Llegar al backend...

      // Todo bien

      if ( calendarEvent._id ){
        //Actualizando
      } else {
        //Creando
        dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime() }) );
      }
    }

    return {
        //* Propiedades
        activeEvent,
        events,

        //*Metodos
        setActiveEvent,
        startSavingEvent,
    }
}
