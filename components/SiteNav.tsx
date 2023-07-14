'use client';

import * as React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Button, buttonVariants } from './ui/button';
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
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { Icons } from './Icons';

export default function SiteNav() {
	const segment = useSelectedLayoutSegment();
	return (
		<>
			<div className="hidden md:flex">
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
				<Button variant="default" className="ml-4">
					Client Login
				</Button>
			</div>
			<div className="md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant={`outline`}>
							<Icons.menu />
						</Button>
					</SheetTrigger>

					<SheetContent>
						<SheetHeader></SheetHeader>
						<div className="flex justify-between flex-col h-full">
							<div className="grid gap-4 py-4">
								{siteConfig['site-nav'].map((item, index) =>
									item.subsections ? (
										<div key={index} className="flex flex-col">
											<div className="uppercase text-slate-400 font-bold">
												{item.title}
											</div>
											{item.subsections.map((item, index) => (
												<SheetClose key={index} asChild>
													<Link
														href={item.href}
														className={cn(
															'pl-5',
															buttonVariants({
																variant: 'link',
																className: `justify-start`,
															})
														)}
													>
														{item.title}
													</Link>
												</SheetClose>
											))}
										</div>
									) : (
										<SheetClose key={index} asChild>
											<Link
												href={item.href}
												className={cn(
													`font-secondary uppercase`,
													item.href.startsWith(`/${segment}`)
														? 'cursor-default text-highlight'
														: 'hover:text-highlight/80 hover:underline'
												)}
											>
												{item.title}
											</Link>
										</SheetClose>
									)
								)}
							</div>
							<Button variant="default" className="ml-4">
								Client Login
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</>
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
