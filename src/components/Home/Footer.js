const Footer = () => {
  return (
    <footer className="p-8 my-10 mx-auto max-w-6xl text-on-surface-variant bg-surface-variant/25 rounded-2xl">
      <svg
        class="mx-auto mb-4"
        width="27"
        height="27"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <line x1="3" y1="6" x2="3" y2="19" />
        <line x1="12" y1="6" x2="12" y2="19" />
        <line x1="21" y1="6" x2="21" y2="19" />
      </svg>
      <p className="text-center">
        BookStop is an open-source, non-profit project that aims to encourage
        reading culture and make books accessible to everyone.
      </p>
      <div className="p-2 mb-4 space-x-8 text-center">
        <a
          href="https://www.facebook.com/BookStopProject"
          className="font-medium"
        >
          Facebook
        </a>
        <a href="https://github.com/BookStopProject" className="font-medium">
          GitHub
        </a>
        <a href="mailto:read@bookstop.app" className="font-medium">
          Email
        </a>
      </div>
      <p className="pt-4 text-center border-t-1 border-outline/25">
        Made with ❤️ love, 🔥 passion, and a ⌨️ keyboard by{" "}
        <a className="text-primary" href="https://hoangvvo.com">
          Hoang Vo
        </a>
      </p>
    </footer>
  );
};

export default Footer;
