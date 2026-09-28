export default function UserFlow() {
  const mockups = [
    { id: 1, talent: "Oliver Smith" },
    { id: 2, talent: "George Jones" },
    { id: 3, talent: "Harry Taylor" },
    { id: 4, talent: "Jack Brown" },
    { id: 5, talent: "Jacob Williams" },
    { id: 6, talent: "Noah Wilson" },
    { id: 7, talent: "Charlie Johnson" },
    { id: 8, talent: "Muhammad Davies" },
    { id: 9, talent: "Thomas Patel" },
    { id: 10, talent: "Oscar Robinson" },
    { id: 11, talent: "William Wright" },
    { id: 12, talent: "Leo Thompson" },
    { id: 13, talent: "Henry Evans" },
    { id: 14, talent: "Arthur Walker" },
    { id: 15, talent: "Alfie White" },
    { id: 16, talent: "Freddie Roberts" },
    { id: 17, talent: "Archie Green" },
    { id: 18, talent: "Joshua Hall" },
    { id: 19, talent: "Ibrahim Thomas" },
    { id: 20, talent: "James Clarke" },
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
                  Picture on the product
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
