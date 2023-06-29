import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Users, Blog, Courses, Menu, Newsletter } from "../pages/admin";
import { AdminLayout } from "../layouts/AdminLayout";

const user = null;

export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<AdminLayout />} />
      ) : (
        <>
          {["/admin", "/admin/blog"].map((path) => (
            <Route
              element={loadLayout(AdminLayout, Blog)}
              key={path}
              path={path}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
          <Route
            path="/admin/courses"
            element={loadLayout(AdminLayout, Courses)}
          />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
          <Route
            path="/admin/newsletter"
            element={loadLayout(AdminLayout, Newsletter)}
          />
        </>
      )}
    </Routes>
  );
}
