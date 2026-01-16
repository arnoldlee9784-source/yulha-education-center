
export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration?: string;
  instructor?: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum Page {
  Home = 'home',
  AllCourses = 'all-courses',
  Practicum = 'practicum',
  Communication = 'communication',
  Professional = 'professional',
  Leadership = 'leadership',
  Schedule = 'schedule',
  Notice = 'notice',
  Inquiry = 'inquiry',
  Apply = 'apply'
}
