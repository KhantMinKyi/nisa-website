<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostCommentStoreRequest;
use App\Models\PostComment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostCommentController extends Controller
{
    public function index()
    {
        $comments = PostComment::with('post')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('backend/events_and_news/comments', [
            'comments' => $comments,
        ]);
    }

    public function store(PostCommentStoreRequest $request)
    {
        PostComment::create([
            'post_id' => $request->integer('post_id'),
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'description' => $request->input('description'),
            'status' => 0,
        ]);

        return response()->json([
            'message' => 'Comment submitted successfully.',
        ]);
    }

    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            'status' => ['required', 'boolean'],
        ]);

        $comment = PostComment::findOrFail($id);
        $comment->update([
            'status' => (bool) $data['status'],
        ]);

        return redirect()->route('post-comments.index')->with('success', 'Comment status updated.');
    }

    public function destroy(string $id)
    {
        $comment = PostComment::findOrFail($id);
        $comment->delete();

        return redirect()->route('post-comments.index')->with('success', 'Comment deleted.');
    }
}
