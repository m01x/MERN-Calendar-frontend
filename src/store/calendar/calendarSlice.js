import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


//! Deprecated: Era la información de prueba... ahora hay backend😎
// const tempEvent = {
//   id: new Date().getTime(),
//   title: 'Cumpleaños del jefe',
//   notes:'Hay que comprar pastel',
//   start:new Date(),
//   end: addHours( new Date(), 1 ), //Suma una hora...
//   bgColor:'#fafafa',
//   user: {
//     id:'123',
//     name:'Flavio'
//   }
// }

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [
      //!tempEvent Antigua referencia a la informacion de prueba.
    ],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: ( state, { payload }) => {
      state.events.push( payload );
      state.activeEvent = null;
    },
    onUpdateEvent: ( state, { payload }) => {
      state.events = state.events.map( event => {
        if ( event.id == payload.id ) {
          return payload;
        }

        return event;
      })
    },
    onDeleteEvent: ( state )=>{
      if( state.activeEvent ) {
        state.events = state.events.filter( event => event.id !== state.activeEvent.id);
        state.activeEvent = null
      }
    },
    onLoadEvents: (state, {payload = []}) => {
      state.isLoadingEvents = false;
      //state.events = payload; Esto funciona, pero queremos ir mas alla ;D
      payload.forEach(event => {
        const exist = state.events.some( dbEvent => dbEvent.id === event.id );

        if(!exist){
          state.events.push( event );
        }

      });
    }
  }
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents } = calendarSlice.actions;