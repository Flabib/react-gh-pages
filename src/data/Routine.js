import { nanoid } from "nanoid";

class Routine {
  constructor(content) {
    this.id = `routine-${nanoid(16)}`;
    this.content = content;
    this.isComplete = false;
  }
}

export default Routine;