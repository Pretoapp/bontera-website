import { groq } from 'next-sanity';

export const projectsQuery = groq`
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    category,
    description,
    location,
    year,
    client,
    mainImage,
    featured
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true && defined(slug.current)]
  | order(coalesce(year, 0) desc, _createdAt desc)[0...6] {
    _id,
    title,
    slug,
    "slugCurrent": slug.current,
    category,
    description,
    location,
    year,
    mainImage
  }
`;


export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    "slugCurrent": slug.current,
    category,
    description,
    shortDescription,
    location,
    year,
    startDate,
    endDate,
    client,
    value,
    projectValue,
    budget,
    duration,
    status,
    size,
    area,
    squareMeters,
    scope,
    services,
    features,
    highlights,
    challenges,
    solutions,
    results,
    awards,
    certifications,
    teamSize,
    architect,
    contractor,
    engineers,
    mainImage,
    heroImage,
    coverImage,
    image,
    gallery,
    images,
    featured
  }
`;

export const relatedProjectsQuery = groq`
  *[_type == "project" && slug.current != $slug && (
    category == $category ||
    featured == true
  )] | order(year desc)[0...3] {
    _id,
    title,
    slug,
    "slugCurrent": slug.current,
    category,
    location,
    year,
    mainImage
  }
`;

export const newsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category
  }
`;

export const latestNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category
  }
`;

export const teamQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    department,
    image,
    bio,
    email,
    linkedin
  }
`;
