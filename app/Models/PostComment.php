<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostComment extends Model
{
    protected $fillable = [
        'post_id',
        'name',
        'email',
        'description',
        'status',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
