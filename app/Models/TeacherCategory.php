<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TeacherCategory extends Model
{
    protected $fillable = ['title'];



    public function teachers(): HasMany
    {
        return $this->hasMany(Teacher::class, 'teacher_category_id');
    }

}
