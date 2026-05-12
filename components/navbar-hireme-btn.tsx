export default function NavbarHireMeBtn() {
  return (
    <div className="relative w-40 h-10  flex flex-col items-center justify-center hire-me-btn pixel-font">
      <div className="absolute top-0 right-0 flex items-stretch justify-between w-full min-h-full box-wrapper">
        <div className="flex flex-col justify-between">
            <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-2 stroke-white/50 w-3"
          >
            <path d="M0.5 16L0.5 0M0 0.5H16" />
          </svg>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-2 stroke-white/50 w-3 -rotate-90"
          >
            <path d="M0.5 16L0.5 0M0 0.5H16" />
          </svg>
        </div>
        <div className="flex flex-col justify-between">
            <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-2 stroke-white/50 w-3 rotate-90"
          >
            <path d="M0.5 16L0.5 0M0 0.5H16" />
          </svg>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-2 stroke-white/50 w-3 rotate-180"
          >
            <path d="M0.5 16L0.5 0M0 0.5H16" />
          </svg>
        </div>
      </div>
      <div className="relative w-full flex justify-center overflow-hidden text-content">
        <p className="default-text">Hire Me !</p>
        <p className="absolute translate-y-[100%]">schedule a call !</p>
      </div>
    </div>
  );
}
