// Course response types — shared between backend and frontend

export interface CourseResponse {
  id: string;
  title: string;
  description: string;
  published?: boolean;
  difficulty: string | null;
  tags: string[];
  thumbnailUrl: string | null;
  enrollmentCount: number;
  createdAt: string;
  updatedAt: string;
  isEnrolled?: boolean;
}

export interface EnrollmentStatusResponse {
  enrolled: boolean;
  enrolledAt?: string;
}

export interface CourseRegistrationResponse {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
}

export interface EnrolledCourseResponse {
  id: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  progressPercent: number;
  enrolledAt: string;
}

// Request DTOs (shared validation shapes)
export interface CreateCourseRequest {
  title: string;
  description: string;
  difficulty?: string;
  tags?: string[];
  thumbnailUrl?: string;
}

export interface UpdateCourseRequest {
  title?: string;
  description?: string;
  difficulty?: string;
  tags?: string[];
  thumbnailUrl?: string;
  published?: boolean;
}

export interface CourseFilterRequest {
  search?: string;
  difficulty?: string;
  tags?: string[];
  page?: number;
  limit?: number;
}
