interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3?: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface UserSocial {
  instagram_username: string | null;
  portfolio_url: string | null;
  twitter_username: string | null;
  paypal_email: string | null;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  twitter_username: string | null;
  portfolio_url: string | null;
  bio: string | null;
  location: string | null;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: UserSocial;
}

interface TopicSubmission {
  status: string;
  approved_on?: string | null;
}

interface TopicSubmissions {
  [topic: string]: TopicSubmission;
}

interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: Sponsor;
}

interface Sponsor {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string | null;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface AlternativeSlugs {
  [languageCode: string]: string;
}
interface BreadcrumbItem {
  slug: string;
  title: string;
  index: number;
  type: string;
}
export interface UnsplashPhotoData {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  breadcrumbs: BreadcrumbItem[];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: Sponsorship | null;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  user: User;
}
