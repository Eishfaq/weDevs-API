<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//AUTH
Route::post('login','AuthController@login');
Route::group(['middleware' => 'auth:api'],function (){
    //Products
    Route::post('products/list','ProductController@index');
    Route::post('products/store','ProductController@store');
    Route::get('products/delete/{id}','ProductController@destroy');
    Route::post('products/update/{id}','ProductController@update');
    Route::get('products/image/delete/{id}','ProductController@deleteImage');
    //Auth
    Route::get('logout','AuthController@logout');
});
//DEMO
Route::post('demo',function (){
    return response()->json([
        'status' => 'success'
    ]);
});

Route::get('test',function (){
    return response()->json([
        'status' => 'success'
    ]);
});
