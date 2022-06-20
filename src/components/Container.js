import Routine from "./Routine";

const Container = ({ routines }) => {
  return (
    <div className="container mx-auto">
      {
        routines.map((routine) => {
          return <Routine content={routine} />;
        })
      }
    </div>
  );
};

export default Container;