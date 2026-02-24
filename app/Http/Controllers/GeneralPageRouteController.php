<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\CategoryTag;
use App\Models\Facility;
use App\Models\FacilityCategory;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use App\Models\Contact;
use App\Models\Post;
use App\Models\PostComment;
use App\Models\Teacher;
use App\Models\TeacherCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class GeneralPageRouteController extends Controller
{
    public function getHomePage(Request $request)
    {

        $images = Facility::limit(8)->get();
        $current_post = request()->input('current_post');
        $query = Post::with(['category_tags.category_tag'])->where('status', 1)->limit(3);
        if ($current_post) {
            $query->whereNot('id', $current_post); // apply limit only if present
        }
        $category_tags = CategoryTag::withCount('related_posts')->orderBy('created_at', 'desc')->get();
        $posts = $query->orderBy('created_at', 'desc')->get();
        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'posts' => $posts,
            'category_tags' => $category_tags,
            'images' => $images,
        ]);
    }
    // About Us
    public function getHistoryPage()
    {
        return Inertia::render('frontend/about_us/OurHistory');
    }
    public function getMissionVisionPage()
    {
        return Inertia::render('frontend/about_us/OurMissionVision');
    }
    public function getPhilosophyPage()
    {
        return Inertia::render('frontend/about_us/OurPhilosophy');
    }
    public function getValuesPage()
    {
        return Inertia::render('frontend/about_us/OurValues');
    }
    public function getSisterSchoolsPage()
    {
        return Inertia::render('frontend/about_us/SisterSchools');
    }
    public function getAdminTeamPage()
    {
        return Inertia::render('frontend/about_us/AdminTeam');
    }
    public function getSchoolProfilePage()
    {
        return Inertia::render('frontend/about_us/SchoolProfile');
    }
    public function getTeachersPage(Request $request)
    {
        $selectedCategoryId = $request->integer('teacher_category_id');
        $teachersQuery = Teacher::query();

        if ($selectedCategoryId) {
            $teachersQuery->where('teacher_category_id', $selectedCategoryId);
        }

        $images = $teachersQuery->paginate(8)->withQueryString();
        $categories = TeacherCategory::select('id', 'title')->orderBy('title')->get();

        return Inertia::render('frontend/about_us/Teachers', [
            'images' => $images,
            'categories' => $categories,
            'selectedCategoryId' => $selectedCategoryId ?: null,
            'showLink' => false
        ]);
    }
    // Student Life
    public function getAlumniPage()
    {
        return Inertia::render('frontend/student_life/Alumni');
    }
    public function getNewsPage()
    {
        $current_post = request()->input('current_post');
        $query = Post::with(['category_tags.category_tag'])->where('status', 1)->limit(3);
        if ($current_post) {
            $query->whereNot('id', $current_post); // apply limit only if present
        }
        $category_tags = CategoryTag::withCount('related_posts')->orderBy('created_at', 'desc')->get();
        $posts = $query->orderBy('created_at', 'desc')->get();
        return Inertia::render('frontend/student_life/News', [
            'posts' => $posts,
            'category_tags' => $category_tags,
        ]);
    }
    public function getGalleryPage(Request $request)
    {
        $selectedCategoryId = $request->integer('category_id');
        $imagesQuery = Gallery::query();

        if ($selectedCategoryId) {
            $imagesQuery->where('category_id', $selectedCategoryId);
        }

        $images = $imagesQuery->paginate(8)->withQueryString();
        $categories = GalleryCategory::select('id', 'title')->orderBy('title')->get();

        return Inertia::render('frontend/student_life/Gallery', [
            'images' => $images,
            'categories' => $categories,
            'selectedCategoryId' => $selectedCategoryId ?: null,
            'showLink' => false
        ]);
    }
    public function getCalendarPage()
    {
        $images = Calendar::paginate(4);
        return Inertia::render('frontend/student_life/Calendar', [
            'images' => $images,
            'showLink' => false
        ]);
    }
    public function getFacilitiesPage(Request $request)
    {
        $selectedCategoryId = $request->integer('category_id');
        $imagesQuery = Facility::query();

        if ($selectedCategoryId) {
            $imagesQuery->where('facility_category_id', $selectedCategoryId);
        }

        $images = $imagesQuery->paginate(8)->withQueryString();
        $categories = FacilityCategory::select('id', 'title')->orderBy('title')->get();

        return Inertia::render('frontend/student_life/Facility', [
            'images' => $images,
            'categories' => $categories,
            'selectedCategoryId' => $selectedCategoryId ?: null,
            'showLink' => false
        ]);
    }
    // Education
    public function getKGPage()
    {
        return Inertia::render('frontend/education/Kindergarten');
    }
    public function getPrimarySchoolPage()
    {
        return Inertia::render('frontend/education/PrimarySchool');
    }
    public function getSecondarySchoolPage()
    {
        return Inertia::render('frontend/education/SecondarySchool');
    }
    public function getIgcsePage()
    {
        return Inertia::render('frontend/education/Igcse');
    }

    // Admission 
    public function getStudentAdmissionPage()
    {
        return Inertia::render('frontend/admission/StudentAdmission');
    }
    public function getAdmissionProcessPage()
    {
        return Inertia::render('frontend/admission/AdmissionProcess');
    }
    public function getWithdrawalPolicyPage()
    {
        return Inertia::render('frontend/admission/WithdrawalPolicy');
    }
    // Contact Us
    public function getContactUsPage()
    {
        return Inertia::render('frontend/contact_us/ContactUs');
    }
    public function showPostDetail($id)
    {
        // Fetch post with relationships
        $post = Post::with(['category_tags.category_tag'])->findOrFail($id);

        // Optional: Fetch related posts (e.g., same category, excluding current)
        $relatedPosts = Post::where('id', '!=', $id)
            ->latest()
            ->take(3)
            ->get();

        $comments = PostComment::where('post_id', $id)
            ->where('status', 1)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('frontend/PostDetail', [
            'post' => $post,
            'related_posts' => $relatedPosts,
            'comments' => $comments,
        ]);
    }

    public function getPrivacyPolicyPage()
    {
        return Inertia::render('frontend/PrivacyPolicy');
    }

    public function getAdminDashboard()
    {
        $totalComments = PostComment::count();
        $pendingComments = PostComment::where('status', 0)->count();

        return Inertia::render('dashboard', [
            'counts' => [
                'teachers' => Teacher::count(),
                'galleries' => Gallery::count(),
                'facilities' => Facility::count(),
                'posts' => Post::count(),
                'calendars' => Calendar::count(),
                'contacts' => Contact::count(),
                'comments' => $totalComments,
                'comments_pending' => $pendingComments,
            ],
        ]);
    }
}
