# Facade design pattern

- [General info](#general-info)
- [Resources](#resources)

## General info

The **facade pattern** (also spelled _façade_) is a software design pattern commonly used in _object-oriented programming_. Analogous to a façade in architecture, it is an object that serves as a front-facing interface masking more complex underlying or structural code. A **facade** can:

* improve the readability and usability of a _software library_ by masking interaction with more complex components behind a single (and often simplified) _application programming interface_ (API)
* provide a context-specific interface to more generic functionality (complete with context-specific input validation)
* serve as a launching point for a broader _refactor of monolithic_ or _tightly-coupled systems_ in favor of more _loosely-coupled code_

Developers often use the **facade design pattern** when a system is very complex or difficult to understand because the system has many interdependent classes or because its source code is unavailable. **This pattern** hides the complexities of the larger system and provides a simpler interface to the _client_. It typically involves a single _wrapper class_ that contains a set of members required by the _client_. These members access the system on behalf of the **facade** _client_ and hide the implementation details.

## Resources

* [Wikipedia: Facade pattern](https://en.wikipedia.org/wiki/Facade_pattern)
