import React, { Component } from "react";

interface PostUploadFormProps {}

interface PostUploadFormState {}

class PostUploadForm extends Component<
  PostUploadFormProps,
  PostUploadFormState
> {
  constructor(props: PostUploadFormProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="w-full min-h-screen bg-app-bg px-6 py-10">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-app-text text-2xl font-semibold tracking-tight">
              Create your post
            </h1>

            <p className="bg-app-bg text-app-muted text-sm mt-2">
              Add information about your work as a talent and post it when you
              are done.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-app-border bg-app-surface p-6 shadow-sm sm:p-8">
            <form className="space-y-8">
              {/* Product title */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Product title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="ex. Personal portfolio website"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-app-primary/10"
                />

                <p className="mt-2 text-xs text-app-muted">
                  Keep your title short and easy to understand.
                </p>
              </div>

              {/* Short description */}
              <div>
                <label
                  htmlFor="short-description"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Short description
                </label>

                <textarea
                  id="short-description"
                  name="short-description"
                  rows={3}
                  placeholder="Give people a quick idea of what you have created..."
                  className="w-full resize-none rounded-lg border border-app-border bg-app-surface px-4 py-3 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-app-primary/10"
                />

                <p className="mt-2 text-xs text-app-muted">
                  A short introduction that will be visible when people discover
                  your post.
                </p>
              </div>

              {/* Detailed description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Detailed description
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows={7}
                  placeholder="Describe your product, the idea behind it, the technologies you used, your role, and anything else you would like people to know..."
                  className="w-full resize-y rounded-lg border border-app-border bg-app-surface px-4 py-3 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-app-primary/10"
                />

                <p className="mt-2 text-xs text-app-muted">
                  Tell visitors more about your work and the process behind it.
                </p>
              </div>

              {/* Product images */}
              <div>
                <label
                  htmlFor="product-images"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Product images
                </label>

                <div className="rounded-xl border border-dashed border-app-border bg-app-bg p-8 text-center transition hover:border-app-primary">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-app-surface text-app-muted">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v9.75m-18 0A2.25 2.25 0 005.25 18.75h13.5A2.25 2.25 0 0021 16.5m-18 0l4.5-4.5 3.75 3.75 2.25-2.25L21 18.75M8.25 9.75h.008v.008H8.25V9.75z"
                      />
                    </svg>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="product-images"
                      className="cursor-pointer text-sm font-medium text-app-primary hover:underline"
                    >
                      Upload images
                    </label>

                    <input
                      id="product-images"
                      name="product-images"
                      type="file"
                      accept="image/*"
                      multiple
                      className="sr-only"
                    />

                    <p className="mt-2 text-xs text-app-muted">
                      PNG, JPG, JPEG or WEBP
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 border-t border-app-border pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="cursor-pointer rounded-lg border border-app-border bg-app-surface px-5 py-2.5 text-sm font-medium text-app-text transition hover:bg-app-bg focus:outline-none focus:ring-2 focus:ring-app-primary/20"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-app-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-app-primary/30"
                >
                  Publish post
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default PostUploadForm;
