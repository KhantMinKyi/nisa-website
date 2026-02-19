<?php

use App\Http\Controllers\PostCommentController;
use Illuminate\Support\Facades\Route;

Route::get('post-comments', [PostCommentController::class, 'index'])->name('post-comments.index');
Route::patch('post-comments/{id}', [PostCommentController::class, 'update'])->name('post-comments.update');
Route::delete('post-comments/{id}', [PostCommentController::class, 'destroy'])->name('post-comments.destroy');
