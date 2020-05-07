export type Predicate = string | RegExp | ((char: string) => boolean);
export type Effect = (char: string) => void;
export interface Transition {
  to: string;
  predicate: Predicate;
  callback?: Effect;
}
export type TransitionList = {
  [name: string]: (Transition | Effect)[];
};
