import { RegisterTodoPayload } from "@/types/RegisterTodoPayload";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Todo } from "./../types/Todo";

Vue.use(Vuex);

/**
 * ステート型
 */
type State = {
  todos: Todo[];
  sequence: number;
};

/**
 * ステート
 */
const state: State = {
  todos: [],
  sequence: 1,
};

/**
 * ゲッター
 * ステートを加工した値を取得する
 */
const getters = {
  /**
   * TODO全件取得
   * @param state
   * @returns TODO全件
   */
  getAllTodos(state: State): Todo[] {
    return state.todos;
  },
  /**
   * 指定IDのTODO1件を取得
   * @param state
   * @param id
   * @returns 指定IDのTODO1件
   */
  getTodoById(state: State, id: number): Todo | undefined {
    return state.todos.find((todo) => todo.id === id);
  },
};

/**
 * ミューテーション
 * ステートを更新する
 * ※基本的にコンポーネントから呼ばない、ミューテーションはアクションからのみ呼び出すようにする
 */
const mutations = {
  /**
   * TODOを登録する
   * @param state
   * @param todo
   */
  registerTodo(state: State, todo: Todo): void {
    state.todos.push(todo);
    state.sequence++;
  },
};

/**
 * アクション
 * コンポーネントから直接呼び出され、外部APIとの非同期通信等を行う
 */
const actions = {
  /**
   * TODOを登録する
   * @param commit
   * @param state
   * @param payload
   */
  registerTodo({ commit, state }: any, payload: RegisterTodoPayload): void {
    const todo: Todo = {
      id: state.sequence,
      title: payload.title,
      isDone: false,
    };
    commit("registerTodo", todo);
  },
};

export const store: Store<State> = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
