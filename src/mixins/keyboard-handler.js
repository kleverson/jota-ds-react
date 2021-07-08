/**
 * @param {{
 *  [key: string]: (event: React.KeyboardEvent<Element>) => void
 * }} keyboardEventTable
 */
export default function createKeyboardEventHandler(keyboardEventTable) {
  return /** @type {React.KeyboardEventHandler} */ (
    event => {
      keyboardEventTable[event.key]?.(event);
    }
  );
}
