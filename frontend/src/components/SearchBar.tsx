export default function SearchBar() {
  return (
    <section className="min-h-screen bg-app-bg px-6 py-8">
      <div className="flex w-full justify-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="w-full max-w-2xl rounded-2xl border border-app-border bg-app-surface px-5 py-2 text-sm text-app-text placeholder:text-app-muted outline-none transition focus:border-app-primary focus:ring-2 focus:ring-app-primary/10"
        />
      </div>
    </section>
  );
}
