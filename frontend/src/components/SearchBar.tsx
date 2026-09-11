export default function SearchBar() {
  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="w-full rounded-xl border border-app-border bg-app-surface px-5 py-3 text-sm text-app-text placeholder:text-app-muted outline-none transition focus:border-app-primary focus:ring-2 focus:ring-app-primary/10"
      />
    </div>
  );
}
