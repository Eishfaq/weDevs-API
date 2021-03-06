<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validate = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required'
        ]);
        if($validate->fails()){
            return response()->json($validate->errors(),422);
        }
        $credentials = request(['email', 'password']);
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }

    public function logout()
    {
        auth()->guard()->logout();
        return response()->json(['status' => 'success','message'=> 'Logged out successfully.']);
    }

    public function user()
    {
        $user = auth()->user()->only('id','email','name');
        return response()->json([
            'data' => $user
        ]);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer'
        ]);
    }
}
