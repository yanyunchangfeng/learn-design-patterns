// 2. 设计原则
// 2.1 什么是设计？
// 按哪一种思路或者标准来实现功能
// 功能相同，可以有不同设计的方式
// 需求如果不断变化，设计的作用才能体现出来

// 2.2 SOLID五大设计原则
// 首字母 |  指代 |   概念
// S     |   单一职责原则| 单一功能原则认为对象应该仅具有一种 单一功能的概念
// O     |   开放封闭原则| 开闭原则认为 软件应该是对于扩展开放的，但是对于修改封闭的概念
// L     |   里氏替换原则| 里氏替换原则认为程序中的对象应该是可以在不改变程序正确性的前提下 被它的子类所替换 的概念
// I     |   接口隔离原则| 接口隔离原则认为 多个指定客户端接口要好于一个宽泛用途的接口 的概念
// D     |   依赖反转原则| 依赖反转原则认为一个方法应该遵从 依赖于抽象而不是一个实例的概念，依赖注入是该原则的一种实现方式。

// 2.2.1 O 开放封闭原则
// Open Closed Principle
// 对扩展开放，对修改关闭
// 增加需求时，扩展新代码，而非修改已有代码
// 开闭原则是设计模式中的总原则
// 对近期可能会变化并且如果有变化但改动量巨大的地方要增加扩展点，扩展点过多会降低可读性
