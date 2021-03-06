import { ChangeIsDonePayload } from "@/types/ChangeIsDonePayload";
import { DaleteTodoPayload } from "@/types/DaleteTodoPayload";
import { RegisterTodoPayload } from "@/types/RegisterTodoPayload";
import { UpdateTodoPayload } from "@/types/UpdateTodoPayload";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Todo } from "./../types/Todo";
import createPersistedState from "vuex-persistedstate";

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
  getTodoById: (state: State) => (id: number | undefined): Todo | undefined => {
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

  /**
   * TODOを更新する
   * @param state
   * @param payload
   */
  updateTodo(state: State, payload: UpdateTodoPayload): void {
    const index = state.todos.findIndex((todo) => todo.id === payload.id);

    // 配列のindex番目の要素のタイトルを更新
    if (index >= 0) {
      state.todos[index].title = payload.title;
    }
  },

  /**
   * TODOを削除する
   * @param state
   * @param payload
   */
  daleteTodo(state: State, payload: DaleteTodoPayload): void {
    const index = state.todos.findIndex((todo) => todo.id === payload.id);

    // 配列のindex番目から要素を1つ削除
    if (index >= 0) {
      state.todos.splice(index, 1);
    }
  },

  /**
   * TODOの作業ステータスを変更する
   * @param state
   * @param payload
   */
  changeIsDone(state: State, payload: ChangeIsDonePayload): void {
    const index = state.todos.findIndex((todo) => todo.id === payload.id);

    // 配列のindex番目の要素の作業ステータスを反転
    if (index >= 0) {
      state.todos[index].isDone = !state.todos[index].isDone;
    }
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

  /**
   * TODOを更新する
   * @param commit
   * @param payload
   */
  updateTodo({ commit }: any, payload: UpdateTodoPayload): void {
    commit("updateTodo", payload);
  },

  /**
   * TODOを削除する
   * @param commit
   * @param payload
   */
  daleteTodo({ commit }: any, payload: DaleteTodoPayload): void {
    commit("daleteTodo", payload);
  },

  /**
   * TODOの作業ステータスを変更する
   * @param commit
   * @param payload
   */
  changeIsDone({ commit }: any, payload: ChangeIsDonePayload): void {
    commit("changeIsDone", payload);
  },
};

export const store: Store<State> = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
});
