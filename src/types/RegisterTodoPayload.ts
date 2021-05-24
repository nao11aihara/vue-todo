import { Todo } from "./Todo";

/**
 * RegisterTodoPayload型
 */
export type RegisterTodoPayload = Pick<Todo, "title">;
