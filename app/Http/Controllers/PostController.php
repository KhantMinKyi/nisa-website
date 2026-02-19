<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use App\Http\Requests\PostUpdateRequest;
use App\Models\CategoryTag;
use App\Models\Post;
use App\Models\PostCategoryTag;
use App\Models\PostType;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with(['type', 'category_tags.category_tag'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('backend/events_and_news/dashboard', [
            'posts' => $posts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $post_types = PostType::orderBy('title')->get();
        $category_tags = CategoryTag::orderBy('title')->get();

        return Inertia::render('components/backend/posts/Create', [
            'post_types' => $post_types,
            'category_tags' => $category_tags,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostStoreRequest $request)
    {
        $data = $request->validated();
        $data['created_user_id'] = Auth::user()->id;

        $categoryTagIds = $data['category_tag_ids'] ?? [];
        unset($data['category_tag_ids']);

        $createdFiles = [];
        try {
            DB::beginTransaction();

            // Banner Image
            if (isset($data['banner_img'])) {
                $filePath = "img/post_data/";
                if (!File::exists($filePath)) {
                    File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['banner_img'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/post_banner_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/post_banner_" . $imageUid . "." . $extension);
                $data['banner_img'] = "/" . $photoName;
                $createdFiles[] = public_path($data['banner_img']);
            }

            // Additional Images (comma-separated)
            if (!empty($data['images']) && is_array($data['images'])) {
                $filePath = "img/post_data/";
                if (!File::exists($filePath)) {
                    File::makeDirectory($filePath, 0755, true);
                }

                $imagePaths = [];
                foreach ($data['images'] as $image) {
                    $extension = $image->getClientOriginalExtension();
                    $imageUid = uniqid('', true);
                    $photoName = $filePath . "/post_image_" . $imageUid . "." . $extension;

                    $image->move($filePath, "/post_image_" . $imageUid . "." . $extension);
                    $imagePaths[] = "/" . $photoName;
                    $createdFiles[] = public_path(end($imagePaths));
                }
                $data['images'] = implode(',', $imagePaths);
            } else {
                unset($data['images']);
            }

            $post = Post::create($data);

            foreach ($categoryTagIds as $categoryTagId) {
                PostCategoryTag::create([
                    'post_id' => $post->id,
                    'category_tag_id' => $categoryTagId,
                ]);
            }

            DB::commit();
            return redirect()->route('events-and-news.index')->with('success', 'Post created successfully.');
        } catch (\Exception $e) {
            DB::rollBack();
            foreach ($createdFiles as $filePath) {
                if (File::exists($filePath)) {
                    File::delete($filePath);
                }
            }
            return redirect()->route('events-and-news.create')->with('error', $e->getMessage());
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
     * Update the specified resource in storage.
     */
    public function edit(string $id)
    {
        $post = Post::with(['category_tags'])->findOrFail($id);
        $post_types = PostType::orderBy('title')->get();
        $category_tags = CategoryTag::orderBy('title')->get();

        $selectedCategoryTagIds = $post->category_tags->pluck('category_tag_id')->values();
        $images = $post->images ? array_values(array_filter(explode(',', $post->images))) : [];

        return Inertia::render('components/backend/posts/Edit', [
            'post' => $post,
            'post_types' => $post_types,
            'category_tags' => $category_tags,
            'selected_category_tag_ids' => $selectedCategoryTagIds,
            'images' => $images,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PostUpdateRequest $request, string $id)
    {
        $post = Post::findOrFail($id);
        $data = $request->validated();
        $data['updated_user_id'] = Auth::user()->id;

        $categoryTagIds = $data['category_tag_ids'] ?? [];
        unset($data['category_tag_ids']);

        try {
            DB::beginTransaction();

            // Banner Image replacement
            if ($request->hasFile('banner_img')) {
                if ($post->banner_img && File::exists(public_path($post->banner_img))) {
                    File::delete(public_path($post->banner_img));
                }

                $filePath = "img/post_data/";
                if (!File::exists($filePath)) {
                    File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['banner_img'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/post_banner_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/post_banner_" . $imageUid . "." . $extension);
                $data['banner_img'] = "/" . $photoName;
            } else {
                unset($data['banner_img']);
            }

            // Additional Images replacement
            if ($request->hasFile('images')) {
                if ($post->images) {
                    $oldImages = array_filter(explode(',', $post->images));
                    foreach ($oldImages as $oldImage) {
                        if (File::exists(public_path($oldImage))) {
                            File::delete(public_path($oldImage));
                        }
                    }
                }

                $filePath = "img/post_data/";
                if (!File::exists($filePath)) {
                    File::makeDirectory($filePath, 0755, true);
                }

                $imagePaths = [];
                foreach ($data['images'] as $image) {
                    $extension = $image->getClientOriginalExtension();
                    $imageUid = uniqid('', true);
                    $photoName = $filePath . "/post_image_" . $imageUid . "." . $extension;

                    $image->move($filePath, "/post_image_" . $imageUid . "." . $extension);
                    $imagePaths[] = "/" . $photoName;
                }
                $data['images'] = implode(',', $imagePaths);
            } else {
                unset($data['images']);
            }

            $post->update($data);

            PostCategoryTag::where('post_id', $post->id)->delete();
            foreach ($categoryTagIds as $categoryTagId) {
                PostCategoryTag::create([
                    'post_id' => $post->id,
                    'category_tag_id' => $categoryTagId,
                ]);
            }

            DB::commit();
            return redirect()->route('events-and-news.index')->with('success', 'Post updated successfully.');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->route('events-and-news.edit', $post->id)->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Post::findOrFail($id);

        try {
            DB::transaction(function () use ($post) {
                if ($post->banner_img && File::exists(public_path($post->banner_img))) {
                    File::delete(public_path($post->banner_img));
                }
                if ($post->images) {
                    $oldImages = array_filter(explode(',', $post->images));
                    foreach ($oldImages as $oldImage) {
                        if (File::exists(public_path($oldImage))) {
                            File::delete(public_path($oldImage));
                        }
                    }
                }

                PostCategoryTag::where('post_id', $post->id)->delete();
                $post->delete();
            });

            return redirect()->route('events-and-news.index')->with('success', 'Post deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->route('events-and-news.index')->with('error', $e->getMessage());
        }
    }
}
