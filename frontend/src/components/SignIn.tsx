import React from "react";

export default function SignIn() {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [dateOfBirth, setDateOfBirth] = React.useState<string>("");
  const [password, setPassWord] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [profilePicture, setProfilePicture] = React.useState<File | null>(null);
  const [bio, setBio] = React.useState<string>("");
  const [websiteURL, setWebsiteURL] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");
  const [contactMail, setContactMail] = React.useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0] ?? null;
    setProfilePicture(file);
  };

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
                  value={firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
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
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
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
                  value={userName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserName(e.target.value)
                  }
                  placeholder="@j0hndo3"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-app-muted"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
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
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhoneNumber(e.target.value)
                  }
                  placeholder="012-345 67 89"
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
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDateOfBirth(e.target.value)
                  }
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
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassWord(e.target.value)
                }
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
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-app-text"
              >
                Confirm Your Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
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
                    className="cursor-pointer border rounded-md bg-app-primary px-3 py-2 text-sm font-medium transition-all duration-200 scale-105 text-white hover:text-app-surface"
                  >
                    Upload photo
                  </label>
                  <input
                    id="profile-picture"
                    name="profile-picture"
                    type="file"
                    onChange={handleProfilePictureChange}
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
                className="mb-2 block text-sm font-medium text-app-text"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                placeholder="Tell us a little about yourself..."
                className="w-full resize-none rounded-lg border border-app-border bg-app-surface px-4 py-3 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            {/* Website & location */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Website URL
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  defaultValue={"https://"}
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-app-text"
                >
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Stockholm, Sweden"
                  className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
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
                className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-2.5 text-sm text-app-text outline-none transition placeholder:text-app-muted focus:border-app-primary focus:ring-2 focus:ring-gray-900/10"
              />
              <p className="mt-2 text-xs text-app-muted">
                This must be different from your account email. Networkers will
                use this email to contact you.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-app-border pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-lg border border-app-border px-5 py-2.5 text-sm font-medium text-app-text transition hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-app-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none cursor-pointer"
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
