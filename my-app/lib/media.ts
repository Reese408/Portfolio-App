export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL || 'https://reeses-portfolio-media.s3.us-east-2.amazonaws.com'

/* =========================
   Project Demo Videos
========================= */
export const projectVideos = {
  cnc: `${MEDIA_BASE}/projects/CNC/cnc-demo.mp4`,
  gamingHub: `${MEDIA_BASE}/projects/GamingHub/gaming-hub-demo.mp4`,
  workoutApp: `${MEDIA_BASE}/projects/WorkoutApp/workout-app-demo.mp4`,
} as const;

/* =========================
   Certificates
========================= */
export const certs = {
  cs50w: `${MEDIA_BASE}/certs/cs50w-certificate.png`,
  react: `${MEDIA_BASE}/certs/react-certificate.png`,
  snowflake1: `${MEDIA_BASE}/certs/snowflake-cert1.png`,
  snowflake2: `${MEDIA_BASE}/certs/snowflake-cert2.png`,
} as const;

/* =========================
   Misc Media
========================= */
export const miscMedia = {
  profilePic: `${MEDIA_BASE}/misc/ProfilePic.jpg`,
  resume: `${MEDIA_BASE}/misc/Resume.pdf`,
} as const;

/* =========================
   Project Card Images
========================= */
export const projectImages: Record<string, string> = {
  // Add S3 image URLs here when uploaded
  // 'voice-up-athletics': `${MEDIA_BASE}/projects/voice-up-athletics/cover.jpg`,
  // 'suds-on-wheels-usa': `${MEDIA_BASE}/projects/suds-on-wheels-usa/cover.jpg`,
  // 'grace-on-going': `${MEDIA_BASE}/projects/grace-on-going/cover.jpg`,
  // 'cnc-construction': `${MEDIA_BASE}/projects/cnc-construction/cover.jpg`,
  // 'gaminghub': `${MEDIA_BASE}/projects/gaminghub/cover.jpg`,
  // 'workout-app': `${MEDIA_BASE}/projects/workout-app/cover.jpg`,
};
