# Observer design pattern

- [General info](#general-info)
- [Resources](#resources)

## General info

In software design and engineering, the **observer pattern** is a software design pattern in which an object, named **the subject** (**Observable**), maintains a list of its dependents, called **observers**, and notifies them automatically of any state changes, usually by calling one of their methods.

It is often used for implementing distributed event-handling systems in event-driven software. In such systems, the subject is usually named a *"stream of events"* or *"stream source of events"* while the observers are called *"sinks of events."* The stream nomenclature alludes to a physical setup in which the observers are physically separated and have no control over the emitted events from the subject/stream source. This pattern thus suits any process by which data arrives from some input that is not available to the CPU at startup, but instead arrives seemingly at random (HTTP requests, GPIO data, user input from peripherals and distributed databases, etc.).

## Resources

* [Wikipedia: Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern)
* [sbcode.net: Observer Design Pattern](https://sbcode.net/typescript/observer/)
* [Christopher Okhravi: Observer Pattern – Design Patterns (ep 2)](https://www.youtube.com/watch?v=_BpmfnqjgzQ)
* [Observer Pattern Screencast – OO Design Patterns Screencasts (ep 3)](https://www.youtube.com/watch?v=xU3oPZUf4Uw)