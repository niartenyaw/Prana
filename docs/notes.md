# Notes

## Issues
1. How to handle components that expect specific slices of state before the AJAX call has a chance to return.
  1. Make sure the reducer is setting an appropriate null state, set a state in the component, or set a temporary null state in the selector.
2. Error handling across multiple slices.
  2. Have a nested slice errors for each top level slice to differentiate between them.
3. Preserving state
  3. Make sure to pass the correct structure when calling action creators (was passing an object errors instead of array).
