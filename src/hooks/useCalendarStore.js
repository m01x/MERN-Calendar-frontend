import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import calendarApi from "../api/calendarApi";
import { convertEventToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent( calendarEvent ) );
    }

    //Esto lo enseñan como una alternativa sincrona a los thunks (acciones async de las clases anteriores)
    const startSavingEvent = async( calendarEvent ) => {
      // Todo bien
      try {
        if ( calendarEvent.id ){
          //Actualizando
          await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent);
          dispatch( onUpdateEvent( {...calendarEvent, user } ) );
          return
        }
      } catch (error) {
        Swal.fire('Error al guardar evento',error.response.data.msg, 'error');
      }

      
        const { data } = await calendarApi.post('/events', calendarEvent);
        dispatch( onAddNewEvent({...calendarEvent, id: data.evento.id, user }) );
      
    }

    const startDeletingEvent = async( ) => {
      //Todo Llegar al backend
      try {
        
        await calendarApi.delete(`/events/${ activeEvent.id }`) //! HACER EL EJERCICIO... ELIMINAR UN EVENTO.
        dispatch( onDeleteEvent() );
      } catch (error) {
        Swal.fire('Error al eliminar',error.response.data.msg, 'error')
        console.log('Error startDelete',error);
      }

    }

    const startLoadingEvents = async() => {
      
      try {
        
        const {data} = await calendarApi.get('/events');
        const events = convertEventToDateEvents( data.eventos );
        dispatch(onLoadEvents( events ));//Eventos procesados con la fecha

      } catch (error) {
        console.log("startLoadingEvents Error - useCalendar",error.response.data.msg, 'error');
      }
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
        startLoadingEvents
    }
}
