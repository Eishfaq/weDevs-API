<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use App\Models\Car;
use App\Models\Owner;
use App\Models\Seller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
}
