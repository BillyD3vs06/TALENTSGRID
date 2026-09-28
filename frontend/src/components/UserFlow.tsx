export default function UserFlow() {
  const mockups = [
    { id: 1, talent: "Alex Johnson" },
    { id: 2, talent: "Emma Wilson" },
    { id: 3, talent: "Noah Anderson" },
    { id: 4, talent: "Olivia Martin" },
    { id: 5, talent: "Liam Taylor" },
    { id: 6, talent: "Sophia Brown" },
    { id: 7, talent: "James Davis" },
    { id: 8, talent: "Mia Wilson" },
  ];

  return (
    <section className="min-h-screen bg-app-bg px-6 py-8">
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-app-text">
            Discover talents
          </h1>

          <p className="mt-1 text-sm text-app-muted">
            Explore websites and products created by talented people.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockups.map((mockup) => (
            <div key={mockup.id} className="group cursor-pointer">
              {/* Preview on a general idea on how the home page might look when done */}
              <div className="aspect-video overflow-hidden rounded-xl border border-app-border bg-app-surface transition-all duration-200 group-hover:-translate-y-1 group-hover:border-app-primary group-hover:shadow-md">
                <div className="flex h-full items-center justify-center text-sm font-medium text-app-muted">
                  Picture
                </div>
              </div>

              {/* Talent information */}
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-app-border bg-app-surface text-xs font-medium text-app-muted">
                  Profile pic
                </div>

                {/* Talent name */}
                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold text-app-text transition-colors group-hover:text-app-primary">
                    {mockup.talent}
                  </h2>

                  <p className="mt-0.5 text-xs text-app-muted">Talent</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
