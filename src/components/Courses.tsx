import Link from 'next/link'
import { Course } from '@/types/course'

interface CoursesProps {
  courses: Course[]
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <div className="grid-1">
      {courses.map((course: Course) => (
        <div key={course.id} className="bg-blue-100 p-4 m-4 rounded-lg">
          <h2 className="text-xl font-bold">{course.title}</h2>
          <small className="block mb-2">Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
