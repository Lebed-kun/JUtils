/**
 * @typedef {import('./Route').Route} Route
 */

/**
 * @param  {...Route} routes
 *
 * @returns {(path : string, query : string) => any}
 */
const Router = (...routes) => (path, query) => {};
