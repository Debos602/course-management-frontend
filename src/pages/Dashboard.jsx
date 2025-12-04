import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Dashboard() {
    const [courses, setCourses] = useState([
        { id: 1, title: "Intro to React", instructor: "Alice", seats: 30 },
        { id: 2, title: "Advanced JavaScript", instructor: "Bob", seats: 25 },
        { id: 3, title: "UI/UX Fundamentals", instructor: "Carol", seats: 20 },
    ]);

    const [newCourse, setNewCourse] = useState({ title: "", instructor: "", seats: "" });

    const addCourse = (e) => {
        e.preventDefault();
        if (!newCourse.title) return;
        const nextId = courses.length ? Math.max(...courses.map((c) => c.id)) + 1 : 1;
        setCourses([
            ...courses,
            { id: nextId, title: newCourse.title, instructor: newCourse.instructor || "TBD", seats: Number(newCourse.seats) || 0 },
        ]);
        setNewCourse({ title: "", instructor: "", seats: "" });
    };

    const removeCourse = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-24">
            <Helmet>
                <title>Dashboard — Course Management</title>
            </Helmet>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-black">Dashboard</h1>
                        <p className="text-slate-300">Manage courses and basic course data.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <h2 className="font-semibold text-lg mb-3">Courses</h2>
                            {courses.length === 0 ? (
                                <p className="text-slate-300">No courses yet.</p>
                            ) : (
                                <ul className="space-y-3">
                                    {courses.map((course) => (
                                        <li key={course.id} className="flex items-center justify-between bg-white/3 p-3 rounded-lg">
                                            <div>
                                                <div className="font-semibold">{course.title}</div>
                                                <div className="text-sm text-slate-300">Instructor: {course.instructor} • Seats: {course.seats}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => removeCourse(course.id)} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg">Remove</button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <h2 className="font-semibold text-lg mb-3">Quick Actions</h2>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">Export CSV</button>
                                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg">Sync Data</button>
                            </div>
                        </div>
                    </div>

                    <aside className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <h3 className="font-semibold mb-3">Add Course</h3>
                        <form onSubmit={addCourse} className="space-y-3">
                            <div>
                                <label className="block text-sm text-slate-300 mb-1">Title</label>
                                <input value={newCourse.title} onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm text-slate-300 mb-1">Instructor</label>
                                <input value={newCourse.instructor} onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm text-slate-300 mb-1">Seats</label>
                                <input value={newCourse.seats} onChange={(e) => setNewCourse({ ...newCourse, seats: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white" />
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">Add Course</button>
                            </div>
                        </form>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
