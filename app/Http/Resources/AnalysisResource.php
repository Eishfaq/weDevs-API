<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnalysisResource extends JsonResource
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
            'brand' => $this->brands->name,
            'model' => $this->models->name,
            'brand_slug' => $this->brand,
            'model_slug' => $this->model,
            'count' => $this->count,
        ];
    }
}
