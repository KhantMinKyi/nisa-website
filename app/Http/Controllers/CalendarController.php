<?php

namespace App\Http\Controllers;

use App\Http\Requests\CalendarStoreRequest;
use App\Http\Requests\CalendarUpdateRequest;
use App\Models\Calendar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class CalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $calendars =  Calendar::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('backend/calendar/dashboard', [
            'calendars' => $calendars
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('components/backend/calendar/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CalendarStoreRequest $request)
    {
        $data = $request->validated();
        $data['created_user_id'] = Auth::user()->id;
        try {
            DB::beginTransaction();

            // create src 
            if (isset($data['src'])) {
                $filePath = "img/calendar_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/calendar_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/calendar_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            }
            // create Logo Black
            $calendar = Calendar::create($data);
            DB::commit();
            return redirect()->route('calendars.index')->with('success', 'Calendar created successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // delete file if exists
            $filePath = "img/calendar_data/";
            if (File::exists($filePath)) {
                File::deleteDirectory($filePath);
            }
            // Handle the error
            return redirect()->route('calendars.create')->with('error', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('components/backend/calendar/Edit', [
            'calendar' => Calendar::findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CalendarUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $data['updated_user_id'] = Auth::user()->id;
        $calendar = Calendar::findOrFail($id);
        try {
            DB::beginTransaction();
            if ($request->hasFile('src')) {
                if (File::exists(public_path($calendar->src))) {
                    File::delete(public_path($calendar->src));
                }
                $filePath = "img/calendar_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/calendar_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/calendar_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            } else {
                unset($data['src']);
            }
            $calendar->update($data);

            DB::commit();
            return redirect()->route('calendars.index')->with('success', 'Calendar Updated successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // Handle the error
            return redirect()->route('calendars.create')->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $calendar = Calendar::findOrFail($id);
        try {
            DB::transaction(function () use ($calendar) {
                // Delete main record
                $calendar->delete();
                // Delete Files
                if (File::exists(public_path($calendar->src))) {
                    File::delete(public_path($calendar->src));
                }
                return redirect()->route('calendars.index')->with('success', 'Calendar Deleted successfully.');
            });
        } catch (\Exception $e) {
            return redirect()->route('calendars.index')->with('error', $e->getMessage());
        }
    }
}
