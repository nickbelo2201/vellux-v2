import { SVGProps } from "react";
import { cn } from "@/lib/utils";

type SVGPropsType = SVGProps<SVGSVGElement>;

export function VelluxiaLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 64 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-hidden="true"
      >
        {/* "V" chevron */}
        <path d="M2 4 L14 4 L22 26 L30 4 L42 4 L26 38 L18 38 Z" fill="#1E3A8A" />
        {/* lightning bolt */}
        <path d="M44 2 L60 2 L51 17 L62 17 L40 39 L47 21 L38 21 Z" fill="#7C3AED" />
      </svg>
      <span className="font-fustat font-extrabold tracking-tight text-[#1E3A8A] text-xl leading-none">
        Velluxia
      </span>
    </span>
  );
}

export function ChevronDownIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function CircleArrowRightIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function MenuIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function BoltIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
    </svg>
  );
}

export function LockClosedIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CreditCardIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2.5 4A1.5 1.5 0 0 0 1 5.5V6h18v-.5A1.5 1.5 0 0 0 17.5 4h-15ZM19 8.5H1v6A1.5 1.5 0 0 0 2.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-6ZM3 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function DocumentIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 3.375C3.75 2.339 4.59 1.5 5.625 1.5H9C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V7.125C12.75 8.161 13.59 9 14.625 9H16.5C17.4946 9 18.4484 9.39509 19.1517 10.0983C19.8549 10.8016 20.25 11.7554 20.25 12.75V20.625C20.25 21.66 19.41 22.5 18.375 22.5H5.625C5.12772 22.5 4.65081 22.3025 4.29917 21.9508C3.94754 21.5992 3.75 21.1223 3.75 20.625V3.375Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PixIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#pix-clip)">
        <path
          d="M1.924 13.591C1.50204 13.169 1.26499 12.5967 1.26499 12C1.26499 11.4033 1.50204 10.831 1.924 10.409L3.51499 8.81802C3.93694 8.39606 4.50924 8.15901 5.10598 8.15901C5.70272 8.15901 6.27501 8.39606 6.69697 8.81802L8.28796 10.409C8.70992 10.831 8.94697 11.4033 8.94697 12C8.94697 12.5967 8.70992 13.169 8.28796 13.591L6.69697 15.182C6.27501 15.6039 5.70272 15.84 5.10598 15.84C4.50924 15.84 3.93694 15.6039 3.51499 15.182L1.924 13.591Z"
          fill="currentColor"
        />
        <path
          d="M15.713 10.409C15.291 10.831 15.054 11.4033 15.054 12C15.054 12.5967 15.291 13.169 15.713 13.591L17.304 15.182C17.726 15.6039 18.2983 15.84 18.895 15.84C19.4918 15.84 20.064 15.6039 20.486 15.182L22.077 13.591C22.499 13.169 22.736 12.5967 22.736 12C22.736 11.4033 22.499 10.831 22.077 10.409L20.486 8.81802C20.064 8.39606 19.4918 8.15901 18.895 8.15901C18.2983 8.15901 17.726 8.39606 17.304 8.81802L15.713 10.409Z"
          fill="currentColor"
        />
        <path
          d="M8.818 6.697C8.396 7.119 8.159 7.6913 8.159 8.288C8.159 8.88467 8.396 9.457 8.818 9.879L10.409 11.47C10.831 11.892 11.4033 12.129 12 12.129C12.5967 12.129 13.169 11.892 13.591 11.47L15.182 9.879C15.604 9.457 15.841 8.88467 15.841 8.288C15.841 7.6913 15.604 7.119 15.182 6.697L13.591 5.106C13.169 4.68404 12.5967 4.44699 12 4.44699C11.4033 4.44699 10.831 4.68404 10.409 5.106L8.818 6.697Z"
          fill="currentColor"
        />
        <path
          d="M8.818 14.121C8.396 14.543 8.159 15.1153 8.159 15.712C8.159 16.3087 8.396 16.881 8.818 17.303L10.409 18.894C10.831 19.316 11.4033 19.553 12 19.553C12.5967 19.553 13.169 19.316 13.591 18.894L15.182 17.303C15.604 16.881 15.841 16.3087 15.841 15.712C15.841 15.1153 15.604 14.543 15.182 14.121L13.591 12.53C13.169 12.108 12.5967 11.871 12 11.871C11.4033 11.871 10.831 12.108 10.409 12.53L8.818 14.121Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="pix-clip">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LinkIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12.8564 7.74707C13.1064 7.65882 13.3819 7.6728 13.6211 7.78711C14.415 8.16632 15.106 8.73095 15.6367 9.43262C16.1675 10.1344 16.5222 10.954 16.6709 11.8213C16.8195 12.6884 16.7587 13.5786 16.4922 14.417C16.2256 15.2555 15.7609 16.0175 15.1387 16.6396L10.6406 21.1367C10.1325 21.6582 9.52635 22.0742 8.85645 22.3594C8.18636 22.6446 7.46555 22.7941 6.7373 22.7939C5.27441 22.7939 3.87207 22.2148 2.83496 21.1777C1.79785 20.1406 1.21875 18.7383 1.21875 17.2754C1.21875 15.8125 1.79785 14.4102 2.83496 13.373L5.45313 10.7549"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1436 16.2529C10.8936 16.3412 10.6181 16.3272 10.3789 16.2129C9.58496 15.8337 8.89404 15.269 8.36328 14.5674C7.83252 13.8656 7.47778 13.046 7.3291 12.1787C7.18042 11.3115 7.24121 10.4214 7.50781 9.58301C7.77441 8.74463 8.23926 7.98258 8.86133 7.36035L13.3594 2.86328C13.8675 2.34179 14.4736 1.92578 15.1436 1.64063C15.8135 1.35547 16.5343 1.20605 17.2627 1.20605C18.7256 1.20605 20.1279 1.78516 21.165 2.82227C22.2021 3.85938 22.7813 5.26172 22.7813 6.72461C22.7813 8.1875 22.2021 9.58984 21.165 10.627L18.5469 13.2451"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PythonIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.92819 1.37109C7.42121 1.37109 6.19959 2.55395 6.19959 4.01307V5.84213H10.9222V6.3502H4.10067C2.5937 6.3502 1.37207 7.53306 1.37207 8.99217L1.37207 12.9552C1.37207 14.4143 2.5937 15.5971 4.10067 15.5971H5.67486V13.3616C5.67486 11.9025 6.8965 10.7196 8.40348 10.7196H13.4409C14.716 10.7196 15.7497 9.71875 15.7497 8.48413V4.01307C15.7497 2.55395 14.5281 1.37109 13.0211 1.37109H8.92819ZM8.60779 4.76764C9.11239 4.76764 9.52149 4.34932 9.52149 3.83195C9.52149 3.31459 9.11239 2.89627 8.60779 2.89627C8.10319 2.89627 7.69409 3.31459 7.69409 3.83195C7.69409 4.34932 8.10319 4.76764 8.60779 4.76764Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 15.5977V17.8332C6.25 19.2923 7.47163 20.4751 8.97861 20.4751H13.0715C14.5785 20.4751 15.8001 19.2923 15.8001 17.8332V16.0041H11.0775V15.4961H17.8991C19.406 15.4961 20.6277 14.3132 20.6277 12.8541V8.89111C20.6277 7.43199 19.406 6.24913 17.8991 6.24913H16.3249V8.48462C16.3249 9.94374 15.1032 11.1266 13.5963 11.1266H8.55881C7.28373 11.1266 6.25 12.1274 6.25 13.3621V15.5977ZM13.3919 17.0286C12.8873 17.0286 12.4782 17.4469 12.4782 17.9643C12.4782 18.4817 12.8873 18.9 13.3919 18.9C13.8965 18.9 14.3056 18.4817 14.3056 17.9643C14.3056 17.4469 13.8965 17.0286 13.3919 17.0286Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function XTwitterIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function DiscordIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.101 18.079.112 18.1.128 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

export function GitHubIcon(props: SVGPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
