'use client';
import ContainerLayout from '@/components/layouts/ContainerLayout';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import React, { useState } from 'react';
import { courseFilterCategories } from '@/data/allcoursesfilter';

const CoursesPage = () => {
	const [filter, setFilter] = useState(false);
	const [openCategories, setOpenCategories] = useState<string[]>([]);
	const [selectedOptions, setSelectedOptions] = useState<
		Record<string, string[]>
	>({});

	const handleToggleCategory = (key: string) => {
		setOpenCategories((prev) =>
			prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
		);
	};

	const handleOptionChange = (catKey: string, value: string) => {
		setSelectedOptions((prev) => {
			const current = prev[catKey] || [];
			return {
				...prev,
				[catKey]: current.includes(value)
					? current.filter((v) => v !== value)
					: [...current, value],
			};
		});
	};

	const handleClear = () => {
		setSelectedOptions({});
		setOpenCategories([]);
		setFilter(false);
	};
	return (
		<ContainerLayout>
			<div>
				<div className='md:flex-row md:gap-8 relative flex flex-col gap-4 '>
					<div>
						<span className='flex text-sm text-muted font-secondary gap-1'>
							<Link href='/'>
								<span className='cursor-pointer hover:underline'>Home</span>
							</Link>
							<span>|</span>
							<Link href='/courses'>
								<span className='cursor-pointer hover:underline'>
									Programmes
								</span>
							</Link>
						</span>
						<span className='text-brand-primary-black font-bold md:text-4xl text-2xl'>
							Find A Course
						</span>
						<p className='mt-6'>
							Looking for the perfect course? Explore from our wide range of
							undergraduate, postgraduate and research programs.
						</p>
					</div>
					<div className='flex gap-1 items-end pb-2'>
						<input
							type='text'
							placeholder='Search...'
							className='border p-1 border-surface-2 rounded-md'
						/>
						<Button variant='primary' icon='fi fi-br-search'>
							Search
						</Button>
						<Button
							variant='secondary'
							icon='fi fi-br-bars-filter p-0.75'
							onClick={() => setFilter(!filter)}
						></Button>
						{filter && (
							<div className='absolute top-full right-12 mt-2 w-72  border border-surface-2 rounded-xl shadow-lg z-10 flex flex-col gap-0.5 overflow-hidden '>
								<div className='text-lg px-4 pt-4 bg-background '>Filter</div>
								<div className='divide-y divide-surface-2 bg-background'>
									{courseFilterCategories.map((cat) => (
										<div key={cat.key}>
											<button
												type='button'
												className='w-full flex items-center justify-between px-4 py-3 text-left text-brand-primary-black hover:bg-neutral-50 focus:outline-none'
												onClick={() => handleToggleCategory(cat.key)}
											>
												<span className='font-normal'>{cat.label}</span>
												<span
													className={`transition-transform ml-2 ${openCategories.includes(cat.key) ? 'rotate-180' : ''}`}
												>
													<i className='fi fi-br-angle-small-up'></i>
												</span>
											</button>
											{openCategories.includes(cat.key) && (
												<div className='pl-6 pb-2 flex flex-col gap-2'>
													{cat.options.map((opt) => (
														<label
															key={opt.value}
															className='flex items-center gap-2 text-sm font-normal'
														>
															<input
																type='checkbox'
																className='accent-brand-primary'
																checked={
																	selectedOptions[cat.key]?.includes(
																		opt.value
																	) || false
																}
																onChange={() =>
																	handleOptionChange(cat.key, opt.value)
																}
															/>
															{opt.label}
														</label>
													))}
												</div>
											)}
										</div>
									))}
								</div>
								<div className='flex justify-between gap-2 px-4 py-3 border-t border-surface-2 bg-background rounded-b-xl font-normal'>
									<Button
										variant='contrastAlt'
								
										onClick={handleClear}
									>
										Clear
									</Button>
									<Button
										variant='primary'
										className='!px-7'
										onClick={() => setFilter(false)}
									>
										Apply
									</Button>
								</div>
							</div>
						)}
					</div>
				</div>
				<div> </div>
			</div>
		</ContainerLayout>
	);
};

export default CoursesPage;
