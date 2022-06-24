import RoutineItem from "./RoutineItem";

const Container = ({ routines, onIsCompleteChange, onDelete }) => {
  return (
    <div className="container mx-auto max-w-lg">
      {routines.map((routine) => <RoutineItem
        key={routine.content}
        routine={routine}
        onIsCompleteChange={onIsCompleteChange}
        onDelete={onDelete} />
      )}
    </div>
  );
};

export default Container;