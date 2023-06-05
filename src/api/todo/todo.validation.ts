import { z } from 'zod';
export enum TodoStatus {
  PENDING = 'pending',
  DONE = 'done',
}
export const todoSchema = z.object({
  id: z.string(),
  text: z.string({
    required_error: 'Text is required',
    invalid_type_error: 'to do text should be a string',
  }),
  status: z.enum([TodoStatus.PENDING, TodoStatus.DONE], {
    errorMap() {
      return {
        message: 'to do status must either pending | done',
      };
    },
  }),
});

export type ToDO = z.infer<typeof todoSchema> & {
  id: string;
};
