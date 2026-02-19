<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('contacts', [ContactController::class, 'index'])->name('contacts.index');
Route::delete('contacts/{id}', [ContactController::class, 'destroy'])->name('contacts.destroy');
