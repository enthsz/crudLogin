<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthService{
    public function registerService(array $data){
        $validator = Validator::make($data, [
            'name' => 'required|string',
            'email'=>'required|string|unique:users',
            'password'=>'required|string',
            'c_password' => 'required|same:password'
        ]);

        $validatedData = $validator->validated();

        $user = new User([
            'name'  => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        $user->save();
        return $user;
    }

    public function loginService(array $data){
        $validator = Validator::make($data, [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        return $validator->validated();


    }
}