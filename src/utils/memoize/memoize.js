export const memoize = (func, cacheSize) => {
  const cache = { results: {}, count: 0 };
  const cleanCache = (newArg, newValue) => {
    if (!cache.results[newArg]) {
      cache.count++;
    }

    cache.results[newArg] = newValue;

    if (cache.count > cacheSize) {
      const earlyKey = Object.keys(cache.results)[0];
      delete cache.results[earlyKey];
      cache.count--;
    }
  };

  return arg => {
    if (cache.results[arg] === undefined) {
      cleanCache(arg, func(arg));
    }

    return cache.results[arg];
  };
};
