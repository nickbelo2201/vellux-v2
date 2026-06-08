import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

const BASE = process.cwd();

const assets = [
  // Founder avatars
  {
    url: "https://assets.abacatepay.com/website/founder1.png",
    dest: "public/images/founder1.png",
  },
  {
    url: "https://assets.abacatepay.com/website/founder2.png",
    dest: "public/images/founder2.png",
  },
  {
    url: "https://assets.abacatepay.com/website/founder3.png",
    dest: "public/images/founder3.png",
  },
  // Section assets
  {
    url: "https://assets.abacatepay.com/website/documentation.svg",
    dest: "public/images/documentation.svg",
  },
  {
    url: "https://assets.abacatepay.com/website/chat.svg",
    dest: "public/images/chat.svg",
  },
  // Support image (from Next.js static media)
  {
    url: "https://www.abacatepay.com/_next/static/media/imagesupport.21600be7.svg",
    dest: "public/images/imagesupport.svg",
  },
  // Favicon
  {
    url: "https://www.abacatepay.com/favicon.ico",
    dest: "public/seo/favicon.ico",
  },
  // Twitter profile images for testimonials
  {
    url: "https://pbs.twimg.com/profile_images/1981383099129757696/ksLjcnDe_400x400.jpg",
    dest: "public/images/testimonial-joao.jpg",
  },
  {
    url: "https://pbs.twimg.com/profile_images/1961787669068804096/dXMv1ZFL_400x400.jpg",
    dest: "public/images/testimonial-bruno.jpg",
  },
  {
    url: "https://pbs.twimg.com/profile_images/1928176430296305665/cWk5LQfk_400x400.jpg",
    dest: "public/images/testimonial-brahma.jpg",
  },
];

async function download(url, dest) {
  const fullPath = join(BASE, dest);
  const dir = fullPath.substring(0, fullPath.lastIndexOf("/") !== -1 ? fullPath.lastIndexOf("/") : fullPath.lastIndexOf("\\"));
  await mkdir(dir, { recursive: true });

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed: ${url} (${res.status})`);
    return;
  }
  const buf = await res.arrayBuffer();
  await writeFile(fullPath, Buffer.from(buf));
  console.log(`✓ ${dest}`);
}

async function main() {
  console.log("Downloading assets...");
  const batches = [];
  for (let i = 0; i < assets.length; i += 4) {
    batches.push(assets.slice(i, i + 4));
  }
  for (const batch of batches) {
    await Promise.all(batch.map((a) => download(a.url, a.dest)));
  }
  console.log("Done!");
}

main().catch(console.error);
