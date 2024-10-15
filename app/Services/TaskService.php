<?php

namespace App\Services;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskService
{
    public function getTaskService()
    {
        return Task::select('id', 'title')->orderBy('id', 'DESC')->cursor();
    }

    public function createTaskService(array $data)
    {
        $validator = Validator::make($data, [
            'title' => 'required|string|max:80'
        ]);

        if ($validator->fails())
        {
            return[ 'error' => $validator->errors()->first() ];
           
        }

        return Task::create($data);

    }

    public function updateTaskService(array $data, $id)
    {
        $validator = Validator::make($data, [
            'title' => 'required|string|max:80'
        ]);

        if ($validator->fails())
        {
            return[ 'error' => $validator->errors()->first() ];
           
        }

        $task = Task::findOrFail($id);
       
        $task->update($data);

        return $task;
    }

    public function deleteTaskService($id)
    {
        $task = Task::findOrFail($id);
        
        $task->delete();
        return [
            'message' => 'Tarefa excluída com sucesso',
            'task' => $task 
        ];    
    }

}
