export interface Post {
  id: number;
  author: string;
  author_image: string;
  author_id: number;
  likes: string[];
  comments: Comment[];
  description: string;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export interface Comment {
  id: number;
  author: string;
  author_image: string;
  post: string;
  text: string;
  updated_at: Date;
}

export interface User {
  user_permissions: any[];
  groups: any[];
  bio: string | null;
  image: string;
  email: string;
  date_jointed: Date;
  id: number;
  posts: Post[];
  posts_count: number;
  last_login: Date | null;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_active: boolean;
}

/* Redux */
export interface AuthState {
  access: string | null;
  refresh: string | null;
  is_authenticated: boolean;
  is_loading: boolean;
  user: User | null;
}

export interface Form {
  [key: string]: string;
}
