import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) );
    }

    //Esto lo enseñan como una alternativa sincrona a los thunks (acciones async de las clases anteriores)
    const startSavingEvent = async( calendarEvent ) => {
      //TODO: Llegar al backend...

      // Todo bien

      if ( calendarEvent._id ){
        //Actualizando
        dispatch( onUpdateEvent( {...calendarEvent } ) );
      } else {
        //Creando
        dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime() }) );
      }
    }

    const startDeletingEvent = () => {
      //Todo Llegar al backend
      dispatch( onDeleteEvent() );
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //*Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
