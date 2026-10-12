import React, { useState } from "react";

type SettingsGroup =
  | "View Conditions"
  | "View Terms"
  | "Theme"
  | "Account Settings"
  | "Profile Settings"
  | "Feed and Content Preferences"
  | "Data Storage"
  | "Notifications and Preferences"
  | "Integrity"
  | "Advanced Settings"
  | "Log Out";

type ThemeOption = "White Theme" | "Black Theme";

const settingsGroups: SettingsGroup[] = [
  "View Conditions",
  "View Terms",
  "Theme",
  "Account Settings",
  "Profile Settings",
  "Feed and Content Preferences",
  "Data Storage",
  "Notifications and Preferences",
  "Integrity",
  "Advanced Settings",
  "Log Out",
];

const settingsDescriptions: Partial<Record<SettingsGroup, string[]>> = {
  "View Conditions": [
    "Review the conditions for using this application.",
    "Understand your responsibilities when interacting with other users.",
    "Learn about the rules and requirements of the platform.",
  ],

  "View Terms": [
    "View the Terms of Service.",
    "Review the Privacy Policy.",
    "Learn about your rights and responsibilities.",
  ],

  "Account Settings": [
    "Change your email address.",
    "Change your password.",
    "Manage account security.",
    "Manage connected accounts.",
    "Deactivate or delete your account.",
  ],

  "Profile Settings": [
    "Edit your name and username.",
    "Change your profile picture and cover image.",
    "Edit your biography and personal information.",
    "Manage your website and contact information.",
    "Choose who can view your profile.",
  ],

  "Feed and Content Preferences": [
    "Manage the content shown in your feed.",
    "Choose your preferred content categories.",
    "Manage muted words and hidden posts.",
    "Control autoplay for videos.",
    "Manage recommendations and suggested accounts.",
  ],

  "Data Storage": [
    "Review your storage usage.",
    "Manage cached data and temporary files.",
    "Manage downloaded media.",
    "Choose your media quality preferences.",
    "Review your data download options.",
  ],

  "Notifications and Preferences": [
    "Manage push notifications.",
    "Manage email notifications.",
    "Choose notifications for likes and comments.",
    "Choose notifications for messages and followers.",
    "Manage notification sounds and display preferences.",
  ],

  Integrity: [
    "Review community guidelines.",
    "Manage blocked accounts.",
    "Manage restricted accounts.",
    "Review reporting and moderation information.",
    "Manage sensitive content preferences.",
  ],

  "Advanced Settings": [
    "Manage accessibility preferences.",
    "Configure language and regional preferences.",
    "Manage connected applications.",
    "Review session and login information.",
    "Manage other advanced preferences.",
  ],

  "Log Out": ["Sign out of your current account on this device."],
};

const Settings: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<SettingsGroup>("Theme");

  const [selectedTheme, setSelectedTheme] =
    useState<ThemeOption>("White Theme");

  const isLogout = activeGroup === "Log Out";

  const renderThemeOption = (
    theme: ThemeOption,
    description: string,
    previewClass: string,
  ) => {
    const isSelected = selectedTheme === theme;

    return (
      <button
        key={theme}
        type="button"
        onClick={() => setSelectedTheme(theme)}
        aria-pressed={isSelected}
        className={`flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-primary ${
          isSelected
            ? "border-app-primary bg-app-primary/5"
            : "border-app-border hover:bg-app-bg"
        }`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`h-12 w-12 shrink-0 rounded-lg border border-app-border shadow-sm ${previewClass}`}
          />

          <div>
            <p className="font-medium text-app-text">{theme}</p>
            <p className="mt-1 text-sm text-app-muted">{description}</p>
          </div>
        </div>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            isSelected ? "border-app-primary" : "border-app-border"
          }`}
        >
          {isSelected && (
            <span className="h-2.5 w-2.5 rounded-full bg-app-primary" />
          )}
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-app-bg px-4 py-8 text-app-text sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="mt-2 text-sm text-app-muted">
            Manage your account and personalize your experience.
          </p>
        </header>

        {/* Main settings layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_minmax(0,1fr)]">
          {/* Left sidebar */}
          <aside className="h-fit rounded-xl border border-app-border bg-app-surface p-3">
            <nav
              aria-label="Settings navigation"
              className="flex flex-col gap-1"
            >
              {settingsGroups.map((group) => {
                const isActive = activeGroup === group;
                const logoutGroup = group === "Log Out";

                return (
                  <button
                    key={group}
                    type="button"
                    onClick={() => setActiveGroup(group)}
                    aria-current={isActive ? "page" : undefined}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-primary ${
                      logoutGroup
                        ? `mt-3 border-t border-app-border pt-5 text-app-accent ${
                            isActive
                              ? "bg-app-accent/10"
                              : "hover:bg-app-accent/10"
                          }`
                        : isActive
                          ? "bg-app-primary/10 text-app-primary"
                          : "text-app-muted hover:bg-app-bg hover:text-app-text"
                    }`}
                  >
                    {group}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right content panel */}
          <main className="min-w-0 rounded-xl border border-app-border bg-app-surface p-5 sm:p-8">
            <div className="mb-6 border-b border-app-border pb-5">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {activeGroup}
              </h2>

              <p className="mt-2 text-sm text-app-muted">
                {activeGroup === "Theme"
                  ? "Choose the appearance you prefer."
                  : isLogout
                    ? "Manage your current session."
                    : `Manage your ${activeGroup.toLowerCase()} preferences.`}
              </p>
            </div>

            {/* Theme settings */}
            {activeGroup === "Theme" && (
              <div className="space-y-4">
                <p className="text-sm text-app-muted">
                  Select a theme for your application.
                </p>

                {renderThemeOption(
                  "White Theme",
                  "A clean, light appearance.",
                  "bg-white",
                )}

                {renderThemeOption(
                  "Black Theme",
                  "A dark appearance with reduced brightness.",
                  "bg-slate-950",
                )}

                <p className="pt-2 text-xs text-app-muted">
                  Selected: {selectedTheme}. Theme selection is currently visual
                  only.
                </p>
              </div>
            )}

            {/* Other settings groups */}
            {activeGroup !== "Theme" && (
              <div className="divide-y divide-app-border">
                {(settingsDescriptions[activeGroup] ?? []).map(
                  (description, index) => (
                    <p
                      key={`${activeGroup}-${index}`}
                      className="py-4 text-sm leading-6 text-app-text first:pt-0 last:pb-0"
                    >
                      {description}
                    </p>
                  ),
                )}

                {/* UI-only logout button */}
                {isLogout && (
                  <div className="pt-6">
                    <button
                      type="button"
                      className="rounded-lg bg-app-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-accent focus-visible:ring-offset-2"
                    >
                      Log Out
                    </button>

                    <p className="mt-3 text-xs text-app-muted">
                      Logging out has not been implemented yet.
                    </p>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
