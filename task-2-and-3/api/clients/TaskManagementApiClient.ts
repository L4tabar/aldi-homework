import type { APIResponse } from '@playwright/test';
import { BaseApiClient } from './BaseApiClient';

type Task = {
  title?: string;
  description?: string;
  completed?: boolean;
};

export class TaskManagementApiClient extends BaseApiClient {
  public async createTask(title: string, description: string): Promise<APIResponse> {
    return this.request.post('/tasks', { data: { title: title, description: description } });
  }

  public async getTaskById(id: number): Promise<APIResponse> {
    return this.request.get(`/tasks/${id}`);
  }

  public async updateTaskById(id: number, task: Task): Promise<APIResponse> {
    return this.request.put(`/tasks/${id}`, { data: task });
  }

  public async deleteTaskById(id: number): Promise<APIResponse> {
    return this.request.delete(`/tasks/${id}`);
  }
}
