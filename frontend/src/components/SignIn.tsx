export default function SignIn() {
  return (
    <div className="min-h-screen bg-app-bg px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl bg-app-surface p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-app-text">
              Create your profile
            </h1>
            <p className="mt-2 text-sm text-app-muted">
              Add your personal information to complete your profile.
            </p>
          </div>

          <form className="space-y-8">
            {/* Name */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstname"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  First name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="John"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Last name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Doe"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>
            </div>

            {/* Account information */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="@johndoe"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-app-border bg-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>
            </div>

            {/* Contact information */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 555 123 4567"
                  className="w-full rounded-lg border border-app-border bg-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Date of birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-app-text"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
              />
              <p className="mt-2 text-xs text-app-muted">
                Use at least 8 characters with a mix of letters, numbers and
                symbols.
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-app-text"
              >
                Verify Your Password
              </label>
              <input
                id="verifiedPassword"
                name="password"
                type="password"
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
              />
              <p className="mt-2 text-xs text-app-muted">
                Write the exact same password again
              </p>
            </div>

            {/* Profile picture */}
            <div>
              <label
                htmlFor="profile-picture"
                className="mb-2 block text-sm font-medium text-app-text"
              >
                Profile Picture
              </label>

              <div className="flex items-center gap-5 rounded-lg border border-dashed border-app-border p-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-app-surface text-gray-400">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
                    />
                  </svg>
                </div>

                <div>
                  <label
                    htmlFor="profile-picture"
                    className="cursor-pointer rounded-md bg-app-primary px-3 py-2 text-sm font-medium transition-property text-app-surface hover:bg-app-secondary"
                  >
                    Upload photo
                  </label>
                  <input
                    id="profile-picture"
                    name="profile-picture"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                  />
                  <p className="mt-2 text-xs text-app-mute">
                    PNG, JPG or WEBP up to 5MB.
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label
                htmlFor="bio"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                placeholder="Tell us a little about yourself..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            {/* Website & location */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Website URL
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="New York, NY"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />
              </div>
            </div>

            {/* Contact email */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Contact mail
              </label>
              <input
                id="contact-email"
                name="contact-email"
                type="email"
                placeholder="contact@example.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
              <p className="mt-2 text-xs text-gray-500">
                This must be different from your account email.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Save profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
