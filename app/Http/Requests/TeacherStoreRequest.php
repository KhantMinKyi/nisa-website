<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherStoreRequest extends FormRequest
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
        return [
            'src'                                           => ['required', 'array', 'min:1', 'max:10'],
            'src.*'                                         => ['file', 'mimes:jpg,jpeg,png,webp', 'max:1024'],
            'alt'                                           => ['required', 'string'],
            'teacher_category_id'                           => ['required', 'integer', 'exists:teacher_categories,id'],
        ];
    }

    public function messages()
    {
        return [
            'src.required'                                                      => 'You Need to add Teacher Photo',
            'src.array'                                                         => 'Photos must be an array of files',
            'src.min'                                                           => 'You Need to add Teacher Photo',
            'src.max'                                                           => 'You can upload up to 10 photos at a time',
            'src.*.mimes'                                                       => 'Image must be JPG, JPEG, PNG, or WebP',
            'src.*.max'                                                         => 'Image Must not Greater then 1MB',
            'alt.required'                                                      => 'Title is required',
        ];
    }
}
