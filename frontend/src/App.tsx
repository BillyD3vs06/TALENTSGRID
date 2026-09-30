import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import PaletteTest from "./components/PaletteTest";
import SearchBar from "./components/SearchBar";
import UserFlow from "./components/UserFlow";
import PostUploadForm from "./components/PostUploadForm";

function App() {
  return (
    <BrowserRouter>
      {/*Navigation */}
      <div className="w-full border-b border-app-border bg-app-surface">
        <nav className="mx-auto flex w-fit items-center justify-center gap-10 py-3">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-app-text transition-colors hover:bg-app-bg hover:text-app-primary focus:outline-none focus:ring-2 focus:ring-app-primary/20"
          >
            Home
          </Link>

          <Link
            to="/searchPage"
            className="rounded-lg px-4 py-2 text-sm font-medium text-app-text transition-colors hover:bg-app-bg hover:text-app-primary focus:outline-none focus:ring-2 focus:ring-app-primary/20"
          >
            Search
          </Link>

          <Link
            to="/uploadPage"
            className="rounded-lg px-4 py-2 text-sm font-medium text-app-text transition-colors hover:bg-app-bg hover:text-app-primary focus:outline-none focus:ring-2 focus:ring-app-primary/20"
          >
            Upload
          </Link>

          <Link
            to="/followingPage"
            className="rounded-lg px-4 py-2 text-sm font-medium text-app-text transition-colors hover:bg-app-bg hover:text-app-primary focus:outline-none focus:ring-2 focus:ring-app-primary/20"
          >
            Following
          </Link>

          <Link
            to="/settingsPage"
            className="rounded-lg px-4 py-2 text-sm font-medium text-app-text transition-colors hover:bg-app-bg hover:text-app-primary focus:outline-none focus:ring-2 focus:ring-app-primary/20"
          >
            Settings
          </Link>
        </nav>
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="searchPage" element={<SearchPage />} />
        <Route path="uploadPage" element={<UploadPage />} />
        <Route path="followingPage" element={<FollowingPage />} />
        <Route path="settingsPage" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

{
  /* The following functions is all the pages in the application */
}

function LogInPage() {
  return <LogIn />;
}

function SignInPage() {
  return <SignIn />;
}

function HomePage() {
  return (
    <>
      <UserFlow></UserFlow>
    </>
  );
}

function SearchPage() {
  return (
    <>
      <SearchBar />
    </>
  );
}

function UploadPage() {
  return (
    <>
      <PostUploadForm></PostUploadForm>
    </>
  );
}

function FollowingPage() {
  return (
    <>
      <h1>This is the following page</h1>
    </>
  );
}

function SettingsPage() {
  return (
    <>
      <h1>This is the settings page</h1>
    </>
  );
}

export default App;
