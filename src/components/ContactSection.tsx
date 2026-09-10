{/* FOOTER */}

<div
  className="
    mt-10
    border-t
    border-white/10
    px-8
    md:px-20
    py-8
    max-w-[1400px]
    mx-auto
    font-mono
    text-[0.65rem]
    uppercase
    tracking-[0.22em]
    text-white/30
  "
>
  <div
    className="
      flex
      flex-col
      items-center
      gap-4
      md:grid
      md:grid-cols-3
      md:gap-0
    "
  >
    <span className="md:text-left">
      © {new Date().getFullYear()} Vladimir Sergeev
    </span>

    <span className="md:text-right md:col-start-3 md:row-start-1">
      Novomoskovsk, Russia
    </span>

    <a
      href="https://www.behance.net/cbacaf41"
      target="_blank"
      rel="noopener noreferrer"
      className="
        hover:text-white
        transition-colors
        md:text-center
        md:col-start-2
        md:row-start-1
      "
    >
      Behance ↗
    </a>
  </div>
</div>
