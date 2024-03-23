import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-200 text-center text-white dark:bg-neutral-600">

    {/* <!--Copyright section--> */}
    <div
      className="bg-slate-200 p-4 text-center text-slate-700 dark:bg-neutral-700 dark:text-neutral-200">
      &copy; All Rights Reserved 2024.
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="https://github.com/RabbanD/"
      > Created By Rabban Dange</a>
    </div>
  </footer>
  );
}

export default Footer