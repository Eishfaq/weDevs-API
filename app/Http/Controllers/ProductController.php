<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $take = $request->take;
        $skip = $request->skip;
        $count = Product::count();
        $data = Product::take($take)->skip($skip)->orderBy('id','desc')->get();
        return response()->json([
            'status' => 'success',
            'data' => $data,
            'count' => $count
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:50',
            'description' => 'required|max:255',
            'price' => 'required',
            'image' => 'required',
        ]);
        $data['title'] = $request->title;
        $data['description'] = $request->description;
        $data['price'] = $request->price;
        if ($request->image != null) {
            $name = $this->imageUpload($request->image, 'product_', public_path('images/uploads/'));
            $data['image'] = $name;
        }
        Product::create($data);
        return response()->json([
            'status' => 'success',
            'message' => 'Product has been created successfully.'
        ]);
    }

    private function imageUpload($image, $namePrefix, $destination)
    {
        list($type, $file) = explode(';', $image);
        list(, $extension) = explode('/', $type);
        list(, $file) = explode(',', $file);
        $fileNameToStore = $namePrefix . rand(1, 100000000) . '.' . $extension;
        $source = fopen($image, 'r');
        $destination = fopen($destination . $fileNameToStore, 'w');
        stream_copy_to_stream($source, $destination);
        fclose($source);
        fclose($destination);

        return $fileNameToStore;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|max:50',
            'description' => 'required|max:255',
            'price' => 'required',
        ]);
        $data['title'] = $request->title;
        $data['description'] = $request->description;
        $data['price'] = $request->price;
        if ($request->image != null) {
            $name = $this->imageUpload($request->image, 'product_', public_path('images/uploads/'));
            $data['image'] = $name;
        }
        $product = Product::find($id);
        $product->update($data);
        return response()->json([
            'status' => 'success',
            'message' => 'Product has been updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Product::find($id);
        if($data->image) {
            if (file_exists(public_path('images/uploads/'.$data->image))) {
                unlink(public_path('images/uploads/'.$data->image));
            }
        }
        $data->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Product has been deleted successfully.'
        ]);
    }

    public function deleteImage($id)
    {
        $product = Product::find($id);
        if($product->image) {
            if (file_exists(public_path('images/uploads/'.$product->image))) {
                unlink(public_path('images/uploads/'.$product->image));
            }
        }
        $product->image = "";
        $product->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Product image deleted successfully.'
        ]);
    }
}
