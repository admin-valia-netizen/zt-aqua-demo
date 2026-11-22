import type {IconName} from '@/lib/progress';
const paths:Record<IconName,React.ReactNode>={
 client:<><circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/></>,
 notary:<><circle cx="9" cy="6" r="3"/><path d="M2 18v-2a7 7 0 0 1 12-4M16 10l6 3-6 3-6-3 6-3Zm-4 7v4m4-4v5m4-5v4M10 22h12"/></>,
 document:<><path d="M5 2h9l5 5v15H5V2Zm9 0v6h5M8 12h8M8 16h8"/></>,
 send:<><rect x="2" y="6" width="17" height="12" rx="2"/><path d="m3 7 7.5 6L18 7M16 3h6m-3-2 3 2-3 2M16 21h6"/></>,
 signature:<><path d="m4 17 11-12 4 4-11 12-5 1 1-5ZM14 6l4 4M2 15c4-4 4 2 7-1M12 22h10"/></>,
 seal:<><path d="m12 2 3 2 4 1 1 4 2 3-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-3 1-4 4-1 3-2Z"/><path d="m8 12 3 3 5-6"/></>,
 payment:<><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 9h20M6 15h4"/></>,
 delivery:<><path d="m3 7 9-5 9 5v11l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v11M7 4l10 6"/></>,
 check:<><circle cx="12" cy="12" r="10"/><path d="m7 12 3 3 7-7"/></>,
 camera:<><path d="M3 6h4l2-3h6l2 3h4v15H3V6Z"/><circle cx="12" cy="13" r="4"/></>,
 fingerprint:<><path d="M3 10c0-11 18-11 18 0M5 16V9c0-8 14-8 14 0v8M8 20V10c0-5 8-5 8 0v11M11 22V10c0-1 2-1 2 0v7M2 14v4M21 12v7"/></>,
 motion:<><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 18h4M3 6 1 9l2 3m18 0 2 3-2 3M3 4v-2m18 20v-2"/></>,
 college:<><path d="m2 8 10-6 10 6H2Zm0 14h20M5 10v9m7-9v9m7-9v9"/></>,
 technical:<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 22h8m-4-5v5M6 9l3 3 5-5"/></>,
 speaker:<><path d="M3 9h4l5-5v16l-5-5H3V9Zm13-2c4 3 4 7 0 10m3-13c7 5 7 11 0 16"/></>,
};
export default function ProcessIcon({name}:{name:IconName}){return <svg className="process-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;}
