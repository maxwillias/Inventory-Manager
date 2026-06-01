<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::query();

        if ($request->filled('search')) {

            $search = $request->search;

            $products->where(function ($query) use ($search) {

                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('sku', 'like', "%{$search}%");

            });
        }

        return $products
            ->latest()
            ->paginate(10)
            ->withQueryString();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'sku' => 'required|unique:products',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'description' => 'nullable'
        ]);

        return Product::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required',
            'sku' => 'required|unique:products,sku,' . $product->id,
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'description' => 'nullable'
        ]);

        $product->update($data);

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'Produto removido'
        ]);
    }
}
