import React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';
import {
  Blocks,
  CircleHelp,
  FileText,
  HelpCircle,
  MousePointerClick,
  Settings2,
} from 'lucide-react';
import { NavProjects } from './nav-projects';
import { NavUser } from './nav-user';
import { NavPainelInicial } from './nav-painel-inicial';

const email = 'dashboard.inf022@ifba.edu.br';
const nome = 'INF 022';
const iniciais = 'INF';

const data = {
  user: {
    name: nome,
    email,
    avatar: '/images/avatar.jpg',
    iniciais,
  },
  painelPrincipal: [
    {
      title: 'Painel Inicial',
      url: '/painel-inicial',
      icon: Blocks,
      isActive: false,
    },
  ],
  navMain: [
    {
      title: 'Relatórios Estaduais',
      url: '#',
      icon: FileText,
      isActive: true,
      items: [
        {
          title: 'Compras',
          url: '#',
        },
        {
          title: 'Vendas',
          url: '#',
        },
        {
          title: 'Totais',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Dúvidas Frequentes',
      url: '#',
      icon: HelpCircle,
      items: [
        {
          title: 'FAQ',
          url: '#',
          icon: CircleHelp,
        },
        {
          title: 'Outras Soluções',
          url: '#',
          icon: MousePointerClick,
        },
      ],
    },
    {
      name: 'Configurações',
      url: '#',
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavPainelInicial items={data.painelPrincipal} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
