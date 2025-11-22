export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Lone Ahtisham. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
