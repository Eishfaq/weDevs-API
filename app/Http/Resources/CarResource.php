<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'car_code' => $this->car_code,
            'brand' => $this->brandInfo->name,
            'model' => $this->modelInfo->name,
            'category' => $this->category,
            'asking_price' => $this->asking_price,
        ];
    }
}
