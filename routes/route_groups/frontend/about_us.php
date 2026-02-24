<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/our-history', [GeneralPageRouteController::class, 'getHistoryPage'])->name('our-history');
Route::get('/our-mission-and-vision', [GeneralPageRouteController::class, 'getMissionVisionPage'])->name('our-mission-vision');
Route::get('/our-philosophy', [GeneralPageRouteController::class, 'getPhilosophyPage'])->name('our-philosophy');
Route::get('/our-values', [GeneralPageRouteController::class, 'getValuesPage'])->name('our-values');
Route::get('/teachers', [GeneralPageRouteController::class, 'getTeachersPage'])->name('teachers');
Route::get('/sister-schools', [GeneralPageRouteController::class, 'getSisterSchoolsPage'])->name('sister-schools');
Route::get('/admin-team', [GeneralPageRouteController::class, 'getAdminTeamPage'])->name('admin-team');
Route::get('/school-profile', [GeneralPageRouteController::class, 'getSchoolProfilePage'])->name('school-profile');
