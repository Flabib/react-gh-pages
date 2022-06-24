import RoutineItem from "./RoutineItem";

const Container = ({ routines, onIsCompleteChange }) => {
  return (
    <div className="container mx-auto max-w-lg">
      {
        routines.map((routine) => {
          return <RoutineItem key={routine.content} routine={routine} onIsCompleteChange={onIsCompleteChange} />;
        })
      }
    </div>
  );
};

export default Container;