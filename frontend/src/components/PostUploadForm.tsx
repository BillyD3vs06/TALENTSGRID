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
        <div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Website"
              className="bg-app-surface rouned-lg border border-app-border"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
