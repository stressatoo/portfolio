import MainLayout from "@/layouts/MainLayout";
import DashboardPage from "@/pages/DashboardPage";
import ProjectsPage from "@/pages/ProjectsPage";
import type { Route } from "@/types/route";
import { createBrowserRouter } from "react-router";

export const routes: Route[] = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
        label: "Home",
        showInNav: true,
      },
      {
        path: "/projects",
        Component: ProjectsPage,
        label: "Projects",
        showInNav: true,
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const router = createBrowserRouter(routes as any);
