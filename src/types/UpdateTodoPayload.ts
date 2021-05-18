import { Todo } from "./Todo";

/**
 * UpdateTodoPayload型
 */
export type UpdateTodoPayload = Pick<Todo, "id" | "title">;
