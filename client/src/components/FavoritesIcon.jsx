// A simple heart icon for Favorites
export default function FavoritesIcon({ className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.75a4.5 4.5 0 00-3.18 1.32l-.32.33-.32-.33A4.5 4.5 0 003.75 8.25c0 2.28 1.72 4.16 4.55 6.62 1.13.98 2.3 1.97 3.2 2.68.9-.71 2.07-1.7 3.2-2.68 2.83-2.46 4.55-4.34 4.55-6.62a4.5 4.5 0 00-4.5-4.5z"
      />
    </svg>
  );
}
