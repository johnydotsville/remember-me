function lastCourseInMonth(exams, month) {
  return exams.findLast(exam => exam.month === month)?.course
    || `В ${month} нет экзаменов`;
}