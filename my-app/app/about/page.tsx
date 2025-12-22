import Link from 'next/link';

export default function AboutMePage(){
    return(
     <div>
        <h1>About Me</h1>
        <p>Hi, my name is John Doe. I am a software developer with a passion for building innovative web applications.</p>
        <p>I have a degree in Computer Science from the University of California, Berkeley. I have been working in the tech industry for over 5 years now.</p>
        <p>When I am not coding, I enjoy hiking, reading, and playing video games with my friends.</p>
        <p>Thank you for visiting my website!</p>
        <Link href="/">Go back to home</Link>
     </div>
    );
}