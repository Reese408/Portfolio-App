import { resume } from "react-dom/server";

export const MEDIA_BASE =
  "https://reeses-portfolio-media.s3.us-east-2.amazonaws.com";

export const projectVideos = {
  cnc: `${MEDIA_BASE}/projects/CNC/cnc-demo.mp4`,
  gamingHub: `${MEDIA_BASE}/projects/GamingHub/gaming-hub-demo.mp4`,
  workoutApp: `${MEDIA_BASE}/projects/WorkoutApp/workout-app-demo.mp4`,
};

export const certs = {
  cs50w: `${MEDIA_BASE}/certs/cs50w-certificate.png`,
  react: `${MEDIA_BASE}/certs/react-certificate.png`,
  snowflake1: `${MEDIA_BASE}/certs/snowflake-cert1.png`,
  snowflake2: `${MEDIA_BASE}/certs/snowflake-cert2.png`,
};
export const miscMedia = {
    profilePic: `${MEDIA_BASE}/misc/ProfilePic.png`,
    resume: `${MEDIA_BASE}/misc/Resume-12-29.pdf`,
};
