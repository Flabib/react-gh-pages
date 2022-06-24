const RoutineItem = ({ routine, onIsCompleteChange }) => {
  return routine.isComplete
    ? <button className="btn btn-active  btn-block btn-ghost mb-4 line-through" onClick={() => onIsCompleteChange(routine.id)}>{routine.content}</button>
    : <button className="btn glass btn-block btn-ghost mb-4" onClick={() => onIsCompleteChange(routine.id)}>{routine.content}</button>
};

export default RoutineItem;