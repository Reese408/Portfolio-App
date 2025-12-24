'use server';

export default function SkillPage(){
    // Render the skills section
    return(
        <div className="bg-amber-100 dark:bg-zinc-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <ul className="list-disc pl-8">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                    <li>Docker</li>
                </ul>
            </div>
        </div>
    );
}