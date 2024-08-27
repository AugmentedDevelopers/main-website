const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`z-10 items-end pr-6 lg:hidden fixed right-0 w-[170px] pt-24 text-xl space-y-12 bg-gray-200 opacity-90 min-h-screen ${
        isOpen ? "flex flex-col" : "hidden"
      }`}
    >
      <a
        className={`underline-animation w-fit delay-50 ${
          isOpen ? "animate-slideDown" : ""
        }`}
        href="#"
      >
        Home
      </a>
      <a
        className={`underline-animation w-fit delay-50 ${
          isOpen ? "animate-slideDown" : ""
        }`}
        href="#"
      >
        Blogs
      </a>
      <a
        className={`underline-animation w-fit delay-150 ${
          isOpen ? "animate-slideDown" : ""
        }`}
        href="#"
        style={{ animationDelay: "0.25s" }}
      >
        Services
      </a>
      <a
        className={`underline-animation w-fit delay-100 ${
          isOpen ? "animate-slideDown" : ""
        }`}
        href="#"
      >
        About
      </a>
      <a
        className={`underline-animation w-fit delay-200 ${
          isOpen ? "animate-slideDown" : ""
        }`}
        href="#"
        style={{ animationDelay: "0.35s" }}
      >
        Contact Us
      </a>
    </div>
  );
};

export default Sidebar;
