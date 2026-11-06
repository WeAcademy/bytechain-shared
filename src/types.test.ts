import { describe, expect, expectTypeOf, it } from 'vitest';

import type {
  AuthResponse,
  AuthUser,
  CourseResponse,
  CreateCourseRequest,
  EnrollmentStatusResponse,
  UserRole,
} from './index';

describe('shared auth types', () => {
  it('models an authenticated session', () => {
    const user: AuthUser = {
      id: 'user-1',
      email: 'user@example.com',
      role: 'admin',
    };
    const response: AuthResponse = {
      user,
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
    };

    expect(response.user.role).toBe('admin');
    expectTypeOf<UserRole>().toEqualTypeOf<'user' | 'admin' | 'tutor'>();
  });
});

describe('shared course types', () => {
  it('models a course and its enrollment state', () => {
    const course: CourseResponse = {
      id: 'course-1',
      title: 'Stellar Basics',
      description: 'An introduction to Stellar.',
      difficulty: 'beginner',
      tags: ['stellar'],
      thumbnailUrl: null,
      enrollmentCount: 10,
      createdAt: new Date(0).toISOString(),
      updatedAt: new Date(0).toISOString(),
      isEnrolled: true,
    };
    const enrollment: EnrollmentStatusResponse = { enrolled: true };

    expect(course.tags).toContain('stellar');
    expect(enrollment.enrolled).toBe(true);
    expectTypeOf<CreateCourseRequest>().toMatchTypeOf<{ title: string }>();
  });
});
