const RoutineItem = ({ routine, onIsCompleteChange, onDelete }) => {
  return (
    <div className="card bg-neutral text-neutral-content mb-4">
      <div className="card-body items-center text-center">
        <h2 className={"card-title" + (routine.isComplete && " line-through")}>{routine.content}</h2>
        <p>{routine.createdAtMoment()}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary" onClick={() => onIsCompleteChange(routine.id)}>
            {routine.isComplete ? "Uncomplete" : "Complete"}
          </button>
          <button className="btn btn-sm btn-error" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RoutineItem;