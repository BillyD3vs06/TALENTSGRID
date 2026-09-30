export default function PostUploadForm() {
  return (
    <section className="w-screen h-screen bg-app-bg px-6 py-8">
      <div className="mb-8">
        <h1 className="text-app-text text-2xl font-semibold tracking-tight">
          Create your post
        </h1>
        <p className="bg-app-bg text-app-muted">
          Add information about your work as a talent and post it when you are
          done.
        </p>
      </div>

      <form className="space-y-8">
        {/* Title and description*/}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-app-text"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Website"
              className="bg-app-surface px-4 py-2.5 rouned-lg border border-app-border w-full text-app-text text-sm transition outline-none placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Description */}
          <div className="grid">
            <label htmlFor="description" className="bg-app-surface">
              Description
            </label>
          </div>
        </div>
      </form>
    </section>
  );
}
