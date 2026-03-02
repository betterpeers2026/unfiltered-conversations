export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Unfiltered Conversations"
                className="h-auto w-[180px]"
              />
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed">
              A leadership development practice helping capable leaders name the
              patterns keeping them from the next level.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#archetypes"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  The Archetypes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  The Framework
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/assessment"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  Clarity Assessment
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  The Decision Room
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  Decision Labs
                </a>
              </li>
              <li>
                <a
                  href="#podcast"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  Podcast
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/50 text-sm hover:text-foreground transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            &copy; 2026 Unfiltered Conversations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-foreground/40 text-sm hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/40 text-sm hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
