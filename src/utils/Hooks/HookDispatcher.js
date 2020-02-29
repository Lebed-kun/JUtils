const createHookDispather = () => {
  const _hooks = [];
  let _ptr = 0; // Pointer to current hook

  /**
   *
   * @param {number} ptr
   * @returns {any}
   */
  const getHook = (ptr = _ptr) => _hooks[ptr];

  /**
   * @param {any} value
   * @param {number} ptr
   */
  const setHook = (value, ptr = _ptr) => (_hooks[ptr] = value);

  /**
   * @returns {number}
   */
  const pointer = () => _ptr;
  const next = () => ++_ptr;
  const clear = () => (_ptr = 0);

  return {
    getHook,
    setHook,
    pointer,
    next,
    clear
  };
};

export default createHookDispather;
