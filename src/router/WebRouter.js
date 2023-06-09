import React from "react";
import { Routes, Route } from "react-router-dom";
import { Blog, Contact, Courses, Home, Post } from "../pages/web";
import { ClientLayout } from "../layouts";

export function WebRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayout, Home)} />
      <Route path="/courses" element={loadLayout(ClientLayout, Courses)} />
      <Route path="/contact" element={loadLayout(ClientLayout, Contact)} />
      <Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
      <Route path="/post/:path" element={loadLayout(ClientLayout, Post)} />
    </Routes>
  );
}
