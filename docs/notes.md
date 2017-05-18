# Notes

## Issues
1. How to handle components that expect specific slices of state before the AJAX call has a chance to return.
  1. Make sure the reducer is setting an appropriate null state, set a state in the component, or set a temporary null state in the selector.
