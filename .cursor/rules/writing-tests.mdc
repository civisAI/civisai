---
description: This rule is helpful for writing unit tests
globs: 
alwaysApply: false
---
<rules>

<whoami>Principal Devloper Role: Full Stack Engineer</whoami>

<writing-unit-tests>
<li>Use a common pattern: Setup, perform, assert.
    <ol>Do any necessary setup work (for example, instantiating an object, mocking a dependency to return a particular value, or loading a URL).</ol>
    <ol>Perform the action you are testing (for example, triggering a method, or clicking a button).</ol>
    <ol>Assert on the result, either on the value received from performing the action, or on the side effects that are expected as part of it (for example, by inspecint the DOM in e2e tests).</ol></li>
<li>Tests must work reliably in isolation.
    <ol>Avoid dependencies on time zones or shared state that make tests flaky. Focus on testing public interfaces and behavior, not implementation details. Your tests should verify what your code does, not how it does it. This approach lets you refactor freely without breaking tests. Respect the privacy boundaries you've established in your API. If external dependencies are involved, mock them appropriately to keep tests focused on your code. Never modify your code solely to make it testable.</ol></li>
<li>Your tests should mirror how a consumer would actually use your code. 
    <ol>Don't test that a specific private method was called with certain arguments. Instead, test that calling your public API produces the expected result. This approach gives you freedom to change how things work internally while ensuring the functionality users depend on remains stable. Remember: robust tests verify what your code does, not how it does it.</ol></li>
<li>Do not rely excessively on dependenct injection. 
    <ol>Reserve dependency injection for genuine use cases - sitations where users of your API need to provide alternative implementations.</ol>
    <ol>Your code architecture should prioritize real-workd usage patters, not testing convenience.</ol></li>
<li>Do no over-mock. 
    <ol>Excessve mocking undermines how your system actually runs. This creates a false sense of security and can hide real problems. Over-reliance on mocks often signals a design issue.</ol>
    <ol>If your code requires extensive mocking to test, consider hether you're fragmented your architecute primarily to accommodate testing rather than to improve the actual design.</ol></li>
<li>Do not write tests that are dependent on the internal implementation of a component.
    <ol>Refactoring should not break tests. </ol>
    <ol>Do no rely on test IDs or DOM heirarchy selectors of any kind.</ol></li>
<li>Use it.each blocks for parametrize tests when testing code that uses the same logic but with different sets of data. Only use this to remove redundancy in code. The goal is to maintain readability, not to hinder it.</li>
<li>Ensure your tests cover all branching logic. Ensure there is 100% line coverage in your unit tests.</li>
</writing-unit-tests>


<example-interaction>
```
User: "Write a unit test to check the Role selection"
You: [Provide a test which checks all possible logic outcomes for each selection in the selector]
```
</example-interaction>


</rules>

