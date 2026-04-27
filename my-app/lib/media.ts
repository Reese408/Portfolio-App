export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL || 'https://reeses-portfolio-media.s3.us-east-2.amazonaws.com'

/* =========================
   Project Demo Videos
========================= */
export const projectVideos: Record<string, string> = {
  cnc: `${MEDIA_BASE}/projects/CNC/cnc-demo.mp4`,
  gamingHub: `${MEDIA_BASE}/projects/GamingHub/gaming-hub-demo.mp4`,
  workoutApp: `${MEDIA_BASE}/projects/WorkoutApp/workout-app-demo.mp4`,
  'voice-up-athletics': `${MEDIA_BASE}/projects/VoiceUpAthletics/VUA-DEMO.mp4`,
};

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
  'cnc-construction': `${MEDIA_BASE}/projects/CNC/CNC-Image.png`,
  'gaminghub': `${MEDIA_BASE}/projects/GamingHub/GamingHub-Image.png`,
  'workout-app': `${MEDIA_BASE}/projects/WorkoutApp/Workout-Image.png`,
  'grace-on-going': `${MEDIA_BASE}/projects/Grace/GOG-Image.png`,
  'voice-up-athletics': `${MEDIA_BASE}/projects/VoiceUpAthletics/VUA-Image.png`,
  'suds-on-wheels-usa': `${MEDIA_BASE}/projects/SudsOnWheels/SOW-Image.png`,
};
