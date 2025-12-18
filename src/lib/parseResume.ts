import fs from "node:fs";
import path from "node:path";

export interface Link {
  text: string;
  url: string;
}

export interface Header {
  name: string;
  title: string;
  location: string;
  links: Link[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Job {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface CommunityEntry {
  org: string;
  description: string;
}

export interface EducationEntry {
  school: string;
  program: string;
  years: string;
}

export interface Resume {
  header: Header;
  summary: string;
  skills: SkillCategory[];
  experience: Job[];
  community: CommunityEntry[];
  previousExperience: string;
  education: EducationEntry[];
}

export function parseResume(): Resume {
  const resumePath = path.join(process.cwd(), "resume.md");
  const content = fs.readFileSync(resumePath, "utf-8");
  const lines = content.split("\n");

  // Parse header
  const name = lines[0].replace("# ", "");
  const titleLine = lines[2];
  const [title, location] = titleLine.replace(/\*\*/g, "").split(" | ");
  const linksLine = lines[4];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links: Link[] = [];
  let match;
  while ((match = linkRegex.exec(linksLine)) !== null) {
    links.push({ text: match[1], url: match[2] });
  }

  const header: Header = { name, title, location, links };

  // Find sections by ## headers
  const sections: { [key: string]: string[] } = {};
  let currentSection = "";
  for (const line of lines) {
    if (line.startsWith("## ")) {
      currentSection = line.replace("## ", "").toLowerCase();
      sections[currentSection] = [];
    } else if (currentSection && line !== "---") {
      sections[currentSection].push(line);
    }
  }

  // Parse summary
  const summary = sections["summary"]?.join(" ").trim() || "";

  // Parse skills
  const skills: SkillCategory[] = [];
  for (const line of sections["skills"] || []) {
    if (line.startsWith("**")) {
      const categoryMatch = line.match(/\*\*([^:]+):\*\* (.+)/);
      if (categoryMatch) {
        skills.push({
          category: categoryMatch[1],
          skills: categoryMatch[2].split(", "),
        });
      }
    }
  }

  // Parse experience
  const experience: Job[] = [];
  let currentJob: Job | null = null;
  for (const line of sections["experience"] || []) {
    if (line.startsWith("### ")) {
      if (currentJob) experience.push(currentJob);
      const [jobTitle, company] = line.replace("### ", "").split(" | ");
      currentJob = { title: jobTitle, company, dates: "", location: "", bullets: [] };
    } else if (line.startsWith("**") && currentJob) {
      const meta = line.replace(/\*\*/g, "");
      const [dates, loc] = meta.split(" | ");
      currentJob.dates = dates;
      currentJob.location = loc;
    } else if (line.startsWith("- ") && currentJob) {
      currentJob.bullets.push(line.replace("- ", ""));
    }
  }
  if (currentJob) experience.push(currentJob);

  // Parse community
  const community: CommunityEntry[] = [];
  for (const line of sections["community"] || []) {
    if (line.startsWith("- **")) {
      const entryMatch = line.match(/- \*\*([^*]+)\*\* – (.+)/);
      if (entryMatch) {
        community.push({ org: entryMatch[1], description: entryMatch[2] });
      }
    }
  }

  // Parse previous experience
  const previousExperience = sections["previous experience"]?.filter(l => l.trim()).join(" ") || "";

  // Parse education
  const education: EducationEntry[] = [];
  for (const line of sections["education"] || []) {
    if (line.startsWith("**")) {
      const eduMatch = line.match(/\*\*([^*]+)\*\* \| ([^|]+) \| (.+)/);
      if (eduMatch) {
        education.push({ school: eduMatch[1], program: eduMatch[2], years: eduMatch[3] });
      }
    }
  }

  return {
    header,
    summary,
    skills,
    experience,
    community,
    previousExperience,
    education,
  };
}
