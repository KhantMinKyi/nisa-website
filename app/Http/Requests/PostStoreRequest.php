<?php

namespace App\Http\Requests;

use App\Models\PostType;
use Illuminate\Foundation\Http\FormRequest;

class PostStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $postTypeId = $this->integer('post_type_id');
        $isActivity = false;
        if ($postTypeId) {
            $isActivity = (bool) optional(PostType::select('is_activity')->find($postTypeId))->is_activity;
        }

        $activityRequired = $isActivity ? ['required'] : ['nullable'];

        return [
            'post_type_id' => ['required', 'integer', 'exists:post_types,id'],
            'title' => ['required', 'string', 'max:255'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'footer_description' => ['nullable', 'string'],
            'banner_img' => ['required', 'file', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'images' => ['nullable', 'array'],
            'images.*' => ['file', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'start_date' => array_merge($activityRequired, ['date']),
            'end_date' => array_merge($activityRequired, ['date', 'after_or_equal:start_date']),
            'registration_fee' => array_merge($activityRequired, ['string', 'max:100']),
            'location' => array_merge($activityRequired, ['string', 'max:100']),
            'award_description' => array_merge($activityRequired, ['string']),
            'video_url' => ['nullable', 'string'],
            'category_tag_ids' => ['required', 'array', 'min:1'],
            'category_tag_ids.*' => ['integer', 'exists:category_tags,id'],
        ];
    }

    public function messages()
    {
        return [
            'banner_img.required' => 'You need to add a banner image.',
            'banner_img.max' => 'Banner image must not be greater than 2MB.',
            'images.*.max' => 'Images must not be greater than 2MB.',
            'category_tag_ids.required' => 'Please select at least one category tag.',
        ];
    }
}
