export default function createKeyboardEventHandler(keyboardEventTable) {
  return (
    event => {
      keyboardEventTable[event.key]?.(event);
    }
  );
}
