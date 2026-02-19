<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\GeneralPageRouteController;
use App\Http\Controllers\PostCommentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

Route::get('/', [GeneralPageRouteController::class, 'getHomePage'])->name('home');
Route::get('/post-detail/{id}', [GeneralPageRouteController::class, 'showPostDetail'])->name('post-detail');
require __DIR__ . '/route_groups/frontend/about_us.php';
require __DIR__ . '/route_groups/frontend/student_life.php';
require __DIR__ . '/route_groups/frontend/education.php';
require __DIR__ . '/route_groups/frontend/admission.php';
require __DIR__ . '/route_groups/frontend/events_and_news.php';
require __DIR__ . '/route_groups/frontend/contact_us.php';
require __DIR__ . '/route_groups/frontend/privacy_policy.php';

Route::post('/api/contact', [ContactController::class, 'store'])->name('contacts.store');
Route::post('/api/post-comment/store', [PostCommentController::class, 'store'])->name('post-comments.store');




Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('dashboard', [GeneralPageRouteController::class, 'getAdminDashboard'])->name('dashboard');
    require __DIR__ . '/route_groups/backend/teachers.php';
    require __DIR__ . '/route_groups/backend/gallery.php';
    require __DIR__ . '/route_groups/backend/facility.php';
    require __DIR__ . '/route_groups/backend/users.php';
    require __DIR__ . '/route_groups/backend/events_and_news.php';
    require __DIR__ . '/route_groups/backend/calendar.php';
    require __DIR__ . '/route_groups/backend/post_comments.php';
    require __DIR__ . '/route_groups/backend/contacts.php';
});




Route::get('/administration-panel/login', [AuthenticatedSessionController::class, 'create'])
    ->middleware(['guest:' . config('fortify.guard')])
    ->name('login'); 

// 2. The Action (POST) - Must match the URL above
Route::post('/administration-panel/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware(['guest:' . config('fortify.guard')])
    ->name('login.store');

// 3. Logout (POST)
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');
require __DIR__ . '/settings.php';
