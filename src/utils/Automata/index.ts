import { Predicate, Transition, Effect, TransitionList } from "./types";

export class Automata {
  private transitions: TransitionList;
  private initState: string;
  private endCallback?: () => void;

  private currState: string;

  /**
   * Creates generic finite automata with effects (like Milley automata)
   *
   * @param transitions List of automata nodes with transitions.
   * If node doesn't have any transition,
   * just don't include it in a list
   * @param initState Initial state
   * @param endCallback Function called at the end of input stream
   */
  constructor(
    transitions: TransitionList,
    initState: string,
    endCallback?: () => void
  ) {
    this.transitions = transitions;
    this.initState = initState;
    this.endCallback = endCallback;

    this.currState = this.initState;
  }

  /**
   * Proceeds string through automata
   *
   * @param str
   */
  public runString(str: string): void {
    const forEach = Array.prototype.forEach;
    forEach.call(str, char => this.next(char));

    this.currState = this.initState;

    if (typeof this.endCallback !== "undefined") {
      this.endCallback();
    }
  }

  /**
   * Validates character for predicate
   *
   * @param char Current character
   * @param predicate Character, regexp to be matched or
   * validation function
   */
  private matchesPredicate(char: string, predicate: Predicate): boolean {
    return (
      (typeof predicate === "string" && char === predicate) ||
      (predicate instanceof RegExp && !!char.match(predicate)) ||
      (typeof predicate === "function" && predicate(char))
    );
  }

  /**
   * Changes state (and applies effects after it)
   * if current character matches predicate.
   * Invokes effect if it's provided as transition
   *
   * @param char Current character
   * @param transition Rule for changing state and effects after
   */
  private transact(char: string, transition: Transition | Effect): boolean {
    if (typeof transition === "function") {
      transition(char);
    } else if (this.matchesPredicate(char, transition.predicate)) {
      this.currState = transition.to;

      const callback = transition.callback;

      if (typeof callback !== "undefined") {
        callback(char);
      }

      return true;
    }

    return false;
  }

  /**
   * Transits to next state if character proceeds some transition
   *
   * @param char
   */
  private next(char: string): void {
    const transitions = this.transitions[this.currState];
    if (typeof transitions !== "undefined") {
      for (let i = 0; i < transitions.length; i++) {
        const matched = this.transact(char, transitions[i]);
        if (matched) break;
      }
    }
  }
}
