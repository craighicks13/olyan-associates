'use client';

import * as React from 'react';
import { Button } from './ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function SiteNav() {
	return (
		<div>
			<NavigationMenu>
				<NavigationMenuList>
					{siteConfig['site-nav'].map((item) => (
						<NavigationMenuItem key={item.title}>
							{item.subsections ? (
								<div>
									<NavigationMenuTrigger>
										{item.title}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
											{item.subsections?.map((item) => (
												<ListItem
													key={item.title}
													title={item.title}
													href={item.href}
												>
													{item.description}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</div>
							) : (
								<Link href={item.href} legacyBehavior passHref>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
									>
										{item.title}
									</NavigationMenuLink>
								</Link>
							)}
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
/**
 * <NavigationMenu>
				<NavigationMenuList>
					{siteConfig['site-nav'].map((item) => (
						<NavigationMenuItem key={item.title}>
							{item.subsections ? (
								<>
									<NavigationMenuTrigger>
										{item.title}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
											{item.subsections?.map((item) => (
												<ListItem
													key={item.title}
													title={item.title}
													href={item.href}
												>
													{item.description}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</>
							) : (
								<NavigationMenuItem>
									<Link href={item.href} legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											{item.title}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							)}
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
			
			const ListItem = React.forwardRef<
			React.ElementRef<'a'>,
			React.ComponentPropsWithoutRef<'a'>
			>(({ className, title, children, ...props }, ref) => {
				return (
					<li>
					<NavigationMenuLink asChild>
					<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
						)}
						{...props}
						>
						<div className="text-sm font-medium leading-none">
						{title}
						</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
						</p>
						</a>
						</NavigationMenuLink>
						</li>
						);
					});
					ListItem.displayName = 'ListItem';
					
					*/
