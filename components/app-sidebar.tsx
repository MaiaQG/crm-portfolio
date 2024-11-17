import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "CRM",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendário",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Procurar",
    url: "#",
    icon: Search,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Image
            src="/logo2.jpg"
            width={173}
            height={39}
            alt="crmMaia"
            className="mb-8 items-center flex"
          ></Image>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroupLabel>Infinity CRM</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  );
}
