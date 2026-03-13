export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SubjectLineScore. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 transition hover:text-gray-700">About</a>
            <a href="#" className="text-sm text-gray-500 transition hover:text-gray-700">Privacy</a>
            <a href="#" className="text-sm text-gray-500 transition hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
