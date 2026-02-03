import React from "react";

const SocialButton = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => console.log("Google Login")}
          className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 text-white py-3 rounded-2xl hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.905 3.146-1.748 4.053-1.048 1.058-2.67 2.124-5.41 2.124-4.363 0-7.742-3.54-7.742-7.904s3.38-7.904 7.742-7.904c2.352 0 4.14 1.058 5.41 2.21l2.31-2.31C18.63 2.193 15.936 1 12.48 1c-6.19 0-11.23 5.04-11.23 11.23s5.04 11.23 11.23 11.23c3.456 0 6.09-1.132 8.165-3.32 2.112-2.112 2.768-5.064 2.768-7.448 0-.696-.06-1.356-.168-1.952H12.48z"
            />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">
            Google
          </span>
        </button>

        <button
          type="button"
          onClick={() => console.log("GitHub Login")}
          className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 text-white py-3 rounded-2xl hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider">
            GitHub
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialButton;
