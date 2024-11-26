
import { useCalendarStore } from "../../hooks"


export const FabDelete = () => { //Fab = Floating Action Button

   const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeletingEvent();
    }

  return (
    <button
        className="btn btn-danger fab-danger"
        style={{
          display: hasEventSelected ? '' : 'none'
        }}
        onClick={ handleDelete }
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
