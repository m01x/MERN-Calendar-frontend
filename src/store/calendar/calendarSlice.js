import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños del jefe',
  notes:'Hay que comprar pastel',
  start:new Date(),
  end: addHours( new Date(), 1 ), //Suma una hora...
  bgColor:'#fafafa',
  user: {
    _id:'123',
    name:'Flavio'
  }
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [
      tempEvent
    ],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;