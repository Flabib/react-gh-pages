import { nanoid } from "nanoid";
import moment from "moment";

class Routine {
  constructor(content) {
    this.id = `routine-${nanoid(16)}`;
    this.content = content;
    this.isComplete = false;
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }

  createdAtMoment = () => moment().format("DD-MM-YYYY hh:mm:ss");
}

export default Routine;