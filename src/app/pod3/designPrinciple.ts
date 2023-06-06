// 2. 设计原则
// 2.1 什么是设计？
// .按哪一种思路或者标准来实现功能
// .功能相同，可以有不同设计的方式
// .需求如果不断变化，设计的作用才能体现出来

// 2.2 SOLID五大设计原则
// 首字母 |  指代 |   概念
// S     |   单一职责原则| 单一功能原则认为对象应该仅具有一种【单一功能】 的概念
// O     |   开放封闭原则| 开闭原则认为 【软件应该是对于扩展开放的，但是对于修改封闭的】的概念
// L     |   里氏替换原则| 里氏替换原则认为程序中的对象应该是可以在不改变程序正确性的前提下【被它的子类所替换】的概念
// I     |   接口隔离原则| 接口隔离原则认为【多个特定客户端接口要好于一个宽泛用途的接口】的概念
// D     |   依赖倒置原则| 依赖倒置原则认为一个方法应该遵从【依赖于抽象而不是一个实例】的概念，依赖注入是该原则的一种实现方式。

// 2.2.1 O 开放封闭原则
// .Open Closed Principle
// .对扩展开放，对修改关闭
// .增加需求时，扩展新代码，而非修改已有代码
// .开闭原则是设计模式中的总原则
// .对近期可能会变化并且如果有变化但改动量巨大的地方要增加扩展点，扩展点过多会降低可读性

//2.2.2 S 单一职责原则
// .Single responsibility principle
// .一个类或者模块只负责完成一个职责，如果功能特别复杂就进行拆分
// .单一职责可以降低类的复杂性，提高代码可读性、可维护性
// .当类代码行数过多(100,200)、方法过多(10)、功能太多、职责太杂的时候就要对类进行拆分了
// .拆分不能过度，如果拆分过度会损失内聚性和维护性
// .lodash
// .jquery

//2.2.3 L 里氏替换原则
// .Liskov Substitution Principle
// .所有引用基类的地方必须能透明地使用其子类的对象
// .子类能替换掉父类，使用者可能根本就不需要知道是父类还是子类，反之则不行
// .里氏替换原则是开闭原则的实现基础，程序设计的时候尽量使用基类定义及引用，运行时再决定使用哪个子类
// .里氏替换原则可以提高代码的复用性，提高代码的可扩展性，也增加了耦合性
// .相对于多态，这个原则是讲的是类如何设计，子类如果违反了父类的功能则表示违反了里氏替换原则

// 2.2.4 D 依赖倒置原则
// .Dependence Inversion Principle
// .面向接口编程，依赖于抽象而不依赖具体实现
// .要求我们在程序代码中传递参数时活在关联关系中，尽量引用层次高的抽象层类
// .使用方只关注接口而不关注具体类的实现

// 2.2.5 I 接口隔离原则
// .interface Segregation Principle
// .保持接口的单一独立，避免出现胖接口
// .客户端不应该依赖它不需要的接口，类间的依赖关系应该建立在最小的接口上
// .接口尽量细化 而且接口中的方法尽量的少
// .类似于单一职责原则，更关注接口

// 2.3 迪米特法则
//. Law of Demeter,LOD
//. 有时候也叫做最少知识原则
//. 一个软件实体应当尽可能少地与其它实体发生相互作用
//. 迪米特法则的初衷在于降低类之间的耦合
//. 类定义时尽量要实现内聚，少使用public 修饰符，尽量使用private、protected等

// 2.4 合成复用原则
// 2.4.1 类的关系
// 类之间有三种基本关系，分别是关联(聚合和组合)、泛化和依赖
// 如果一个类单向依赖另一个类，那么他们之间就是单向关联。如果彼此依赖，则为相互依赖，即双向关联
// 关联关系包括两种特例：聚合和组合
// . 聚合，用来表示整体与部分的关系或者拥有关系，代表部分的对象可能会被整体拥有，但并不一定会随着整体的消亡而销毁，比如班级和学生
// . 合成或者说组合要比聚合关系强的多，部分和整体的生命周期是一致的，比如人和器官之间
// 2.4.2 合成复用原则
// .合成复用原则是通过将已有的对象纳入新对象中，作为新对象的成员对象来实现的
// .新对象可以调用已有对象的功能，从而达到复用
// .原则是尽量首先使用组合/聚合的方式，而不是使用继承
// .专业人做专业事

// 2.5 总结
// . 开闭原则是核心，对修改关闭对扩展开放是软件设计的基石
// . 单一职责要求我们设计接口和模块功能的时候尽量保证单一性和原子性，修改一条不影响全局和其他模块
// . 里氏替换原则和依赖倒置原则要求面向接口和抽象编程，不要依赖具体实现，否则实现一改，上层调用者就要对应修改

// 2.6如何写出好代码？
// . 可维护性 BUG 是否好改？
// . 可读性 是否容易看懂？
// . 可扩展性 是否可以添加新功能?
// . 灵活性 添加新功能是否容易？ 老方法和接口是否容易复用？
// . 简洁性 代码是否简单清晰？
// . 可复用性 相同的代码不要写2遍？
// . 可测试性 是否方便些单元测试和集成测试？
