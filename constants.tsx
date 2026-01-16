
import { Course, Page } from './types';

export const NAV_ITEMS = [
  { id: Page.Home, label: '홈', href: '#' },
  { id: Page.AllCourses, label: '전체교육과정', href: '#all-courses' },
  { id: Page.Practicum, label: '평생교육사 현장실습', href: '#practicum' },
  { id: Page.Inquiry, label: '교육 문의', href: '#inquiry' },
  { id: Page.Notice, label: '공지사항', href: '#notice' },
  { id: Page.Apply, label: '수강신청', href: '#apply' },
];

export interface EnhancedCourse extends Course {
  status: '접수중' | '마감임박' | '교육중';
  tags: string[];
}

export interface ScheduleItem {
  id: string;
  date: string;
  time: string;
  title: string;
  instructor: string;
  location: string;
  status: '예정' | '진행중' | '마감';
}

export const COURSES: EnhancedCourse[] = [
  {
    id: 'practicum-course',
    category: Page.Practicum,
    title: '평생교육사 현장실습 과정',
    description: '이론을 넘어 현장의 노하우를 직접 경험하는 평생교육사 2급/3급 필수 현장실습 과정입니다.',
    instructor: '율하 교육운영팀',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    status: '접수중',
    tags: ['자격증', '실무중심', '160시간']
  },
  {
    id: 'mz-comm',
    category: Page.Communication,
    title: 'MZ부모 소통법',
    description: '세대 간의 간극을 좁히고 아이와 더 깊이 공감할 수 있는 소통 전략을 배웁니다.',
    instructor: '우호경 박사 (아주대)',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    status: '접수중',
    tags: ['인기', '온라인']
  },
  {
    id: 'privacy',
    category: Page.Professional,
    title: '실무 중심 개인정보보호',
    description: '전직 개인정보보호위원회 팀장이 직접 강의하는 현장감 넘치는 법률 해석 교육입니다.',
    duration: '2시간',
    instructor: '개보위 전직 팀장',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    status: '마감임박',
    tags: ['법정의무', '실무']
  },
  {
    id: 'child-mind',
    category: Page.Communication,
    title: '그림 속 아이 마음 읽기',
    description: '아이의 그림을 통해 내면의 심리 상태를 파악하고 올바른 훈육 방향을 설정합니다.',
    instructor: '우호경 박사 (아주대)',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    status: '접수중',
    tags: ['심리', '자격증']
  },
  {
    id: 'school-violence',
    category: Page.Leadership,
    title: '학교폭력 예방 및 심리',
    description: '학교 현장에서 발생하는 갈등을 예방하고 학생들의 심리적 치유를 돕는 전문 과정입니다.',
    duration: '4시간',
    instructor: '우호경 박사 (아주대)',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    status: '교육중',
    tags: ['청소년', '예방교육']
  },
  {
    id: 'land-comp',
    category: Page.Professional,
    title: '토지보상 절차의 이해',
    description: '복잡한 토지보상 절차를 실 사례를 통해 일반인도 알기 쉽게 설명합니다.',
    instructor: '부동산 법률 전문가',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    status: '접수중',
    tags: ['법률', '자산']
  },
  {
    id: 'esg-leader',
    category: Page.Leadership,
    title: 'ESG 리더십',
    description: '지속 가능한 성장을 위한 현대 리더의 필수 소양인 ESG 경영과 가치관을 다룹니다.',
    instructor: '경영 전략 전문가',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    status: '접수중',
    tags: ['경영', '최신']
  }
];

export const SCHEDULES: ScheduleItem[] = [
  {
    id: 's1',
    date: '2024.04.05',
    time: '14:00 - 16:00',
    title: 'MZ부모 소통법 (1회차)',
    instructor: '우호경 박사',
    location: '실시간 Zoom 교육',
    status: '예정'
  },
  {
    id: 's2',
    date: '2024.04.08',
    time: '10:00 - 12:00',
    title: '개인정보보호 실무 특강',
    instructor: '개보위 전직 팀장',
    location: '본관 402호 세미나실',
    status: '진행중'
  },
  {
    id: 's3',
    date: '2024.04.12',
    time: '13:00 - 17:00',
    title: '학교폭력 예방 전문가 심화',
    instructor: '우호경 박사',
    location: '본관 대강당',
    status: '예정'
  },
  {
    id: 's4',
    date: '2024.04.15',
    time: '15:00 - 17:00',
    title: '토지보상 법률 사례 연구',
    instructor: '부동산 전문가',
    location: '온라인 스트리밍',
    status: '마감'
  },
  {
    id: 's5',
    date: '2024.04.20',
    time: '10:00 - 13:00',
    title: 'ESG 경영 리더십 컨퍼런스',
    instructor: '경영 전략 전문가',
    location: '본관 405호 컨퍼런스룸',
    status: '예정'
  }
];
