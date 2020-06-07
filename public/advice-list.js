export default
[
  {
    "topic": "Domain Driven Design",
    "advices": [
      "Protect business invariants inside aggregate boundaries.",
      "Collaborate with the business experts.",
      "The bounded context is the region where an official language is spoken.",
      "To achieve a good design, we need to collaborate with the domain experts.",
      "It’s important to identify bounded contexts before grouping the models.",
      "You must maintain an ubiquitous language.",
      "Ubiquitous Language is the term of building up a common language between developers and users.",
      "A DDD aggregate is a cluster of domain objects that can be treated as a single unit.",
      "An aggregate will have one of its component objects be the aggregate root.",
      "The aggregate root must ensure the integrity of the aggregate as a whole.",
      "Use domain events to explicitly implement side effects across multiple aggregates.",
      "Anti Corruption Layer is used when the downstream model don’t want to be affected by an upstream model.",
      "Aggregate rule of thumb: Protect business invariants inside aggregate boundaries.",
      "Aggregate rule of thumb: Design small aggregates.",
      "Aggregate rule of thumb: Reference other aggregates by identity only.",
      "Aggregate rule of thumb: Update other aggregates using eventual consistency.",
      "Avoid the anemic domain model.",
      "An anemic domain model is a void of behavior."
    ]
  },
  {
    "topic": "Production ready applications",
    "advices": [
      "Automate your software testing.",
      "Configure a CI/CD pipeline.",
      "Logging is a fundamental part of the applications.",
      "A well-designed logging system is a great utility for system administrators and developers.",
      "Logs save many valuable hours for both the support team or developers.",
      "Continuous Integration establishes an automated way to build, package, and test applications.",
      "You should configure a good application monitoring.",
      "Application Performance Monitoring (APM).",
      "Blue/Green deployments could be used to minimize the impact of deployments into production.",
      "Canary deployments could be used to minimize the impact of deployments into production.",
      "Feature Flagging could be used to minimize the impact of deployments into production.",
      "Dark Launches could be used to minimize the impact of deployments into production.",
    ]
  },
  {
    "topic": "CQRS",
    "advices": [
      "CQRS is an architectural pattern that separates the models for reading and writing data.",
      "Queries return a result and do not change the state of the system.",
      "Queries are free of side effects.",
      "Commands can change the state of the system.",
      "Since commands are imperatives, they are typically named with a verb in the imperative mood.",
      "Commands are immutable. They do not need to change during their projected lifetime.",
      "You should implement a specific command handler class for each command.",
      "Typically, a command handler deals with a single aggregate driven by its aggregate root.",
      "When command handlers get complex, with too much logic, that can be a code smell.",
    ]
  },
  {
    "topic": "Distributed Systems Observability",
    "advices": [
      "The goal of observability it's to build a culture of engineering based on facts and feedback.",
      "Logs, metrics, and traces are often known as the three pillars of observability.",
      "Testing is a best-effort verification of the correctness of a system.",
      "Testing is a best-effort simulation of failure modes.",
      "Coding for failure entails acknowledging that systems will fail.",
      "Failure needs to be embraced at every phase, from system design to implementation, testing, deployment, and, finally, operation.",
    ]
  },
  {
    "topic": "Designing Data Intensive Applications",
    "advices": [
      "Reliability: Continuing to work correctly, even when things go wrong.",
      "Systems that anticipate faults and cope with them are called fault-tolerant or resilient.",
      "Allow quick an easy recovery from human errors, to minimize the impact in the case of a failure.",
      "Monitoring can show us ealy warning signals.",
      "When a problem occurs, metrics can be invaluable in diagnosing the issue.",
      "Scalability is the term used to describe a system's ability to cope with incrased load.",
      "Reliability means making sytems work correctly, even when faults occur.",
      "Scalability means having strategies for keeping performance good, even when load incrases.",
      "Anything that is meaningful to humans may need to change in the future.",
    ]
  },
  {
    "topic": "Algorithms and Data Structures",
    "advices": [
      "Big O notation allows us to analyze and improve the efficiency of our algorithms.",
    ]
  },
  {
    "topic": "Personal Growth and Leadership",
    "advices": [
      "If you don’t like reading, you’re reading the wrong books.",
      "You’ve got 90 days to change culture before it starts changing you.",
      "The bad thing about winning is that it doesn't teach you as much as losing.",
    ]
  },
  {
    "topic": "Chaos Engineering",
    "advices": [
      "Failure is inevitable, disaster not."
    ]
  },
  {
    "topic": "Dale Carnagie",
    "advices": [
      "Don't criticize, condemn or complain.",
      "Smile.",
      "Be a good listener. Encourage others to talk about themselves.",
      "The only way to get the best of an argument is to avoid it.",
      "Show respect for the other person's opinion. Never say, \"you're wrong\".",
      "If you are wrong, admit it quickly and emphatically.",
      "Try to see things from the other person's point of view.",
      "Be sympathetic with the other person's ideas and desires.",
      "Ask questions instead of giving direct orders.",
      "Give the other person a fine reputation to live up to.",
    ]
  },
  {
    "topic": "Reviewing Code",
    "advices": [
      "Pull request needs to do just one thing.",
      "Automate as many checks as possible.",
    ]
  }
]
