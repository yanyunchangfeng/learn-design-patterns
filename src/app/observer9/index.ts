/**
 * 观察者模式
 *
 */
// 9.观察者模式
// 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新
// 9.1 类图
// 主题对象(Subject)该角色又称为被观察者，可以增加和删除观察者对象，它将有关状态存入具体观察者对象，在具体主题的内部状态改变时，给所有登记过（关联了观察关系）的观察者发出通知
// 观察者(Observer)角色：定义一个接受通知的接口(update)，在得到主题的通知时更新自己

// 9.4 发布订阅模式
// .订阅者把自己想订阅的事件注册到调度中心
// .当该事件触发时候,发布者发布该事件到调度中心，由调度中心统一调度订阅者注册到调度中心的处理代码
// .虽然两种模式都存在订阅者和发布者（观察者可认为是订阅者，被观察者可认为是发布者）
// .但是观察者模式是由被观察者调度的，而发布/订阅模式是统一由调度中心调的
// .所以观察者模式的订阅者与发布者之间是存在依赖的，而发布/订阅模式则不会

abstract class Student {
  constructor(public teacher: Teacher) {}
  // 每个观察这都有一个update方法，用来在被观察 对象更新的时候进行自我更新
  public abstract update(): void;
}

class Xueba extends Student {
  public update(): void {
    if (this.teacher.getState() === "提问") {
      console.log("举手回答");
    }
  }
}
class Xuezha extends Student {
  public update(): void {
    if (this.teacher.getState() === "提问") {
      console.log("低头看脚");
    }
  }
}
class Teacher {
  private students: Student[] = [];
  private state: string = "讲课";
  public askQuestion() {
    this.state = "提问";
    this.notifyAllStudents();
  }
  getState() {
    return this.state;
  }
  attach(student: Student) {
    this.students.push(student);
  }
  notifyAllStudents() {
    this.students.forEach((student: Student) => student.update());
  }
}
let teacher = new Teacher();
const xueba = new Xueba(teacher);
const xuezha = new Xuezha(teacher);
teacher.attach(xueba);
teacher.attach(xuezha);
teacher.askQuestion();
// 观察者模式和发布订阅的区别：在观察者模式里面 学生和老师相互了解 相互知道 相互耦合在一起的 老师知道他有那几个学生 学生知道他的老师是谁
